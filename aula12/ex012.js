var agora = new Date();
var hora = agora.getHours();
var min = agora.getMinutes();
var seg = agora.getSeconds();
console.log(`Agora são exatamente ${agora}`);
if (hora < 5) {
    console.log("Boa Madrugada!");
} else if (hora < 12) {
    console.log("Bom Dia!");
} else if (hora == 12){
    console.log("Bom Meio Dia!");
} else if (hora < 18){
    console.log("Boa Tarde!");
}else {
    console.log("Boa Noite!");
}

/*var hora = 2
console.log(`Agora são exatamente ${hora} horas`)
if (hora < 5){
console.log("boa madrugada")
}else if(hora < 12 ){
console.log("bom dia")
}else if(hora == 12){
console.log("bom meio dia")
}else if(hora < 18){
console.log("boa tarde")
}else{
    console.log("boa noite")
}*/