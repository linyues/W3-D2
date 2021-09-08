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
            if(this.Leaderteacher){
                const result = `I am ${this.Leaderteacher.name}. I know ${student.name} become Leader of Class ${this.number}.`;
                console.log(result);
            }
        }else {
            console.log("It is not one of us.");
        }
    }

    appendMember(student) {
        student.klass = this;
        if(this.Jointeacher){
            const result = `I am ${this.Jointeacher.name}. I know ${student.name} has joined Class ${this.number}.`;
            console.log(result);
        }
    }

    registerJoinListener(teacher){
        this.Jointeacher = teacher;
    }
    registerAssignLeaderListener(teacher){
        this.Leaderteacher = teacher;
    }
}
