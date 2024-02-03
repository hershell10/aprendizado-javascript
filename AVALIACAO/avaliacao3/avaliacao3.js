const {gets, print} = require('./funcao-auxiliar-exercicio3');

const salarioBruto = gets();
const bonus = gets();
function imposto(valor, percentual){
    return valor * percentual
};

function pegarImpostoSobreSalario(salario) {
    if (salario > 0 && salario <= 1100.00){
        return 0.05
    }else if (salario > 1100.1 && salario <= 2500 ){
        return 0.1
    }else{
        return 0.15
    };
};
const impostoPorcem = pegarImpostoSobreSalario(salarioBruto);
const percentual = imposto(salarioBruto, impostoPorcem);
const meuSalario = salarioBruto - percentual + bonus;
print('meu salario sem os inpostos mais o bonus é ' + meuSalario)