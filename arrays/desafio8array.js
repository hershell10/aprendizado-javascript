/*Crie um programa que dado um número imprima a sua tabuada.*/

class Tabuada{
    numero;
    constructor (numero){
        this.numero = numero;
    };
    numerotabuada(){
        var nub = this.numero;
        
        for (let i = 1; i <= 10; i++){
            var contador = i
            console.log(nub * contador)


        }
    }


}

const mynumero = new Tabuada(2);
mynumero.numerotabuada();