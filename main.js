const person = {
    firstName: "Mikko",
    lastName: "Laquindanum",
    age: 21
}

console.log(person.firstName)
console.log(person['lastName'])

const meal = {
    appetizer: "Bread and oil",
    entree: "Silver Diner BYOB",
    dessert: "Chili's Lava cake",
    drink: "Water"
}

// making a new variable called dessert, whose value comes from the dessert property on the meal object.
const {dessert} = meal
// const dessert = meal.dessert

// console.log(dessert)

const {appetizer, entree} = meal

// aliasing/destructuring
// const {drink: myDrink} = meal
// const mydrink = meal.drink ^another way of typing

const {appetizer: myAppetizer, entree: myEntree, dessert: myDessert, drink: myDrink} = meal


console.log(myAppetizer, myEntree, myDessert, myDessert)

for (const key in person){
    console.log(person[key])
    // console.log these two things to see both the values and property
    console.log(key, person, person[key])
}

// adding to person(properties)
person.job = 'iOS Developer';
console.log(person)

person['pet'] = 'Mochi'
console.log(person)

delete person.pet

// classes and extending classes
class Dog {
    constructor(dogName, dogBreed, dogAge){
        console.log('Dog Class', dogName, dogBreed, dogAge)
        /*
        let this = {} empty object
        */
        this.name = dogName;
        this.breed = dogBreed;
        this.age = dogAge;
        this.hunger = 0

        this.toy = []
    }

    greeting(){
        console.log(`Hi, my name is ${this.name} and I am a ${this.age} year old ${this.breed}!`)
    }

    addToy(toy){
        this.toy.push(toy)
    }
}

const sandi = new Dog('Sandi', 'Begal', '13')
const beethoven = new Dog('Beethoven', 'St Bernard', 12)

sandi.greeting()

beethoven.greeting()

sandi.addToy('tennis ball')

console.log(sandi)

class Puppy extends Dog {
    constructor(dogName, dogBreed, dogAge, puppyTrainingLevel){
        console.log('Puppy Class', dogName, dogBreed, dogAge, puppyTrainingLevel)
        super(dogName, dogBreed, dogAge)

        this.trainingLevel = puppyTrainingLevel
    }

    levelUp(num){
        this.trainingLevel += num
    }
    
    greeting(){
        super.greeting()
        console.log("and I am a puppy")
    }
}

const derp = new Puppy("Derp", 'Dachshund', 1, 0)

derp.greeting()
derp.levelUp(4)
console.log(derp)
