
// Promise is a JavaScript object for asynchronous opreation.
// state: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files)
    console.log('doing something...');
    setTimeout(() =>{
        //resolve('ellie');
        reject(new Error('no network'))
    },2000);
});


// 2. Consumers: then, catch, finally
promise
    .then((value) => {
        console.log(value);
    })
    .catch(error => {
        console.log(error);
    })
    // no matter what of result  finally is called after processing.
    .finally(() => {
        console.log('finally');
    })


// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
    
})

fetchNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num - 1), 2000);
    });
})
.then(num => console.log(num));

// 4 error
const getHen = () =>
    new Promise((resolve, reject) => {
    setTimeout(() => resolve('🐔'), 1000);
});
const getEgg = hen =>
    new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${hen} => 🥚`), 1000);
});
const cook = egg =>
    new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳 `), 1000);
});

getHen() 
    .then(getEgg)       // .then(hen => getEgg(hen))
    .then(cook)         // .then(egg => cook(egg))
    .then(console.log); // .then(meal => console.log(meal));
    
