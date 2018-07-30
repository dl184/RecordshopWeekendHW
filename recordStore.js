const _ = require("lodash");

const RecordStore = function(name, city, balance){
  this.name = name;
  this.city = city;
  this.balance = balance;
  this.inventory = [];
};

RecordStore.prototype.addRecord = function(record){
  this.inventory.push(record);
};


RecordStore.prototype.listInventory = function(){
  return this.inventory.map(function(record){
    return record.properties();
  });
};

RecordStore.prototype.sold = function(record){
  // foundrecord = this.inventory.find(function(record){
    return this.balance += record.price;
};

/* Below we use the lodash method of .reduce which reduces collection to a value
   which is the accumulated result of running each element in collection thru
   iteratee, where each successive invocation is supplied the return value of the
   previous. */
RecordStore.prototype.inventoryValue = function(){
  return _.reduce(this.inventory, function(accumulator ,record) {
    return record["price"] + accumulator;
  }, 0);
};

RecordStore.prototype.totalBalance = function(){
  // return this.inventoryValue + this.balance;
  inventoryValue = this.inventoryValue();
  balance = this.balance;
  return inventoryValue + balance;
};

RecordStore.prototype.searchByGenre = function(genre){
  return _.filter(this.inventory, ['genre', genre]);
};








module.exports = RecordStore;
