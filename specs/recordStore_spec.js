const assert = require("assert");
const RecordStore = require("../recordStore.js");
const Record = require("../record.js");



describe("RecordStore", function(){
  let recordStore1, recordStore2, recordStore3, recordStore4;
  let record1, record2, record3;


  beforeEach(function(){
    recordStore = new RecordStore();
    recordStore1 = new RecordStore("HMV", "Glasgow", 5000);
    recordStore2 = new RecordStore("All Ages Records", "London", 2000);
    recordStore3 = new RecordStore("Assai Records", "Dundee", 1000);
    record1 = new Record("Oasis", "Definitely Maybe", "Rock and roll", 15);
    record2 = new Record("The Stone Roses", "The Stone Roses", "Rock and roll", 10);
    record3 = new Record("Ocean Colour Scene", "Moseley Shoals", "Indie", 5);
  });

  it('should have a name', function(){
    assert.deepStrictEqual(recordStore1.name, "HMV")
  });

  it('should have a city', function(){
    assert.deepStrictEqual(recordStore2.city, "London")
  });

  it('should have a balance', function(){
    assert.deepStrictEqual(recordStore3.balance, 1000)
  });

  it('should be able to add record to inventory', function(){
    recordStore.addRecord(record1);
    recordStore.addRecord(record2);
    assert.deepStrictEqual(recordStore.inventory.length, 2)
  });

  it('should adjust stores balance when a record is sold', function(){
    recordStore1.addRecord(record1);
    recordStore1.sold(record1);
    assert.deepStrictEqual(recordStore1.balance, 5015)
  });

  it('should be able to show value of inventory', function(){
    recordStore1.addRecord(record1);
    recordStore1.addRecord(record2);
    assert.strictEqual(recordStore1.inventoryValue(), 25)
  });

  it('should show total shop balance', function(){
    recordStore1.addRecord(record1);
    recordStore1.addRecord(record2);
    recordStore1.addRecord(record3);
    assert.strictEqual(recordStore1.totalBalance(), 5030)
  });

  it('should show records of given genre', function(){
    const actual = [record1, record2];
      assert.deepStrictEqual(recordStore.searchByGenre('Rock and roll'), actual)
  });



});
