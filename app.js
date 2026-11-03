const search = document.querySelector("#search");
const brandOptions = document.querySelector("#brand-options");
const brandPrevious = document.querySelector("#brand-previous");
const brandNext = document.querySelector("#brand-next");
const grid = document.querySelector("#products");
const results = document.querySelector("#results");
const empty = document.querySelector("#empty");
const featured = document.querySelector("#featured-list");
const previous = document.querySelector("#previous");
const next = document.querySelector("#next");
const dialog = document.querySelector("#product-dialog");
const productImage = document.querySelector("#product-image");
const productVariants = document.querySelector("#product-variants");
const productQuantity = document.querySelector("#product-quantity");
const productMinus = document.querySelector("#product-minus");
const productPlus = document.querySelector("#product-plus");
const addToCart = document.querySelector("#add-to-cart");
const selectedFlavor = document.querySelector("#selected-flavor");
const cartDialog = document.querySelector("#cart-dialog");
const cartItems = document.querySelector("#cart-items");
const cartDelivery = document.querySelector("#cart-delivery");
const clearCart = document.querySelector("#clear-cart");
const openCart = document.querySelector("#open-cart");
const cartClose = cartDialog.querySelector("form button");
const cart = [];
const brl = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
const cardTemplate = document.createElement("template");
const cartTemplate = document.createElement("template");
let selectedProduct;
let flavor = "";
let quantity = 1;

cardTemplate.innerHTML = `
  <article class="card">
    <div class="card-media"><span class="tag"></span><img alt="" loading="lazy" decoding="async"></div>
    <div class="card-body">
      <p class="eyebrow"></p>
      <h3></h3>
      <button class="card-variants" type="button"></button>
      <p class="price card-price"></p>
      <button class="button primary flavor-trigger" type="button">Sabores</button>
    </div>
  </article>`;

cartTemplate.innerHTML = `
  <li class="cart-item">
    <img alt="" width="60" height="66">
    <div class="cart-item-copy">
      <p class="eyebrow"></p><h3></h3><p class="spec-chip"></p>
      <p class="price"></p><p class="unit-price"></p>
    </div>
    <div class="cart-item-actions">
      <button class="cart-remove" type="button">Remover</button>
      <div class="stepper" role="group" aria-label="Quantidade do item">
        <button type="button" data-change="-1">−</button><span class="line-quantity"></span><button type="button" data-change="1">+</button>
      </div>
    </div>
  </li>`;

function money(cents) {
  return brl.format(cents / 100);
}

function updateProductSelection() {
  const subtotal = money(selectedProduct.priceCents * quantity);
  productQuantity.textContent = quantity;
  productMinus.disabled = quantity <= 1;
  document.querySelector("#product-subtotal").textContent = subtotal;
  selectedFlavor.textContent = flavor ? `✓ Selecionado: ${flavor}` : "";
  addToCart.disabled = !flavor;
  addToCart.textContent = flavor ? `Adicionar ao carrinho · ${subtotal}` : "Escolha o sabor";
}

function showProduct(product) {
  selectedProduct = product;
  flavor = "";
  quantity = 1;
  productImage.src = product.image;
  productImage.alt = product.name;
  document.querySelector("#product-brand").textContent = product.brand;
  document.querySelector("#product-name").textContent = product.name;
  const spec = document.querySelector("#product-spec");
  spec.textContent = product.spec;
  spec.hidden = !product.spec;
  document.querySelector("#product-price").textContent = money(product.priceCents);
  const variants = product.variants.length ? product.variants : [product.sample || "Única"];
  productVariants.replaceChildren(...variants.map(variant => {
    const button = document.createElement("button");
    button.type = "button";
    button.setAttribute("aria-pressed", "false");
    button.textContent = variant;
    button.addEventListener("click", () => {
      productVariants.querySelector('[aria-pressed="true"]')?.setAttribute("aria-pressed", "false");
      button.setAttribute("aria-pressed", "true");
      flavor = variant;
      updateProductSelection();
    });
    return button;
  }));
  updateProductSelection();
  dialog.showModal();
}

function changeQuantity(change) {
  quantity = Math.max(1, quantity + change);
  updateProductSelection();
}

productMinus.addEventListener("click", () => changeQuantity(-1));
productPlus.addEventListener("click", () => changeQuantity(1));

