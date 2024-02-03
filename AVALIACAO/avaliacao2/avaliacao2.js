const {gets, print} = require('./funcao-auxiliar-exercicio2');

const numeros = gets();

let menorNumeroImpar = null;
let maiorNumeroPar = null;

for (let i = 0; i < numeros; i++) {
    const novoNumero = gets();
    if(novoNumero % 2 === 0){
        if(novoNumero === null || novoNumero > maiorNumeroPar){
            maiorNumeroPar = novoNumero;
        }
    }else{
        if(novoNumero === null || novoNumero < maiorNumeroPar){
            menorNumeroImpar = novoNumero
        }
};
};
print('maior numero par recebido ' + maiorNumeroPar);
print('menor numero impar recebido ' + menorNumeroImpar);