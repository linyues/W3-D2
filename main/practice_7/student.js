import Person from './person'

class Student extends Person{
    constructor(name , age ,myklass){

        super(name,age);
        this.klass = myklass;
    }

    introduce(){


        return  super.introduce()+` I am a Student. I am at Class ${this.klass}.`;
    }
}
module.exports = Student;
