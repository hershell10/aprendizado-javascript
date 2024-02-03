const {gets, print} = require('./funcao-auxiliar-exercicio1');

const medianotas = gets();

    if (medianotas >= 7){
        print("Aprovado!")
    }else if(medianotas > 5 && medianotas < 7){
        print("Recuperação!")
    }else if (medianotas >= 0 && medianotas < 5){
        print("Reprovado!")
    }else{
        print('numero ivalido')
    }
