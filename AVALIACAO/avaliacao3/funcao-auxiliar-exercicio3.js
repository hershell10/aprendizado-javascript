const numero = [ 2000, 250 ];
let i = 0;
function gets (){
    var valor = numero[i];
    i++;
    return valor;
};

function print (texto){
    console.log(texto)
};

module.exports = {gets, print}