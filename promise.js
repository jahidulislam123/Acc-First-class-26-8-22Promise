//pending
//resolved 
// rejected 
// new Promise()
// const myPromise = new Promise();  
// resolved , rejected dice ei karone promise ki resolved hoice naki reject hoice

const myPromise = new Promise((resolved,rejected)=>{

    // const user =null;
    const user ={id : 1}
    
    if(!user){
        rejected("something went wrong  ")
    }
    else{
        setTimeout(()=>{
            resolved("successfully got the data ");
        },1000);
    }


})


myPromise
.then(res=>console.log("found in then : ",res))
.catch(err=>console.log("found in catch :",err));
console.log('done');