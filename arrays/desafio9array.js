/*Crie um programa que seja capaz de percorrer
 uma lista de números e imprima cada número Par encontrado.*/

const aleatorios = [3,4,76,46,97,44,79,82];

for (let i = 0; i < aleatorios.length; i++) {
    const element = aleatorios[i];
    if (element%2 == 0){
        console.log('par ' + element);
    }else if (element%2 !== 0){
        console.log('impar ' + element);
    };
    
};