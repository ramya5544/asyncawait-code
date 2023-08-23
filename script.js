// const URL="http://127.0.0.1:3000/index.html";
// async function myFunc(params=""){
//     console.log("Function called");
//     const res=await fetch(URL);
//     console.log(res);
//     const data=await res.json();
//     console.log(data);
//     return data;
// }
// const val=myFunc();
// console.log(val);
// val.then((val) =>{
//     console.log(val);
// });

const myFunc=async () =>{
    const res=await fetch("https://restcountries.com/v3.1/all");
    console.log(res);
    console.log(await res.json());//thirumba data than venun na await potu eadukanum
     //line by line code ah run aga await use pandrrom illana namanaku promise mattumae kidaikum
    console.log("code");
}
myFunc();
