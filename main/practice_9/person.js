class Person {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    introduce(){
        return `My name is ${this.name}. I am ${this.age} years old.`;
    }

    isEqual(person) {
        return person.id === this.id;
    }
}

module.exports = Person;
