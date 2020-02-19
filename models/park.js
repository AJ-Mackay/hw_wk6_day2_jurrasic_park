const Park = function (name, ticketPrice, collectionOfDinosaurs) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.collectionOfDinosaurs = collectionOfDinosaurs;
}

Park.prototype.addDinosaur = function (name) {
  this.collectionOfDinosaurs.push(name)
};

Park.prototype.removeDinosaur = function () {
  this.collectionOfDinosaurs.pop()
};

Park.prototype.mostAttractedPeople = function () {
  Math.max.apply(Math, this.collectionOfDinosaurs.map(function (dinosaur) {
    return dinosaur.guestsAttractedPerDay;
  }));
};

module.exports = Park;
