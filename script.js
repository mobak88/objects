class Animal {
  constructor(species, animalName, country, color) {
    this.species = species;
    this.animalName = animalName;
    this.country = country;
    this.color = color;
  }

  feedAnimal() {
    console.log(`${this.animalName} have been fed`);
  }
}

const Dog = new Animal('Dog', 'Tom', 'norway', 'Black');
console.log(Dog.species);
