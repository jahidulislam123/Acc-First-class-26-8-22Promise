const promise =new Promise((resolve,reject)=>{

setTimeout(()=>{
    resolve("success")
},1000)
});

// await sobsomoy asyncronous function er vitore use korte hoy 
//kono function er age async ketword use korle seta async function hoye jay ki moja tai na oha 
async function getData(){
    // const res =[];
     // await promise
    const res =await promise;
    console.log(res)
   
}

getData()


fetch("").then(res=>res.json())
.then(data =>console.log(data))
.catch(err=>console.log(err))
async function getUser(){
    const res =await fetch("");
    const user =await res.json();

   const res2 = fetch(`https://www.exaple.com/${user.id}`);
    const products =res2.json();
    console.log(products);
}