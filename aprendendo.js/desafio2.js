/*Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
 1 - Preço do etanol;
 2 - Preço do gasolina;
 3 - O tipo de combustível que está no seu carro;
 4 - Gasto médio de combustível do carro por KM;
 5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/

var precoGasolina = 5.58
var precoEtanol = 2.18
const meuCarroUsa = precoGasolina
var consumoPorKM = 10
var distanciaKM = 740.2

if (meuCarroUsa === precoGasolina){
    var totalKM = distanciaKM / consumoPorKM;
    var gastoDaViagem = totalKM * meuCarroUsa
    console.log("meu gasto de combustivel da viagem é " + gastoDaViagem.toFixed(2))
}else if(meuCarroUsa === precoEtanol){
    var totalKM = distanciaKM / consumoPorKM;
    var gastoDaViagem = totalKM * meuCarroUsa
    console.log("meu gasto de combustivel da viagem é " + gastoDaViagem.toFixed(2))

}