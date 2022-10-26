const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", () =>  {
  it("should foo", () => {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.newUpdateQuality();
    expect(items[0].name).toBe("foo");
  });

  it("normal items degrade by one with each passing day", () => {
    const gildedRose = new Shop([new Item("foo", 10, 10)]);
    const items = gildedRose.newUpdateQuality();
    expect(items[0].quality).toBe(9);
    expect(items[0].sellIn).toBe(9);
  })

  it("quality degrades twice as fast once sell by date has passed for normal items", () => {
    const gildedRose = new Shop([new Item("foo", -1, 10)]);
    const items = gildedRose.newUpdateQuality();
    expect(items[0].quality).toBe(8);
  })

  it("Aged Brie increases in quality as it ages", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 10, 10)]);
    const items = gildedRose.newUpdateQuality();
    expect(items[0].quality).toBe(11);
    expect(items[0].sellIn).toBe(9);
  })

  it("Aged Brie quality increases twice as fast once sell by date has passed for normal items", () => {
    const gildedRose = new Shop([new Item("Aged Brie", -1, 10)]);
    const items = gildedRose.newUpdateQuality();
    expect(items[0].quality).toBe(12);
  })

  it("Sulfuras items never age or decrease in quality", () => {
    const gildedRose = new Shop([new Item("Sulfuras, Hammer of Hephaestus", 10, 10)]);
    const items = gildedRose.newUpdateQuality();
    expect(items[0].quality).toBe(10);
    expect(items[0].sellIn).toBe(10);
  })

  it("Backstage passes quality increases as sellIn value decreases", () => {
    const gildedRose = new Shop([new Item("Backstage passes to ASDF1234 concert", 20, 20)]);
    const items = gildedRose.newUpdateQuality();
    expect(items[0].quality).toBe(21);
    expect(items[0].sellIn).toBe(19);
  })

  it("Backstage passes quality increase twice as fast when there are 10 or less days", () => {
    const gildedRose = new Shop([new Item("Backstage passes to ASDF1234 concert", 10, 20)]);
    const items = gildedRose.newUpdateQuality();
    expect(items[0].quality).toBe(22);
  })

  it("Backstage passes quality increase 3 times as fast when there are 5 or less days", () => {
    const gildedRose = new Shop([new Item("Backstage passes to ASDF1234 concert", 5, 20)]);
    const items = gildedRose.newUpdateQuality();
    expect(items[0].quality).toBe(23);
  })

  it("Backsstage passes quality drops to zero after concert", () => {
    const gildedRose = new Shop([new Item("Backstage passes to ASDF1234 concert", 0, 20)]);
    const items = gildedRose.newUpdateQuality();
    expect(items[0].quality).toBe(0);
  })

  it("Item quality can never be negative", () => {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.newUpdateQuality();
    expect(items[0].quality).toBe(0);
  })

  it("Item quality can never be greater than 50 - Aged Brie", () => {
    const gildedRose = new Shop([new Item("Aged Brie", -5, 50)]);
    const items = gildedRose.newUpdateQuality();
    expect(items[0].quality).toBe(50);
  })

  it("Item quality can never be greater than 50 - Backstage passes", () => {
    const gildedRose = new Shop([new Item("Aged Brie", 3, 50)]);
    const items = gildedRose.newUpdateQuality();
    expect(items[0].quality).toBe(50);
  })

  it("Item quality can never be greater than 50 - Sulfuras", () => {
    const gildedRose = new Shop([new Item("Sulfuras, Hammer of Hephaestus", 3, 500)]);
    const items = gildedRose.newUpdateQuality();
    expect(items[0].quality).toBe(50);
  })

  it("Conjured items degrade twice as fast as normal items", () => {
    const gildedRose = new Shop([new Item("Conjured, foo", 10, 10)]);
    const items = gildedRose.newUpdateQuality();
    expect(items[0].quality).toBe(8);
    expect(items[0].sellIn).toBe(9);
  })

  it("Conjured items degrade 4x as fast as normal items when past sell by date", () => {
    const gildedRose = new Shop([new Item("Conjured, foo", -4, 10)]);
    const items = gildedRose.newUpdateQuality();
    expect(items[0].quality).toBe(6);
  })

  it("Item quality can never be negative - Conjured1", () => {
    const gildedRose = new Shop([new Item("Conjured, foo", 12, 1)]);
    const items = gildedRose.newUpdateQuality();
    expect(items[0].quality).toBe(0);
  })

  it("Item quality can never be negative - Conjured2", () => {
    const gildedRose = new Shop([new Item("Conjured, foo", -3, 1)]);
    const items = gildedRose.newUpdateQuality();
    expect(items[0].quality).toBe(0);
  })
});
