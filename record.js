const _ = require("lodash");

const Record = function(artist, title, genre, price){
  this.artist = artist;
  this.title = title;
  this.genre = genre;
  this.price = price;
};

Record.prototype.properties = function () {
return `${this.title} by ${this.artist}, ${this.genre}, price: £${this.price}`
};





module.exports = Record;
