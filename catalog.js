// Catálogo e valores demonstrativos da referência visual.
const products = [
  {
    "name": "V500",
    "brand": "IGNITE",
    "image": "assets/products/ignite-muygebri.webp",
    "sample": "Cool Menthol",
    "variants": [
      "Cool Menthol",
      "Pineapple Mango",
      "Grape Ice",
      "Green Apple",
      "Blueberry Ice",
      "Green Apple Pech Kiwi",
      "Banana Cherry",
      "Kiwi Açai",
      "Watermelon Kiwi",
      "Strawberry Watermelon",
      "Strawberry Apple Watermelon",
      "Icy Mint",
      "Strawberry Banana",
      "Watermelon Mix"
    ],
    "spec": "50.000 puffs",
    "priceCents": 13100
  },
  {
    "name": "Blvk 45k",
    "brand": "BLVK",
    "image": "assets/products/blvk-muyo37es.webp",
    "sample": "Strawberry Ice",
    "variants": [
      "Strawberry Ice",
      "Grape Ice",
      "Dragon Strawnana",
      "Watermelon Ice",
      "Blue Mint",
      "Strawberry Mango",
      "Kiwi Passion Fruit",
      "Strawberry Kiwi"
    ],
    "spec": "45.000 puffs",
    "priceCents": 10400
  },
  {
    "name": "Lost Dura 35k",
    "brand": "LOST MARY",
    "image": "assets/products/lost-mary-muymz7yg.webp",
    "sample": "Pineapple Ice",
    "variants": [
      "Pineapple Ice",
      "Watermelon Ice",
      "Miami Mint",
      "Menthol",
      "Strawberry Ice",
      "Pomegranate Cherry Pineapple",
      "Hawaiian Juice",
      "Hawaiian Mint",
      "Green Apple Ice",
      "Mango Ice",
      "Grape Fruit Passion Guava",
      "Blue Razz Ice",
      "Strawberry Watermelon",
      "Summer Orange"
    ],
    "spec": "35.000 puffs",
    "priceCents": 10400
  },
  {
    "name": "Elf 30k",
    "brand": "ELFBAR",
    "image": "assets/products/elfbar-muymetz9.webp",
    "sample": "Dragon Strawanana",
    "variants": [
      "Dragon Strawanana",
      "Guava Passion Fruit Kiwi",
      "Strawberry Ice",
      "Açai Banana Ice",
      "Winter Mint",
      "Blueberry Ice",
      "Elf Love",
      "Pineapple Mango"
    ],
    "spec": "30.000 puffs",
    "priceCents": 9900
  },
  {
    "name": "Flavor Beast 50k",
    "brand": "FLAVOR BEAST",
    "image": "assets/products/flavor-beast-muyo0tbg.webp",
    "sample": "Gusto Green Apple",
    "variants": [
      "Gusto Green Apple",
      "Peach Berry",
      "Sic Strawberry"
    ],
    "spec": "50.000 puffs",
    "priceCents": 8100
  },
  {
    "name": "Caliburn Koko",
    "brand": "KOKO",
    "image": "assets/products/koko-muyn3zj8.webp",
    "sample": "Recarregável",
    "variants": [
      "Recarregável"
    ],
    "spec": "Recarregável",
    "priceCents": 12600
  },
  {
    "name": "Bateria P100",
    "brand": "IGNITE",
    "image": "assets/products/ignite-muyg38pj.webp",
    "sample": "bateria",
    "variants": [
      "bateria"
    ],
    "spec": "",
    "priceCents": 4500
  },
  {
    "name": "Bateria Life 20k",
    "brand": "LIFE POD",
    "image": "assets/products/life-pod-muymlwen.webp",
    "sample": "bateria",
    "variants": [
      "bateria"
    ],
    "spec": "",
    "priceCents": 7700
  },
  {
    "name": "Elf Duke 35k",
    "brand": "ELFBAR",
    "image": "assets/products/elfbar-muymdcb3.webp",
    "sample": "Coconut Strawberry Ice",
    "variants": [
      "Coconut Strawberry Ice",
      "Watermelon Lemon Ice",
      "Blueberry Ice",
      "Fanta Grape",
      "Strawberry Kiwi Ice",
      "Icy Mint",
      "Mango Magic"
    ],
    "spec": "35.000 puffs",
    "priceCents": 9000
  },
  {
    "name": "Nic Salt BLVK 30ML",
    "brand": "BLVK",
    "image": "assets/products/blvk-muyo23k8.webp",
    "sample": "Grape Menthol",
    "variants": [
      "Grape Menthol",
      "Spearmint Menthol",
      "Original Spearmint",
      "Melon Spearmint"
    ],
    "spec": "",
    "priceCents": 7700
  },
  {
    "name": "V120",
    "brand": "IGNITE",
    "image": "assets/products/ignite-muygatrz.webp",
    "sample": "Pomegranate Lemon",
    "variants": [
      "Pomegranate Lemon",
      "Blue Razz Lemon",
      "Lemon Lime"
    ],
    "spec": "12.000 puffs",
    "priceCents": 8100
  },
  {
    "name": "World First 25k",
    "brand": "SPACEMAN",
    "image": "assets/products/spaceman-muyo7u6o.webp",
    "sample": "Cherry Fizz",
    "variants": [
      "Cherry Fizz",
      "Dragon Blue Razz",
      "Sour Apple Ice",
      "Black Peach Lemon",
      "Gummy Peach",
      "Sour Watermelon Peatch"
    ],
    "spec": "25.000 puffs",
    "priceCents": 7700
  },
  {
    "name": "V55",
    "brand": "IGNITE",
    "image": "assets/products/ignite-muygcmsb.webp",
    "sample": "Menthol",
    "variants": [
      "Menthol",
      "Watermelon Ice",
      "Grape Apple Açai",
      "Icy Mint",
      "Mint Melon"
    ],
    "spec": "5.500 puffs",
    "priceCents": 6800
  },
  {
    "name": "Shisha 40k",
    "brand": "IGNITE",
    "image": "assets/products/ignite-muygg12i.webp",
    "sample": "Blueberry Limonade Ice",
    "variants": [
      "Blueberry Limonade Ice",
      "Double Apple",
      "Triple Melon Ice",
      "Melon Mango Berries"
    ],
    "spec": "40.000 puffs",
    "priceCents": 11300
  },
  {
    "name": "Refil Life 10k",
    "brand": "LIFE POD",
    "image": "assets/products/life-pod-muymt3vv.webp",
    "sample": "Polar Ice",
    "variants": [
      "Polar Ice",
      "Kiwi Berry",
      "Green Apple Ice",
      "Capuccino",
      "Blueberry Mint",
      "Strawberry Kiwi",
      "Strong Apple",
      "Blackberry Ice",
      "Strawberry Bubblegum",
      "Watermelon Peach Ice",
      "Grape Ice",
      "Banana Custard",
      "Mint Bubblegum",
      "Pink Lemonade",
      "Love 66",
      "Grape Bubblegum",
      "Passion Mango Ice",
      "Passion Fruit Ice"
    ],
    "spec": "10.000 puffs",
    "priceCents": 7200
  },
  {
    "name": "Ice Master 40k",
    "brand": "THE BLACK SHEEP",
    "image": "assets/products/the-black-sheep-muynaz50.webp",
    "sample": "Grape / Grape",
    "variants": [
      "Grape / Grape",
      "Kiwi Grape Starfruit / Açai Straw Banana",
      "Grape / Strawberry Kiwi",
      "Grape / Menthol"
    ],
    "spec": "40.000 puffs",
    "priceCents": 12200
  },
  {
    "name": "V300",
    "brand": "IGNITE",
    "image": "assets/products/ignite-muyghcjm.webp",
    "sample": "Icy Mint",
    "variants": [
      "Icy Mint",
      "Grape Ice",
      "Menthol",
      "Dragon Fruit Watermelon",
      "Pineapple Kiwi Dragon Fruit",
      "Blueberry Ice",
      "Banana Coconut Water",
      "Strawberry Banana",
      "Pineapple Ice",
      "Strawberry Ice",
      "Green Apple",
      "Watermelon Mix",
      "Blueberry Strawberry Coconut",
      "Strawberry Kiwi",
      "Peach Mango"
    ],
    "spec": "30.000 puffs",
    "priceCents": 10800
  },
  {
    "name": "V150",
    "brand": "IGNITE",
    "image": "assets/products/ignite-muyg54b5.webp",
    "sample": "Dragon Fruit Lemonade",
    "variants": [
      "Dragon Fruit Lemonade",
      "Berry Blast",
      "Blueberry Ice",
      "Peppermint e Cream",
      "Sour Apple Ice",
      "Green Apple Peach Kiwi",
      "Sour Raspberry",
      "Aloe Grape",
      "Lemon Ice",
      "Cherry Banana"
    ],
    "spec": "",
    "priceCents": 8600
  },
  {
    "name": "Life Pod 40k",
    "brand": "LIFE POD",
    "image": "assets/products/elfbar-muymxbs9.webp",
    "sample": "Banana Bubblegum",
    "variants": [
      "Banana Bubblegum",
      "Watermelon Bubblegum",
      "Blackberry Hals",
      "Cherry Bubblegum",
      "Spearmint",
      "Miami Mint",
      "Menthol",
      "Blue Razz Bubblegum",
      "Monster Drink",
      "Love 66",
      "Passion Mango",
      "Strawberry Bubblegum",
      "Coconut Water"
    ],
    "spec": "40.000 puffs",
    "priceCents": 10400
  },
  {
    "name": "Dual Flavor 40k",
    "brand": "THE BLACK SHEEP",
    "image": "assets/products/elfbar-muynisvz.webp",
    "sample": "Grape / Menthol",
    "variants": [
      "Grape / Menthol",
      "Grape / Grape Mango",
      "Grape Mango / Flash Mint",
      "Strawberry Kiwi / Flash Mint",
      "Strawberry Kiwi / Cola Lime",
      "Blueberry Bubble / Sour Green Apple",
      "Grape / Passion Fruit",
      "Grape Blueberry / Cherry Berry"
    ],
    "spec": "40.000 puffs",
    "priceCents": 12600
  },
  {
    "name": "V400 Sweet",
    "brand": "IGNITE",
    "image": "assets/products/ignite-muyg6sjy.webp",
    "sample": "Strawberry Apple Watermelon",
    "variants": [
      "Strawberry Apple Watermelon",
      "Miami Mint",
      "Grape Ice",
      "Strawberry Banana"
    ],
    "spec": "40.000 puffs",
    "priceCents": 12200
  },
  {
    "name": "Coil Xros",
    "brand": "VAPORESSO",
    "image": "assets/products/vaporesso-muyn194c.webp",
    "sample": "0.6 3 ml",
    "variants": [
      "0.6 3 ml",
      "0.6 2 ml",
      "0.4 2 ml",
      "0.7",
      "1.0 2 ml",
      "1.2 2 ml",
      "0.8 2 ml"
    ],
    "spec": "",
    "priceCents": 3200
  },
  {
    "name": "Black Sheep 30k",
    "brand": "THE BLACK SHEEP",
    "image": "assets/products/the-black-sheep-muynkhyl.webp",
    "sample": "Grape / Passion Fruit",
    "variants": [
      "Grape / Passion Fruit",
      "Grape / Strawberry Banana",
      "Menthol / Watermelon Green Apple",
      "Menthol / Flash Mint",
      "Menthol / Mango Peach Watermelon",
      "Grape / Strawberry Kiwi",
      "Flash Mint / Grape",
      "Grape / Watermelon Bubble",
      "Strawberry Banana / Pineapple Coconut",
      "Cherry Raspberry / Watermelon Strawberry",
      "Sour Green Apple / Grape Bluebarry",
      "Strawberry Bubble / Sour Pineapple",
      "Flash Mint / Watermelon Strawberry"
    ],
    "spec": "30.000 puffs",
    "priceCents": 12200
  },
  {
    "name": "Elf Trio 40k",
    "brand": "ELFBAR",
    "image": "assets/products/elfbar-muymaxsg.webp",
    "sample": "Black Mint",
    "variants": [
      "Black Mint",
      "Cool Menthol",
      "Scary Berry",
      "Watermelon Ice",
      "Sour Apple Ice",
      "Sakura Grape",
      "Peach Twist",
      "Sour Strawberry Dragon Fruit",
      "Blue Razz Ice",
      "Strawberry Orange Lime",
      "Pineapple Lime",
      "Pomegranate Blast",
      "Orange Blast",
      "Blueberry Pom Slushy",
      "Raspberry Watermelon"
    ],
    "spec": "40.000 Puffs",
    "priceCents": 12600
  },
  {
    "name": "Luma 20k",
    "brand": "DINNER LADY",
    "image": "assets/products/dinner-lady-muynlqui.webp",
    "sample": "Blue Mint",
    "variants": [
      "Blue Mint",
      "Menthol"
    ],
    "spec": "20.000 puffs",
    "priceCents": 8100
  },
  {
    "name": "Refil life 20k",
    "brand": "LIFE POD",
    "image": "assets/products/life-pod-muymw7j5.webp",
    "sample": "Grape Bubblegum",
    "variants": [
      "Grape Bubblegum",
      "Strawberry Kiwi",
      "Green Apple Ice",
      "Strawberry Bubblegum",
      "Green Grape Ice",
      "Passion Fruit Bubblegum"
    ],
    "spec": "20.000 puffs",
    "priceCents": 8100
  },
  {
    "name": "Refil G32k OXBAR",
    "brand": "OXBAR",
    "image": "assets/products/oxbar-muynv06y.webp",
    "sample": "Strawberry Banana Ice",
    "variants": [
      "Strawberry Banana Ice",
      "Double Apple",
      "Fanta Strawberry",
      "Red Ice",
      "Banana Ice 2"
    ],
    "spec": "32.000 puffs",
    "priceCents": 6500
  },
  {
    "name": "V250",
    "brand": "IGNITE",
    "image": "assets/products/ignite-muygiwdk.webp",
    "sample": "Menthol",
    "variants": [
      "Menthol",
      "Icy Mint",
      "Pineapple Ice",
      "Strawberry Banana",
      "Strawberry Kiwi",
      "Blueberry Ice",
      "Watermelon Ice",
      "Strawberry Ice"
    ],
    "spec": "25.000 puffs",
    "priceCents": 10400
  },
  {
    "name": "Nik Bar 10k",
    "brand": "NIK BAR",
    "image": "assets/products/nik-bar-muyo4gj3.webp",
    "sample": "Icy Mint",
    "variants": [
      "Icy Mint",
      "Menthol",
      "Watermelon Ice",
      "Stone Freeze",
      "Blueberry Ice",
      "Flash Mint",
      "Strawberry Kiwi",
      "Strawberry Banana",
      "Aloe Grape",
      "Grape Apple Ice",
      "Watermelon Sour",
      "Blueberry Raspberry",
      "Juicy Peach",
      "Grape Ice",
      "Grape Strawberry Ice",
      "Cherry Watermelon Ice",
      "Strawberry Apple Watermelon",
      "Banana Ice"
    ],
    "spec": "10.000 puffs",
    "priceCents": 7200
  },
  {
    "name": "Bateria Life 10k",
    "brand": "LIFE POD",
    "image": "assets/products/life-pod-muymjpat.webp",
    "sample": "bateria",
    "variants": [
      "bateria"
    ],
    "spec": "",
    "priceCents": 6800
  },
  {
    "name": "Elf Bc Pro 45k",
    "brand": "ELFBAR",
    "image": "assets/products/elfbar-muym7zot.webp",
    "sample": "Kiwi Passion Fruit Guava",
    "variants": [
      "Kiwi Passion Fruit Guava",
      "Strawberry Kiwi",
      "Pineapple Pom"
    ],
    "spec": "45.000 puffs",
    "priceCents": 11300
  },
  {
    "name": "Black Sheep Mix 30k",
    "brand": "THE BLACK SHEEP",
    "image": "assets/products/elfbar-muynf119.webp",
    "sample": "Flash Mint / Miami Mint",
    "variants": [
      "Flash Mint / Miami Mint",
      "Flash Mint / Passion Fruit",
      "Grape / Strawberry Kiwi"
    ],
    "spec": "30.000 puffs",
    "priceCents": 13100
  },
  {
    "name": "Refil Life 8k",
    "brand": "LIFE POD",
    "image": "assets/products/life-pod-muymo30v.webp",
    "sample": "Green Apple",
    "variants": [
      "Green Apple",
      "Love 66",
      "Passion Fruit Mango",
      "Monster Drink",
      "Apple Berries Ice"
    ],
    "spec": "8.000 puffs",
    "priceCents": 6800
  },
  {
    "name": "Oxva xlim Golite",
    "brand": "OXVA",
    "image": "assets/products/oxva-muyntm3v.webp",
    "sample": "preto",
    "variants": [
      "preto"
    ],
    "spec": "Recarregável",
    "priceCents": 11700
  },
  {
    "name": "Life kit 10k",
    "brand": "LIFE POD",
    "image": "assets/products/life-pod-muymukpg.webp",
    "sample": "Polar Ice",
    "variants": [
      "Polar Ice",
      "Grape Honeydew",
      "Menthol",
      "Blackberry Ice"
    ],
    "spec": "",
    "priceCents": 13100
  },
  {
    "name": "v155",
    "brand": "IGNITE",
    "image": "assets/products/ignite-muyfy9f0.webp",
    "sample": "Menthol",
    "variants": [
      "Menthol",
      "Icy Mint",
      "Kiwi Passion Fruit Guava",
      "Green Apple",
      "Watermelon Dragon Fruit",
      "Pineapple Ice",
      "Watermelon Mix",
      "Blueberry Ice",
      "Strawberry Kiwi",
      "Strawberry Watermelon Ice",
      "Watermelon Ice",
      "Banana Ice",
      "Strawberry Banana",
      "Tropical Açai",
      "Strawberry Ice",
      "Grape Ice"
    ],
    "spec": "15.500 puffs",
    "priceCents": 8100
  },
  {
    "name": "Slim 15k",
    "brand": "THE BLACK SHEEP",
    "image": "assets/products/the-black-sheep-muyncckr.webp",
    "sample": "Menthol",
    "variants": [
      "Menthol",
      "Pink Lemonade",
      "Mango Peach Watermelon",
      "Watermelon Strawberry",
      "Watermelon Green Apple",
      "Blueberry",
      "Fresh Mint"
    ],
    "spec": "15.000 puffs",
    "priceCents": 9000
  },
  {
    "name": "Gh 23k",
    "brand": "ELFBAR",
    "image": "assets/products/elfbar-muyh26k8.webp",
    "sample": "Blueberry Pear",
    "variants": [
      "Blueberry Pear",
      "Grape Ice",
      "Green Apple Ice",
      "Spring Mint",
      "Baja Splash",
      "Peach Mango Watermelon",
      "Watermelon Ice",
      "Strawberry Banana",
      "Sakura Grape",
      "Apple Pear",
      "Watermelon Cherry",
      "Green Blue Sour Lime",
      "Kiwi Dragon Fruit",
      "Pineapple Plums Lime Mint",
      "Raspberry Watermelon Lemon"
    ],
    "spec": "23.000 puffs",
    "priceCents": 8600
  },
  {
    "name": "Black Sheep 55k",
    "brand": "THE BLACK SHEEP",
    "image": "assets/products/the-black-sheep-muyng0gu.webp",
    "sample": "Miami Mint",
    "variants": [
      "Miami Mint"
    ],
    "spec": "55.000 puffs",
    "priceCents": 12600
  },
  {
    "name": "Nic Salt 20mg",
    "brand": "BORN TO VAPE",
    "image": "assets/products/born-to-vape-muymi61u.webp",
    "sample": "Love 66",
    "variants": [
      "Love 66",
      "Spearmint Grape",
      "Bubble Mint",
      "Mint Huls",
      "Chery Huls",
      "Polar Mint",
      "Menthol Huls",
      "Double Spearmint",
      "Green Grape Huls",
      "Fresh Mint",
      "Strawberry Huls",
      "Pinemint",
      "Strawmint",
      "Passion Fruit"
    ],
    "spec": "20 miligramas",
    "priceCents": 6300
  },
  {
    "name": "Ice Master 30k",
    "brand": "THE BLACK SHEEP",
    "image": "assets/products/the-black-sheep-muynhovi.webp",
    "sample": "Açai Strawberry / Grape Mango",
    "variants": [
      "Açai Strawberry / Grape Mango"
    ],
    "spec": "30.000 puffs",
    "priceCents": 11300
  },
  {
    "name": "Elf Pro 40k",
    "brand": "ELFBAR",
    "image": "assets/products/elfbar-muyh0zyb.webp",
    "sample": "Tropical Baja",
    "variants": [
      "Tropical Baja",
      "Strawberry Blend",
      "Toasted Pineapple",
      "Sour Fcuking Fab"
    ],
    "spec": "40.000 puffs",
    "priceCents": 7200
  },
  {
    "name": "Refil 10k",
    "brand": "ELF WORLD",
    "image": "assets/products/elf-world-muyo6pkc.webp",
    "sample": "Love 66",
    "variants": [
      "Love 66",
      "Blackberry Ice",
      "Watermelon Ice"
    ],
    "spec": "10.000 puffs",
    "priceCents": 5400
  },
  {
    "name": "Waka 25k",
    "brand": "WAKA",
    "image": "assets/products/waka-muynmv4g.webp",
    "sample": "Aqua Ice",
    "variants": [
      "Aqua Ice",
      "Pistachio Ice",
      "Watermelon Peach",
      "Melon Ice",
      "Menthol"
    ],
    "spec": "25.000 puffs",
    "priceCents": 9000
  },
  {
    "name": "V400 Mix",
    "brand": "IGNITE",
    "image": "assets/products/ignite-muyg865l.webp",
    "sample": "Pineapple Mango Ice / Strawberry Ice",
    "variants": [
      "Pineapple Mango Ice / Strawberry Ice",
      "Blueberry Ice / Raspberry Blackberry",
      "Mango Ice / Passion Fruit Guava",
      "Peach Watermelon Ice / Mango Ice",
      "Grape Ice / Strawberry",
      "Banana Ice / Strawberry Ice",
      "Watermelon Grape Ice / Açaí Ice",
      "Strawberry Mango Ice / Banana Ice",
      "Strawberry Watermelon Ice / Aloe Grape",
      "Grape Ice / Watermelon Ice"
    ],
    "spec": "40.000 puffs",
    "priceCents": 12600
  },
  {
    "name": "REFIL P100",
    "brand": "IGNITE",
    "image": "assets/products/ignite-muyg1wyz.webp",
    "sample": "Green Apple",
    "variants": [
      "Green Apple",
      "Blueberry Ice",
      "Banana Ice",
      "Strawberry Kiwi",
      "Strawberry Ice",
      "Icy Mint",
      "Grape Ice",
      "Menthol",
      "Watermelon Ice"
    ],
    "spec": "10.000 puffs",
    "priceCents": 7200
  },
  {
    "name": "Bateria Svopp 32k",
    "brand": "SVOPP",
    "image": "assets/products/todas-muynw1mx.webp",
    "sample": "Bateria",
    "variants": [
      "Bateria"
    ],
    "spec": "",
    "priceCents": 4100
  },
  {
    "name": "Bro Hookah 40k",
    "brand": "BRO",
    "image": "assets/products/bro-muyn92g3.webp",
    "sample": "Peach Ice",
    "variants": [
      "Peach Ice"
    ],
    "spec": "40.000 puffs",
    "priceCents": 10800
  },
  {
    "name": "Refil Black Sheep Duo Mix 30k",
    "brand": "THE BLACK SHEEP",
    "image": "assets/products/the-black-sheep-muyndwm4.webp",
    "sample": "Mango Orange",
    "variants": [
      "Mango Orange",
      "Energy Drink",
      "Aloe Grape",
      "Tropical Ice Bomb",
      "Strawberry Kiwi",
      "Passion Fruit",
      "Grape"
    ],
    "spec": "30.000 puffs",
    "priceCents": 5400
  },
  {
    "name": "Oxbar 50k",
    "brand": "OXBAR",
    "image": "assets/products/oxbar-muynxv3l.webp",
    "sample": "Pineapple Ice",
    "variants": [
      "Pineapple Ice",
      "Grape Ice",
      "Watermelon Ice",
      "Strawberry Ice",
      "Passion Fruit Sour Kiwi",
      "Strawberry Grape",
      "Strawberry Kiwi"
    ],
    "spec": "50.000 puffs",
    "priceCents": 11700
  },
  {
    "name": "Elf Bc 15k",
    "brand": "ELFBAR",
    "image": "assets/products/elfbar-muynrw06.webp",
    "sample": "Bubbaloo Grape",
    "variants": [
      "Bubbaloo Grape",
      "Strawberry Ice",
      "Kiwi Passion Fruit Guava",
      "Blue Razz Ice",
      "Mango Magic",
      "Sakura Grape",
      "Tropical Lemonade",
      "Pineapple Ice",
      "Peach Mango Watermelon",
      "Americano Ice",
      "Passion Fruit Orange Guava",
      "Strawberry Kiwi",
      "Watermelon Ice",
      "Strawberry Watermelon",
      "Icy Mint",
      "Green Apple Ice",
      "Miami Mint",
      "Blueberry Ice"
    ],
    "spec": "15.000 puffs",
    "priceCents": 6300
  },
  {
    "name": "Geek Bar 20k",
    "brand": "GEEK BAR",
    "image": "assets/products/geek-bar-muynpsum.webp",
    "sample": "Blackberry Blueberry",
    "variants": [
      "Blackberry Blueberry",
      "Frozen Watermelon",
      "Stone Freeze",
      "Sour Strawas",
      "Banana Taffy Freeze",
      "Blue Razz Ice",
      "Frozen Strawberry",
      "Strawberry Kiwi Ice",
      "White Peach Raspberry"
    ],
    "spec": "20.000 puffs",
    "priceCents": 7700
  },
  {
    "name": "Sphere X 40k",
    "brand": "VAPORESSO",
    "image": "assets/products/vaporesso-muyn2hcu.webp",
    "sample": "Fresh Splash",
    "variants": [
      "Fresh Splash",
      "Blue Star",
      "Sour Batch Watermelon Peach",
      "Grape Mojo",
      "Fcuking Fab",
      "Blue Razz Ice",
      "Raspberry Peach Lime",
      "Sour Gush",
      "White Gummy",
      "Hawaii Dream",
      "Baja Splash Mtd",
      "Sour Apple B-Pop",
      "Fresh Berry Orange",
      "Berry Blast Triad",
      "Frosty Banana Taffy",
      "Tropical Bomb",
      "Peachy Smash"
    ],
    "spec": "40.000 puffs",
    "priceCents": 7700
  },
  {
    "name": "Bateria Life 8k",
    "brand": "LIFE POD",
    "image": "assets/products/life-pod-muymrmv3.webp",
    "sample": "bateria",
    "variants": [
      "bateria"
    ],
    "spec": "",
    "priceCents": 4100
  },
  {
    "name": "G30k",
    "brand": "OXBAR",
    "image": "assets/products/oxbar-muynzdo3.webp",
    "sample": "Blue Raspberry Lemon",
    "variants": [
      "Blue Raspberry Lemon",
      "Blackcurrant Lemon Ice",
      "Grape Peach",
      "Grand Purple",
      "Raspberry Lemon"
    ],
    "spec": "30.000 puffs",
    "priceCents": 9900
  },
  {
    "name": "Ice King 40k",
    "brand": "ELFBAR",
    "image": "assets/products/elfbar-muymc849.webp",
    "sample": "Dragon Strawnana",
    "variants": [
      "Dragon Strawnana",
      "Strawberry Watermelon",
      "Mango Magic",
      "Peach",
      "Tigers Blood",
      "Sour Lush Gummy",
      "Baja Splash",
      "Strawberry Ice",
      "Scary Berry",
      "Watermelon Ice",
      "Cherry Strazz",
      "Summer Splash",
      "Melon Grape Menthol",
      "Blueberry Ice",
      "Sour Apple Ice",
      "Bubbaloo Tuti Frutty",
      "Pech Mango Watermelon"
    ],
    "spec": "40.000 puffs",
    "priceCents": 10400
  },
  {
    "name": "Lost 20k",
    "brand": "LOST MARY",
    "image": "assets/products/elfbar-muyn0281.webp",
    "sample": "Berry Bust",
    "variants": [
      "Berry Bust",
      "Sour Strawberry Dragon Fruit",
      "Summer Grape",
      "Watermelon Ice",
      "Toasted Banana",
      "Hawaii Joice",
      "Strawmelon Peach"
    ],
    "spec": "20 000 puffs",
    "priceCents": 8100
  },
  {
    "name": "Elf Shisha 18k",
    "brand": "ELFBAR",
    "image": "assets/products/elfbar-muym96v3.webp",
    "sample": "Grape Raspberry",
    "variants": [
      "Grape Raspberry",
      "Love Dram",
      "Mango Ice"
    ],
    "spec": "18.000",
    "priceCents": 9000
  },
  {
    "name": "v80",
    "brand": "IGNITE",
    "image": "assets/products/ignite-muyg01xr.webp",
    "sample": "Strawberry Kiwi",
    "variants": [
      "Strawberry Kiwi",
      "Passion Fruit Sour Kiwi",
      "Strawberry Ice",
      "Watermelon Ice",
      "Grape Ice",
      "Icy Mint",
      "Grape Fruit Mint",
      "Cactus"
    ],
    "spec": "8000 pufs",
    "priceCents": 7700
  },
  {
    "name": "V400 Ice",
    "brand": "IGNITE",
    "image": "assets/products/ignite-muyg9qt3.webp",
    "sample": "Menthol",
    "variants": [
      "Menthol",
      "Mint",
      "Passion Fruit Sour Kiwi",
      "Strawberry Apple Watermelon",
      "Cherry Watermelon",
      "Lemon Lime",
      "Grape Mix",
      "Strawberry",
      "Strawberry Watermelon",
      "Grape Peach",
      "Banana Cherry",
      "Peach"
    ],
    "spec": "40.000 puffs",
    "priceCents": 12600
  }
];
