import two from './errorHandler'
// const errorHandler =require("./errorHandler.js")
const {errorHandler,two} =require("./errorHandler.js")
two();
async function getData(){
    try{
        undefined.find();
        const emailError =new Error("Email already exits")
        throw emailError;
    }catch(error){
        errorHandler(error);
        // console.log(error)
    }
}

getData();


function errorHandler(error){
    // console.log(error)
    const {name,message,stack}=error;
    // console.log(name)
    // console.log(message)
    // console.log(stack)

    logger.error({
        name,
        message,
        stack,
        
    });
    console.log("internel server error!")
}


console.log("done");