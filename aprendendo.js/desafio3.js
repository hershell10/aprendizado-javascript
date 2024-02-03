/*   3) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

    Média = (nota 1 + nota 2 + nota 3) / 3;

    Classificação:
    - Média menor que 5, reprovação;
    - Média entre 5 e 7, recuperação;
    - Média acima de 7, passou de semestre;
*/ 

var nota1 = 5;
var nota2 = 7;
var nota3 = 7; 

const mediaAluno = (nota1 + nota2 + nota3) / 3;

if (mediaAluno >= 7){
    console.log("Aprovado!")
}else if(mediaAluno > 5 && mediaAluno < 7){
    console.log("Recuperação!")
}else{
    console.log("Reprovado!")
}