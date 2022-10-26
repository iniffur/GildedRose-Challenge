class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updateQuality(){
    for (let i = 0; i < this.items.length; i++){
      if(this.items[i].name == 'Aged Brie'){
        this.updateAgedBrie(i)
      } else if(this.items[i].name.startsWith("Sulfuras") === true){
        this.qualityRangeCheck(i)
      } else if(this.items[i].name.startsWith("Backstage passes") === true){
        this.updateBackstagePasses(i)
      } else if(this.items[i].name.startsWith("Conjured") === true){
        this.updateConjuredItems(i)
      } else {
        this.updateNormalItems(i)
      }
    }
    return this.items;
  }

  qualityRangeCheck(i){
    // Set minimum and maximum values for Quality
    if (this.items[i].quality < 0){
      this.items[i].quality = 0
    } else if (this.items[i].quality > 50){
      this.items[i].quality = 50
    }
  }

  updateNormalItems(i){
    // Updates normal items - quality degrades twice as fast once sell by date passed
    if (this.items[i].sellIn <= 0){
      this.items[i].quality -= 2
    } else {
      this.items[i].quality -= 1
    }
    this.items[i].sellIn -= 1;
    this.qualityRangeCheck(i)
  }

  updateAgedBrie(i){
    // Updates Aged Brie - quality increases twice as fast once sell by date passed
    if (this.items[i].sellIn <= 0){
      this.items[i].quality += 2
    } else {
      this.items[i].quality += 1
    }
    this.items[i].sellIn -= 1;
    this.qualityRangeCheck(i)
  }

  updateBackstagePasses(i){
    // Updates Backstage Passes - quality increases by 2 when 10 days or less, 3 when 5 days or less, but 0 after concert
    if ((this.items[i].sellIn <= 0)){
      this.items[i].quality = 0
    } else if (this.items[i].sellIn <= 5 ){
      this.items[i].quality += 3
    } else if (this.items[i].sellIn <= 10){
      this.items[i].quality += 2
    } else {
      this.items[i].quality += 1
    }
    this.items[i].sellIn -= 1;
    this.qualityRangeCheck(i)
  }

  updateConjuredItems(i){
    // Updates Conjured items - degrade twice as fast as normal items and 4 times as fast when past sell by date
    if (this.items[i].sellIn <= 0){
      this.items[i].quality -= 4
    } else {
      this.items[i].quality -= 2
    }
    this.items[i].sellIn -= 1;
    this.qualityRangeCheck(i)
  }
}

module.exports = {
  Item,
  Shop
}
