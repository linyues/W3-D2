import Person from './person';

module.exports = class Student extends Person {
    constructor(id, name, age, klass) {
        super(id, name, age);
        this.klass = klass;
    }

    introduce() {
        // console.log(this.klass);
        return `${super.introduce()} I am a Student. ${
            this.klass.leader && this.klass.leader === this ?
                `I am Leader of Class ${this.klass}` :
                `I am at Class ${this.klass}`
            }.`;
    }
};
