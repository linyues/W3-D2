import Person from './person';

module.exports = class Teacher extends Person {
    constructor(id, name, age, klasses) {
        super(id, name, age);
        this.klasses = klasses;
    }

    introduce() {
        return `${super.introduce()} I am a Teacher. I teach ${this.klasses ? `Class ${this.klasses.join(", ")}` : 'No Class' }.`;
    }

    introduceWith(student) {
        return `${super.introduce()} I am a Teacher. I${
            this.isTeaching(student) ? '' : ' don\'t'
            } teach ${student.name}.`;
    }

    isTeaching(student) {
        return this.klasses.includes(student.klass);
    }
}
