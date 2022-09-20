import { calcularIVA2, Producto } from "./05-dessestruracion-funciones";


// import { calcularIVA2, Producto } from "./temas-ts/05-dessestruracion-funciones";
const tiendaProductos:Producto[]=[
    {
    desc:'Telefono1', 
    precio:1234
    },
    {
        desc:'Tablet', 
        precio:2345
    },
    {
        desc:'Telefono2', 
        precio:2222
    },

];
const[total1,iva1]=calcularIVA2(tiendaProductos);
console.log(`Total: ${total1} \n IVA ${iva1}`);