// async @ await
// clear style of using promise 

// 1. async
// easy to use promise
async function fetchUser(){
    // do network request in 10 secs....
    return 'ellie'
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await 🌟
function delay(ms) {

    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(1000);
    return '🍎'
}
 
// async function getBanana() {
//     await delay(1000);
//     return '🍌'
// }

function getBanana(){
    return delay(2000)
    .then(() => '🍌');
}


// function pickFruits() {
//     return getApple().then(apple => {
//         return getBanana().then(banana => `${apple} +${banana}`);
//     });
// }



// async function pickFruits() {
//     const apple = await getApple();
//     const banana = await getBanana();
//     return `${apple} + ${banana}`;
// }

async function pickFruits() {
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`
}

pickFruits().then(console.log);

// 3. userful Promise APIs
function pickAllFruits(){
    // wait until all promise object in array  and collect all.
    return Promise.all([getApple(), getBanana()]).then(fruits =>
        // join : array -> string
        fruits.join(' + ')
    );
}

pickAllFruits().then(console.log);

function pickOnlyOne() {
    return Promise.rack([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);




   
 