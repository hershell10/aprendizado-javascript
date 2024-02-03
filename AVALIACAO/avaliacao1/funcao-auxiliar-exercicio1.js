const numero = [ 9 ];
let i = 0;
function gets (){
    var notas = numero[i];
    i++;
    return notas;
};

function print (texto){
    console.log(texto)
};

module.exports = {gets, print}