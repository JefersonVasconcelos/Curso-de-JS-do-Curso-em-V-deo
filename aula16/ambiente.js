let num = [5, 8, 2, 9, 3];
num.push(1);
num.sort();
console.log(num);
//console.log(`Nosso vetor é o ${num}.`);
//console.log(`O vetor tem ${num.length} posições.`);
//console.log(`Valor da posição 4 = ${num[4]}.`);
//console.log(`Valor da posição 1 = ${num[1]}.`);

let pos = num.indexOf(7);
if (pos == -1) {
    console.log(`O valor não foi encontrado!.`)
} else {
    console.log(`O valor 8 está na posição ${pos}.`)
}
