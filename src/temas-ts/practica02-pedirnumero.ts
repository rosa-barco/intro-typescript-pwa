export class suma{
    private numero1: number;
    private numero2: number;

setnumeros(numero1:number, numero2:number){
    this.numero1=numero1;
    this.numero2=numero2;
}

private sumar():number{
    let total = 0
    for(let i=1; i<= this.numero2; i++){
        total+=this.numero1;
    }
    return total
}
getValor():void {
    console.log(this.sumar());
}
}