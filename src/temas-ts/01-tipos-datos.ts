console.log("Hola mundo"); //imprimir

var t1:number|string=1; //no suele usarse pues es una variable global
let t2:number|string=2; //se puede reasignar un valor y solo se usa donde se declara
let activo:boolean=false;

const t3=3; //es un valor constante que solo se reasigna si es objeto

t1 = "a";
t2 = "b";
activo = true;

console.log(t1);
console.log(t2);