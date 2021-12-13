
// Array

const fruits =['apple','banana'];

// 1. for of
for(let fruit of fruits){
    console.log(fruit);
 }

 // 2.  forEach : Performs the specified action for each element in an array.
 fruits.forEach((fruit) => console.log(fruit));

// 3. Addtion, deletion, copy
// push: add an item to the end
fruits.push('strawberry','peach');
console.log(fruits);

// pop : remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift('strawberry','peach');
console.log(fruits);

// shift: remove an item to the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop. push

// splic: remove an item by index position

