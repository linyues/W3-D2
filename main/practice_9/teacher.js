import Person from './person';

module.exports = class Teacher extends Person {
    constructor(id, name, age, klass) {
        super(id, name, age);
        this.klass = klass;
    }

    introduce() {
        return `${super.introduce()} I am a Teacher. I teach ${this.klass ? `Class ${this.klass}` : 'No Class' }.`;
    }

    introduceWith(student) {
        return `${super.introduce()} I am a Teacher. I${
            this.klass === student.klass ? '' : ' don\'t'
            } teach ${student.name}.`;
    }
};
