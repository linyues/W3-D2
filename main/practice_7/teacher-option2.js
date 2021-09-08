import Person from './person'

class Teacher extends Person{
    constructor(name , age ,myklass){

        super(name,age);
        this.klass = myklass;
    }

    introduce(){
        if (this.klass != null){ return  super.introduce()+` I am a Teacher. I teach Class ${this.klass}.`;}
        else {
            return super.introduce()+` I am a Teacher. I teach No Class.`;
        }

    }

    introduceWith(student){
        if(student.klass === this.klass && this.klass != null){
            return super.introduce() + ` I am a Teacher. I teach ${student.name}.`

        }
        else
        {
            return super.introduce() + ` I am a Teacher. I don't teach ${student.name}.`

        }
    }

}
module.exports = Teacher;
