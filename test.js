class UserStorage{
    loginUser(id, password, onSuccess, onError){
        setTimeout(()=>{
            if(id === 'ellie' && password === 'dream'){
                onSuccess(id)
            }else{
                onError(new Error('not found'))
            }
        },2000)
    }

    getRole(user, onSuccess, onError){
        setTimeout(() =>{
            if(user === 'ellie'){
                onSuccess({name: 'ellie', role: 'admin'})
            }else{
                onError(new Error('no access'))
            }
        },1000)
    }
}

const id = prompt('enter your id');
const password = prompt('enter your password');
const userStorage = new UserStorage();

userStorage.loginUser(
    id,
    password,
    user =>{
        userStorage.getRole(
            user,
            userWithRole =>{
                alert(`Hello! ${userWithRole.name}, you have a ${userWithRole.role}`);
            }
        ),
        error =>{
            console.log(error);
        }
    },
    error => {
        console.log(error);
    }
)
