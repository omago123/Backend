
// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS

// 1. Default parameters (added in ES6)
// if user don`t input the 'from' parameter  it returns 'unknown'
function showMessage(message, from = 'unknown'){
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.

const print = function() {   // anonymous function
    console.log('print');
};
print();
const printAgain = print;
printAgain();

// Arrow function
//always anonymous

const simplePrint = function() {
    console.log('simplePrint');
};

const simplePrint = () => console.log('simpleprint!');
const simplePrint = (a,b) => {
    // do something more
    return a * b;
};
const add = function (a,b) {
    return a + b;
};

const add = (a,b) => a + b;

// IIFE: Immediately Invoked Function Expression
(function hello() {
    console.log('IIFE');
})();



