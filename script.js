const animalSpecies = document.querySelector('.animal-species');
const animalColor = document.querySelector('.animal-color');
const animalName = document.querySelector('.animal-name');
const animalCountry = document.querySelector('.animal-country');
const animalImage = document.querySelector('.animal-image');
const feedAnimal = document.querySelector('.feed-animal');
const animalFoodMsg = document.querySelector('.animal-food-msg');
const userInput = document.querySelector('.user-input');

class Animal {
    // Constructor creates new object
    // Parameter defines what the new object will contain
    constructor (species, animalName, country, color, img) {
        this.species = species;
        this.animalName = animalName;
        this.country = country;
        this.color = color;
        this.img = img;
    }

    // Class method to be used with objects
    feedAnimal() {
        animalFoodMsg.innerHTML = `${this.animalName} have been fed with ${userInput.value}`;

    }
}

// New object instance of animal
const Dog = new Animal('Dog', 'Tom', 'norway', 'Black', './images.jpg');

console.log(Dog.species);
console.log(Dog);

animalSpecies.innerHTML = Dog.species;
animalColor.innerHTML = Dog.color;
animalName.innerHTML = Dog.animalName;
animalCountry.innerHTML = Dog.color;
animalImage.innerHTML += `<img src='${Dog.img}' />`;

/* const feeding = function(e) {
    Dog.feedAnimal();
    e.preventDefault();
}; */

// feedAnimal.onclick = feeding;

feedAnimal.addEventListener('click', function(e) {
    e.preventDefault();
    Dog.feedAnimal();
});