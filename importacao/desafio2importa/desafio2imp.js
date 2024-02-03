const {gets, print} = require('./funcoes2')

/*
2) Faça um programa que receba a quantidade de números e seus respectivos valores. 
Imprima o maior e o menor número deste conjunto.

Exemplo:
    Entrada:
        4
        100
        150
        90
        200

    Saída:
        Maior número: 200
        Menor número: 90
*/
const numeros = gets();
let maiorRecebido = 0;
let menorRecebido = 0;
for (let i = 0; i < numeros; i++) {
    const numero = gets();
    if (numero > maiorRecebido){
        maiorRecebido = numero;

    }else{
        if (numero < maiorRecebido){
            menorRecebido = numero

        }
    }

}
print(maiorRecebido)
print(menorRecebido)