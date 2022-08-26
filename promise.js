//pending
//resolved 
// rejected 
// new Promise()
// const myPromise = new Promise();  
// resolved , rejected dice ei karone promise ki resolved hoice naki reject hoice

const myPromise =new Promise((resolved,rejected)=>{

    const user =null;
    
    if(!user){
        rejected("something went wrong  ")
    }
    else{
        setTimeout(()=>{
            resolved("successfully got the data ");
        },1000);
    }


})
