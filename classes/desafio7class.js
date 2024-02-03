/* Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;
*/

class Pessoa{
    nome;
    idade;
    peso;
    altura;

    constructor(nome, idade, peso, altura){
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
    }

    calculoIMC(){
        return this.peso / (this.altura * this.altura);
    };
    descreva(){
       const imc = this.calculoIMC()  
        if (imc < 18.5){
            return console.log('meu nome é ' + this.nome + ' tenho ' + this.idade + ' e estou abaixo do meu peso')
         }else if(imc > 18.5 && imc <= 25){
            return console.log('meu nome é ' + this.nome + ' tenho ' + this.idade + ' e meu peso é normal')
        }   else if(imc > 25 && imc <= 30){
            return console.log('meu nome é ' + this.nome + ' tenho ' + this.idade + ' e estou acima do peso')
        }     else if (imc > 30 && imc <= 40){
            return console.log('meu nome é ' + this.nome + ' tenho ' + this.idade + ' e sou obeso')
        }      else{
            return console.log('meu nome é ' + this.nome + ' tenho ' + this.idade + ' e tenho Obesidade extrema')
        };
    };


}
const myPerson = new Pessoa('José', 23, 70, 1.75)
myPerson.descreva()
