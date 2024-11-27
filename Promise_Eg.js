// making my own promise 






let PENDING = 0;
let FULFILLED = 1;
let REJECTED = 2;

function customPromise(executor) {

    let state = PENDING;
    let value = null;
    let handlers = [];
    let catchers = [];


    function resolve(result)  {

        
        if(state !== PENDING) return;
        
        state = FULFILLED;
        value = result;

        handlers.forEach((h)=> h(value))
        
    }

    function reject(err) {
        if(state !== PENDING) return;

        state = PENDING;
        value = err;

        catchers.forEach((c)=> c(value))
    }



    this.then = function(successCallback) {
        if(state === FULFILLED) {
            successCallback(value)
        } 
        else{
            handlers.push(successCallback);
        }
    }

    this.catch = function(failureCallback){

        if(state === REJECTED) {
            failureCallback(value)
        }
        else{
            catchers.push(failureCallback);
        }

    }

    executor(resolve,reject);

}


// This is our executor function 
const doWork = (res,rej)=>{
    if(2==2)
    {
        setTimeout(()=>{
    res("Resolved Your Promise")
        },1000)
    }
    else{
        setTimeout(()=>{rej("Promise rejected")},1000)
    }
}


let greetMsg = new customPromise(doWork);

greetMsg.then((val)=>{
    console.log("then log",val);
})

greetMsg.catch((val)=>{
    console.log("catchlog",val);
})