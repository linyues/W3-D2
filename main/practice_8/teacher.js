import Person from './person'

class Teacher extends Person{
    constructor(id, name , age,myklass){

        super(id,name,age);
        this.klass = myklass;
    }

    introduce(){
        if (this.klass != null){ return  super.introduce()+` I am a Teacher. I teach Class ${this.klass}.`;}
        else {
            return super.introduce()+` I am a Teacher. I teach No Class.`;
        }
    }
}
module.exports = Teacher;

