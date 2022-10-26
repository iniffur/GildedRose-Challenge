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

  updateNormalItems(i){
    // Updates normal items - quality degrades twice as fast once sell by date passed
    if (this.items[i].quality > 0){
      if (this.items[i].sellIn < 0){
        this.items[i].quality -= 2
      } else {
        this.items[i].quality -= 1
      }
    }
    this.items[i].sellIn -= 1;
  }

  updateAgedBrie(i){
    // Updates Aged Brie - quality increases twice as fast once sell by date passed
    if (this.items[i].quality < 50){
      if (this.items[i].sellIn < 0 && this.items[i].quality < 49){
        this.items[i].quality += 2
      } else {
        this.items[i].quality += 1
      }
    }
    this.items[i].sellIn -= 1;
  }

  updateBackstagePasses(i){
    // Updates Backstage Passes - quality increases by 2 when 10 days or less, 3 when 5 days or less, but 0 after concert
    if (this.items[i].quality < 50){ 
      if ((this.items[i].sellIn <= 0)){
        this.items[i].quality = 0
      } else if (this.items[i].sellIn <= 5 && this.items[i].quality < 48){
        this.items[i].quality += 3
      } else if (this.items[i].sellIn <= 10 && this.items[i].quality < 49){
        this.items[i].quality += 2
      } else {
        this.items[i].quality += 1
      }
    }
    this.items[i].sellIn -= 1;
  }

  maxSulfurasQuality(i){
    if (this.items[i].quality > 50){
      this.items[i].quality = 50
    } 
  }

  newUpdateQuality(){
    for (let i = 0; i < this.items.length; i++){
      if(this.items[i].name == 'Aged Brie'){
        this.updateAgedBrie(i)
      } else if(this.items[i].name.startsWith("Sulfuras") === true){
        this.maxSulfurasQuality(i)
      } else if(this.items[i].name.startsWith("Backstage passes") === true){
        this.updateBackstagePasses(i)
      } else {
        this.updateNormalItems(i)
      }
    }
    return this.items;
  }



  // updateQuality() {
  //   for (let i = 0; i < this.items.length; i++) {
  //     if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
  //       if (this.items[i].quality > 0) {
  //         if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
  //           this.items[i].quality = this.items[i].quality - 1;
  //         }
  //       }
  //     } else {
  //       if (this.items[i].quality < 50) {
  //         this.items[i].quality = this.items[i].quality + 1;
  //         if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
  //           if (this.items[i].sellIn < 11) {
  //             if (this.items[i].quality < 50) {
  //               this.items[i].quality = this.items[i].quality + 1;
  //             }
  //           }
  //           if (this.items[i].sellIn < 6) {
  //             if (this.items[i].quality < 50) {
  //               this.items[i].quality = this.items[i].quality + 1;
  //             }
  //           }
  //         }
  //       }
  //     }
  //     if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
  //       this.items[i].sellIn = this.items[i].sellIn - 1;
  //     }
  //     if (this.items[i].sellIn < 0) {
  //       if (this.items[i].name != 'Aged Brie') {
  //         if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
  //           if (this.items[i].quality > 0) {
  //             if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
  //               this.items[i].quality = this.items[i].quality - 1;
  //             }
  //           }
  //         } else {
  //           this.items[i].quality = this.items[i].quality - this.items[i].quality;
  //         }
  //       } else {
  //         if (this.items[i].quality < 50) {
  //           this.items[i].quality = this.items[i].quality + 1;
  //         }
  //       }
  //     }
  //   }

  //   return this.items;
  // }
}

module.exports = {
  Item,
  Shop
}
