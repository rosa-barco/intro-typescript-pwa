interface AlumnoUTL{
    nombre:string,
    edad:number,
    direccion: direccion,
    mostrarDireccion:()=>void
}
interface direccion{
        calle:string,
        pais:string,
        estado:string,
}
    const alumnoUTL:AlumnoUTL={
        nombre:'Armando',
        edad:29,
        direccion:{
            calle:'cedro',
            pais:'Mx',
            estado:'GTO'
        },
     mostrarDireccion() {
        return `${this.nombre},${this.direccion.estado},${this.direccion.pais}`
     }
    }
console.log(alumnoUTL.mostrarDireccion());
