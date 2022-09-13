let nombres:string[]=["Mario", "Dario", "Juan"];

console.log(nombres);

let datos:(string|boolean|number)[]=["María",24,true,"Dorigan"];

console.log(datos);

datos.push("Mario");
datos.push(30);
datos.push(false);
datos.push("Lopez");

console.log(datos);

//-------------------------------------------------------------------
//Otra forma de definir arreglos

let arreglo: Array<number>=[1,2,3,4];

const num:number=18202;

//Interface: Define un patrón (molde) que a partir de ella surge un objeto
//Creación de interface, una base para el objeto
interface Alumno{
    matricula:string,
    nombre:string,
    apellido:string,
    edad:number,
    email:string
    materias?:string[]
    //<nombre>? <---- esto lo hace opcional
}

//Creación de objeto basado en la interface
const alumno:Alumno={
    matricula:"18000634",
    nombre:"Rosa",
    apellido:"Barco",
    edad:23,
    email:"neko9816@gmail.com",
    materias:["PWA","GP II","Integradora", "Inglés"]
}

alumno.edad=24;

console.log(alumno);