function renderCart() {
  const units = cart.reduce((total, item) => total + item.quantity, 0);
  const subtotal = cart.reduce((total, item) => total + item.product.priceCents * item.quantity, 0);
  document.querySelector("#cart-count").textContent = units === 1 ? "1 unidade adicionada" : `${units} unidades adicionadas`;
  const badge = document.querySelector("#cart-badge");
  badge.textContent = units;
  badge.hidden = !units;
  openCart.setAttribute("aria-label", units ? `Abrir carrinho (${units} ${units === 1 ? "unidade" : "unidades"})` : "Abrir carrinho");
  clearCart.hidden = !units;
  document.querySelector("#cart-empty").hidden = !!units;
  document.querySelector("#cart-items-title").hidden = !units;
  document.querySelector("#cart-totals").hidden = !units;
  cartDelivery.hidden = !units;
  if (!units) {
    cartDelivery.querySelectorAll("input, select").forEach(field => { field.value = ""; });
  }
  document.querySelector("#cart-subtotal").textContent = money(subtotal);
  document.querySelector("#cart-total").textContent = money(subtotal);
  cartItems.replaceChildren(...cart.map((item, index) => {
    const row = cartTemplate.content.firstElementChild.cloneNode(true);
    row.querySelector("img").src = item.product.image;
    row.querySelector(".eyebrow").textContent = item.product.brand;
    row.querySelector("h3").textContent = item.product.name;
    row.querySelector(".spec-chip").textContent = `Sabor: ${item.flavor}`;
    row.querySelector(".price").textContent = money(item.product.priceCents * item.quantity);
    row.querySelector(".unit-price").textContent = `${money(item.product.priceCents)} / un.`;
    row.querySelector(".line-quantity").textContent = item.quantity;
    const itemName = `${item.product.name} · ${item.flavor}`;
    const remove = row.querySelector(".cart-remove");
    remove.setAttribute("aria-label", `Remover ${itemName}`);
    remove.addEventListener("click", () => {
      cart.splice(index, 1);
      renderCart();
      (cartItems.children[index]?.querySelector(".cart-remove") || cartClose).focus();
    });
    for (const button of row.querySelectorAll("[data-change]")) {
      const change = Number(button.dataset.change);
      button.disabled = change === -1 && item.quantity <= 1;
      button.setAttribute("aria-label", `${change === -1 ? "Diminuir" : "Aumentar"} quantidade de ${itemName}`);
      button.addEventListener("click", () => {
        item.quantity = Math.max(1, item.quantity + change);
        renderCart();
        const updated = cartItems.children[index];
        (updated.querySelector(`[data-change="${change}"]:enabled`) || updated.querySelector('[data-change="1"]')).focus();
      });
    }
    return row;
  }));
}

addToCart.addEventListener("click", () => {
  if (!flavor) return;
  const existing = cart.find(item => item.product === selectedProduct && item.flavor === flavor);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ product: selectedProduct, flavor, quantity });
  }
  renderCart();
  dialog.close();
  cartDialog.showModal();
});

openCart.addEventListener("click", () => cartDialog.showModal());
clearCart.addEventListener("click", () => {
  cart.length = 0;
  renderCart();
  cartClose.focus();
});
renderCart();

function createCard(product, rank) {
  const card = cardTemplate.content.firstElementChild.cloneNode(true);
  const image = card.querySelector("img");
  image.src = product.image;
  image.alt = product.name;
  const tag = card.querySelector(".tag");
  tag.textContent = rank ? `DESTAQUE ${String(rank).padStart(2, "0")}` : product.spec;
  tag.hidden = !tag.textContent;
  card.querySelector(".eyebrow").textContent = product.brand;
  card.querySelector("h3").textContent = product.name;
  const flavorCount = card.querySelector(".card-variants");
  flavorCount.textContent = product.variants.length > 1
    ? `${product.variants.length} sabores disponíveis`
    : product.variants[0] || product.sample;
  flavorCount.setAttribute("aria-label", `Ver opções de ${product.name}`);
  flavorCount.addEventListener("click", () => showProduct(product));
  card.querySelector(".card-price").textContent = money(product.priceCents);
  const button = card.querySelector(".flavor-trigger");
  button.setAttribute("aria-label", `Sabores de ${product.name}`);
  button.addEventListener("click", () => showProduct(product));
  return card;
}

function normalize(text) {
  return text.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase();
}

