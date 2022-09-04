console.log(module);

function errorHandler(error){
    const {name,message,stack}=error;
    console.log(name,message)
};


module.exports =errorHandler;

function two(){
    console.log("mama khbr ki")
}


// module.exports.errorHandler=errorHandler;
// module.exports.two=two;


// onnovabeo export korte pari 
// module.exports={
//     errorHandler,
        // or errorHandler:errorHandler;
//     two,
        // or two : two ;
// }



// aro ekvabeo dekha jay
// module.exports.two=function two(){
//     console.log("mama khbr ki")
// }

//ami jokhon npm init -y dicilam okene packege.json er moddhe type module dici so tahole ekhan theke ekhon export korte hobe 
console.log(module)


export errorHandler;
export default two ;