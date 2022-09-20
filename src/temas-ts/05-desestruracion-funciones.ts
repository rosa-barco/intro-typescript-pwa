export interface Producto{
    desc:string;
    precio:number;
}
const telefono:Producto={
    desc:'nick',
    precio:2375
}
const tablet:Producto={
    desc:'Ipod Air',
    precio:25453
}
function calcularIVA(productos:Producto[]):number{
    let total=0;
    productos.forEach((producto)=>{
        total+=producto.precio;       
    })
    return total*1.16;
}
const articulos1 = [telefono,tablet];
const IVATot=calcularIVA(articulos1);
console.log(`IVA: ${IVATot}`);
export function calcularIVA2(productos:Producto[]):[number,number]{
    let total=0;
    productos.forEach(({precio})=>{
        total+=precio;
    })
    return[total, total*0.16];

}
const articulos2 = [telefono,tablet];
const[total,iva]=calcularIVA2(articulos2);
console.log(`Total: ${total}\n IVA: ${iva}`);