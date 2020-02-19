const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

let park;

  describe('Dinosaur', function() {
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let dinosaur4;
  let dinosaurs = [dinosaur1, dinosaur2, dinosaur3, dinosaur4]

  beforeEach(function () {
    dinosaur1 = new Dinosaur('T-Rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('Stegosaurus', 'herbivore', 80);
    dinosaur3 = new Dinosaur('Pinacosaurus', 'omnivore', 7);
    dinosaur4 = new Dinosaur('T-Rex', 'carnivore', 50);
    park = new Park('Jurrasic Park', 300, ['T-Rex', 'Stegosaurus', 'Pinacosaurus'])
  });

  it('should have a name', function (){
    const actual = park.name;
    assert.strictEqual(actual, "Jurrasic Park");
    });

  it('should have a ticket price', function (){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 300);
  });

  it('should have a collection of dinosaurs', function (){
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual(actual, ['T-Rex', 'Stegosaurus', 'Pinacosaurus']);
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDinosaur('Edmontosaurus');
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual(actual, ['T-Rex', 'Stegosaurus', 'Pinacosaurus', 'Edmontosaurus']);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.removeDinosaur();
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual(actual, ['T-Rex', 'Stegosaurus']);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.mostAttractedPeople(dinosaurs);
    const actual = dinosaurs;
    assert.strictEqual(actual, "Stegosaurus")
  });

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');


});

});
