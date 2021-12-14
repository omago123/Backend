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
 
async function getBanana() {
    await delay(1000);
    return '🍌'
}

// function getBanana(){
//     return delay(3000)
//     .then(() => '🍌');
// }

async function pickFruits() {
    const apple = await getApple();
    const banana = await getBanana();
    return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

   
 