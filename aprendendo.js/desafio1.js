/*Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
 1 - Preço do combustível;
 2 - Gasto médio de combustível do carro por KM;
 3 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/

var precoCombustivel = 6.10;
var gastoCombustivelPorKM = 10;
var distancia = 509.43

var litrosConsumidos = distancia / gastoCombustivelPorKM;
var gasto = litrosConsumidos * precoCombustivel;
console.log(gasto)