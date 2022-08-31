async function getData(){
    try{
        undefined.find();
     

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