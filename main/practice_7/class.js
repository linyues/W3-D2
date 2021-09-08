class Class {
    constructor(number){

        this.number = number;
    }

    toString(){
        return this.number.toString();
    }

    getDisplayName(){

        return `Class ` + this.number;
    }

}

module.exports = Class;
