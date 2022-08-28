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
            resolved({name:"john"});
        },1000);
    }


})

const userId =[1,2,3,4,6];
let userData =[];
for (let i=0;i<userId.length;i++){ 
    const userI =userId[i]
    userData.push(myPromise)
}
Promise.all(userData).then(res=>{
    console.log(res);
})
// console.log(userData)
myPromise
.then(res=>console.log("found in then : ",res))
.catch(err=>console.log("found in catch :",err));
console.log('done')