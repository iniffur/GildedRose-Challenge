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
    const gildedRose = new Shop([new Item("foo", 0, 10)]);
    const items = gildedRose.newUpdateQuality();
    expect(items[0].quality).toBe(8);
  })
});
