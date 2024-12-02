// console.log("hola")

let nome="lu"; 
let xp=10002;
let nivel="";

if(xp<1000){
    nivel="Ferro";
}else if(xp>=1001&&xp<=2000){
    nivel="Bronze";
}

else if(xp>=10001){
    nivel="Radiante";
}
   

console.log(`O Herói de nome **${nome}** está no nível de **${nivel}**`)