const brands = [...new Set(products.map(product => product.brand))].sort((a, b) => a.localeCompare(b, "pt-BR"));
brandOptions.append(...brands.map(name => {
  const button = document.createElement("button");
  button.className = "brand-option";
  button.type = "button";
  button.dataset.brand = name;
  button.setAttribute("aria-pressed", "false");
  button.textContent = name;
  return button;
}));
const allBrands = brandOptions.firstElementChild;
let activeBrand = allBrands;
document.querySelector("[data-model-count]").textContent = products.length;
document.querySelector("[data-brand-count]").textContent = brands.length;
const catalogCards = products.map(product => ({
  brand: product.brand,
  terms: normalize([product.name, product.brand, product.sample, product.spec, ...product.variants].join(" ")),
  card: createCard(product)
}));
grid.append(...catalogCards.map(item => item.card));

function filterCatalog() {
  const terms = normalize(search.value).trim().split(/\s+/);
  const brand = activeBrand.dataset.brand;
  let count = 0;
  for (const item of catalogCards) {
    const matches = (!brand || item.brand === brand) && terms.every(term => item.terms.includes(term));
    item.card.hidden = !matches;
    count += Number(matches);
  }
  results.textContent = count === 1 ? "1 modelo" : `${count} modelos`;
  empty.hidden = count > 0;
}

function selectBrand(button) {
  activeBrand.setAttribute("aria-pressed", "false");
  activeBrand = button;
  activeBrand.setAttribute("aria-pressed", "true");
  filterCatalog();
}

search.addEventListener("input", filterCatalog);
brandOptions.addEventListener("click", event => {
  const button = event.target.closest("button[data-brand]");
  if (button) selectBrand(button);
});
document.querySelector("#clear").addEventListener("click", () => {
  search.value = "";
  selectBrand(allBrands);
  brandOptions.scrollTo({ left: 0 });
  search.focus();
});
filterCatalog();

function syncBrandArrows() {
  brandPrevious.disabled = brandOptions.scrollLeft <= 1;
  brandNext.disabled = brandOptions.scrollLeft + brandOptions.clientWidth >= brandOptions.scrollWidth - 1;
}

function scrollBrandOptions(direction) {
  brandOptions.scrollBy({ left: direction * brandOptions.clientWidth * .75, behavior: scrollBehavior() });
}

brandPrevious.addEventListener("click", () => scrollBrandOptions(-1));
brandNext.addEventListener("click", () => scrollBrandOptions(1));
brandOptions.addEventListener("scroll", syncBrandArrows, { passive: true });
new ResizeObserver(syncBrandArrows).observe(brandOptions);
syncBrandArrows();

const featuredNames = ["Oxbar 50k", "Geek Bar 20k", "Waka 25k", "Lost 20k", "Life Pod 40k", "V150"];
featured.append(...featuredNames.map((name, index) => createCard(products.find(product => product.name === name), index + 1)));

function syncArrows() {
  previous.disabled = featured.scrollLeft <= 1;
  next.disabled = featured.scrollLeft + featured.clientWidth >= featured.scrollWidth - 1;
}

function scrollBehavior() {
  return matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth";
}

function scrollFeatured(direction) {
  const firstCard = featured.firstElementChild;
  const step = firstCard.nextElementSibling.offsetLeft - firstCard.offsetLeft;
  featured.scrollBy({ left: direction * step, behavior: scrollBehavior() });
}

previous.addEventListener("click", () => scrollFeatured(-1));
next.addEventListener("click", () => scrollFeatured(1));
featured.addEventListener("scroll", syncArrows, { passive: true });
new ResizeObserver(syncArrows).observe(featured);
syncArrows();

const mobileMenu = document.querySelector(".mobile-nav");
mobileMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => { mobileMenu.open = false; });
});

const serviceStatus = document.querySelector(".service-status");
const serviceStatusLabel = serviceStatus.querySelector("strong");
const brandLocation = document.querySelector(".brand-location");
const londrinaClock = new Intl.DateTimeFormat("pt-BR", {
  timeZone: "America/Sao_Paulo",
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23"
});

function refreshServiceStatus() {
  const [hour, minute] = londrinaClock.format(new Date()).split(":").map(Number);
  const minutesSinceMidnight = hour * 60 + minute;
  const isOpen = minutesSinceMidnight >= 10 * 60 && minutesSinceMidnight < 23 * 60 + 30;
  serviceStatus.dataset.open = isOpen;
  brandLocation.dataset.open = isOpen;
  serviceStatusLabel.textContent = isOpen ? "Aberto agora" : "Fechado agora";
  brandLocation.textContent = isOpen ? "Aberto em Londrina" : "Fechado em Londrina";
  setTimeout(refreshServiceStatus, 60_000 - Date.now() % 60_000);
}

refreshServiceStatus();
