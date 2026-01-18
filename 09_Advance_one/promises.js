const promisesOne = new Promise((resolve,reject)=>{
    //Do an asyn task
    //DB calls,cryptography , network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve();
    },1000)
});

promisesOne.then(()=>{
    console.log("Promises consued");
})

new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Asnc Task Two");
        resolve();
    },1000)
}).then(()=>{
    console.log("Async 2 resolved")
})

const promisesThree = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({userName : "deven" , email: "deven@0308.com"})
    },1000)
})

promisesThree.then((user)=>{
    console.log(user)
})

const promisesFour = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true
        if(!error){
            resolve({userName : "deven" , password: "12345"})
        }else{
            reject("ERROR Somthing went wrong")
        }
    },1000)
})

promisesFour
.then((user)=>{
    console.log(user);
    return user.userName
}).then((userName)=>{
    console.log(userName)
}).catch((error)=>{
    console.log(error);
}).finally(()=>console.log("The Promises is either resolved or rejected"));


const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true
        if(!error){
            resolve({userName : "javascript" , password: "12345"})
        }else{
            reject("ERROR JS went wrong")
        }
    },1000)
});


async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response)
    }
    catch(error){
        console.log(error)
    }
}
consumePromiseFive()

// async function getAllUsers(){
//     try{
//     const response = await fetch('https://api.github.com/users/dnjethwa007')
    
//     const data=await response.json()
//     console.log(data)
//     }catch(error){
//         console.log(error)
//     }
// }
// getAllUsers()

fetch('https://api.github.com/users/dnjethwa007')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
console.log(error)
})