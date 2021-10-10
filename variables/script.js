
// if(true){
//     console.log("Start - "+asm) //undefined
//     var asm = "I am a var"; //initialized
//     console.log(asm);
// }
// console.log("outside - "+asm)


let asmL = "old val";
console.log(asmL);
//Temporal Dead Zone
if(true){
//console.log("Start - "+asmL) //Reference Error 
 asmL = "I am a Let"; //initialized
console.log(asmL);
asmL = "changed Val"
}

console.log("outside - "+asmL);



//Temporal Dead Zone
//console.log("Start - "+asmC) //Reference Error 
if(true){
    const asmC = "I am a Const"; //initialized
    //asmC = "something else"
    console.log(asmC);
}

