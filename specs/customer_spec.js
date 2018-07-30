const _ = require("lodash");

const assert = require("assert");
const Record = require("../record.js");
const RecordStore = require("../recordStore.js");
const Collector = require("../customer.js");

describe("customer", function(){

    let record1, record2, record3, record4;
    let customer;

  beforeEach(function(){
    recordStore = new RecordStore();
    customer = new Customer(30.00);
    anotherCustomer = new Customer(10.00);

    record1 = new Record("Oasis", "Definitely Maybe", "Rock and roll", 15);
    record2 = new Record("The Stone Roses", "The Stone Roses", "Rock and roll", 10);
    record3 = new Record("Ocean Colour Scene", "Moseley Shoals", "Indie", 5);
    recordStore.addRecord(record1);
    recordStore.addRecord(record2);
    recordStore.addRecord(record3);
  });

  it('should be able to add records to their collection', function(){
    customer.addRecord(record1);
    assert.deepStrictEqual(customer.collection, record1);
  });

    // unfinished
  it('should be able to sell records', function(){
    customer.buyRecord(recordStore, record1);
    assert.strictEqual(customer.budget, 30);
    assert.strictEqual(recordStore.balance,);
    assert.deepStrictEqual(customer.collection, [record1]);
});
  }

  it('should not be able to buy a record if he cannot afford it', function(){
  
  }
  //
  // it('should be able to view the total value of their collection'
  //
  // it('should be able to view the total value of all records of a given genre'
  //
  // it('should be able to view their most valuable record'
  //
  // it('should be able to sort their records by value'
  //
  // it('should be able to compare the value of their collection with another RecordCollector'


});
