
const { Shop, Item } = require("../src/gilded_rose");

const items = [
  new Item("+5 Dexterity Vest", 1, 10),
  new Item("Aged Brie", 2, 0),
  new Item("Sulfuras, Hand of Ragnaros", 0, 80),
  new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
  new Item("Backstage passes to a TAFKAL80ETC concert", 11, 30),
  new Item("Backstage passes to a TAFKAL80ETC concert", 2, 30),

  // This Conjured item does not work properly yet
  new Item("Conjured Mana Cake", 2, 12),
];

const days = Number(process.argv[4]) || 4;
const gildedRose = new Shop(items);

console.log("OMGHAI!");
for (let day = 0; day < days; day++) {
  console.log(`\n-------- day ${day} --------`);
  console.log("name, sellIn, quality");
  items.forEach(item => console.log(`${item.name}, ${item.sellIn}, ${item.quality}`));
  gildedRose.updateQuality();
}
