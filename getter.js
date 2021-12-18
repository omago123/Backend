
//  Getter and setter
class User {
    // constructor
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        // call get and set method
        this.age = age;
    }
  
    
    get age() {
        return this._age;
    }
  
    // to avoid wrong input
    set age(value){
      //   if (value <0) {
      //       throw Error('age can not be negative');
      //   }
      this._age = value < 0 ? 0 : value;
    }
  }
  
  const user1 = new User('Steve', 'Job', -1);
  console.log(user1);
  
  
  