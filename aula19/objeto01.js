/*let amigo = {};
console.log(typeof amigo);*/

/*let amigo = { 
    nome: 'José',
    peso: 85.4,
    engordar(p=0){
      console.log('Engordou')
      this.peso += p;
}}
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`);*/

let amigo = { 
    nome: 'José',
    peso: 85.4,
    engordar(p=0){
      //console.log('Engordou')
      this.peso += p;
}}
amigo.engordar(2);
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`);