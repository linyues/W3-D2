  
export default class Class {
    constructor(number) {
        this.number = number;
    }

    getDisplayName() {
        return `Class ${this.number}`;
    }

    toString(){
        return this.number;
    }

    assignLeader(student){
        if (student.klass.number === this.number) {
            this.leader = student;
        }else {
            console.log("It is not one of us.");
        }
    }

    appendMember(student) {
        student.klass = this;
    }
}
