const assert = require("assert");
const Record = require("../record.js");

describe("Record", function(){
  let record1;
  let record2;
  let record3;
  let record4;
  let record5;


  beforeEach(function(){
    record1 = new Record("Oasis", "Definitely Maybe", "Rock and roll", 15);
    record2 = new Record("The Stone Roses", "The Stone Roses", "Rock and roll", 10);
    record3 = new Record("Ocean Colour Scene", "Moseley Shoals", "Indie", 5);
    record4 = new Record("Blur", "Parklife", "Britpop", 18);
    record5 = new Record("Metallica", "Master of Puppets", "Heavy metal", 8);
  });

it('should have a artist', function(){
  assert.deepStrictEqual(record1.artist, "Oasis")
});

it('should have a title', function(){
  assert.deepStrictEqual(record2.title, "The Stone Roses")
});

it('should have a genre', function(){
  assert.deepStrictEqual(record3.genre, "Indie")
});

it('should have a price', function(){
  assert.deepStrictEqual(record4.price, 18)
});


it('should print out properties', function(){
  assert.deepStrictEqual(record1.properties(), "Definitely Maybe by Oasis, Rock and roll, price: £15");
});








});
