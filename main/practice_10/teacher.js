import Person from './person';

module.exports = class Teacher extends Person {
    constructor(id, name, age, classes) {
        super(id, name, age);
        this.klasses = classes;
    }

    introduce() {
        return `${super.introduce()} I am a Teacher. I teach ${this.klasses ? `Class ${this.klasses.join(", ")}` : 'No Class' }.`;
    }

    introduceWith(student) {
        return `${super.introduce()} I am a Teacher. I${
            this.klasses === student.klass ? '' : ' don\'t'
            } teach ${student.name}.`;
    }
};
