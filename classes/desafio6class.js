/* Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
*/


class Carros {
    marca;
    cor;
    gastoCombustivelKM;
    precoCombustivel;
    constructor(marca, cor, gastoCombustivelKM, precoCombustivel){
        this.marca = marca;
        this.cor = cor;
        this.gastoCombustivelKM = gastoCombustivelKM;
        this.precoCombustivel = precoCombustivel;
    };
    
    calculoDoGastoDeCombustivel(distanciaKM ,precoCombustivel){
        console.log('A marca do carro é ' + this.marca + ' o carro é ' + this.cor + '. Para fazer 1KM ele gasta em reais R$: ' + (this.gastoCombustivelKM * precoCombustivel).toFixed(2))
        console.log('Para ele percorrer 500KM ele gastaria em reais R$: ' + (distanciaKM * this.gastoCombustivelKM * precoCombustivel).toFixed(2))
    };
   

};
const ferrari = new Carros ('Ferrari', 'Vermelho', 1/6);
ferrari.calculoDoGastoDeCombustivel(500, 5.75);

const gastoPorKM = ferrari.gastoCombustivelKM;
const valorCombustivel = ferrari.precoCombustivel;

umKMComCarro = 1 / gastoPorKM;
meuGastoEm1KM = umKMComCarro * valorCombustivel;



/*AGORA E SO FALTA FAZER A CONTA PRA DESCOBRIR O VALOR DE 1 KM EM REAIS
SO MUTIPLICAR O VAmeuGastoEm1KM)LOR DA DIVISAO PELO VALOR DO COMBUSTIVEL.

*/

