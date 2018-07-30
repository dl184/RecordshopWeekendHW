const _ = require("lodash");

const Customer = function(collection, budget){
  this.collection = [];
  this.budget = budget;
};

Customer.prototype.addRecord = function (record) {
  this.collection.push(record);
};

Customer.prototype.buyRecord = function(recordStore, record){
  this.addRecord(record);
  this.budget -= record.price;
  recordStore.inventory.pop(record);
  recordStore.balance += record.price;
};

Customer.prototype.sellRecord = function(record){
  var index = this.collection.indexOf(record);
  this.collection.splice(index, 1);
  this.budget += record.price;
};

Customer.prototype.totalValueOfCollectionByGenre = function(genre){
  var genreArray = _.filter(this.collection, record => record.genre === genre);
  return parseFloat(_.sumBy(genreArray, "price").toFixed(1));
};

Customer.prototype.maxValueRecord = function(){
  return _.maxBy(this.collection, (record => record.price));
};

Customer.prototype.sortByValue()= function(type){
  return _.orderBy(this.collection, "price", type )
};

Customer.prototype.comapreValue() = function(recordCollector){
  var thisValue = this.totalValueOfCollection();
  var = compareValue = customer.totalValueOfCollection();
  if(thisValue > compareValue){
    return this;
  } else {
    return recordCollector;
  }
}
