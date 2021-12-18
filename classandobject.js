
// 1. Getter and setter
class Person {
    // constructor
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this.age;
    }

    set age(value){
        this.age = value;
    }
}

const user1 = new UserStorage('Steve', 'Job', -1);
console.log(user1.age);
