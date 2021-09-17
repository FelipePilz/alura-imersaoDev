function calcularMedia(){
    let elementoRespostaMedia = document.getElementById("respostaMedia");
    let soma = 0;
    let qtdProvas = parseInt(prompt("Quantas provas você fez no semestre?"));
    for(let cont = 0; cont < qtdProvas; cont++){
        soma = soma + parseFloat(prompt("Qual foi a nota da sua "+(cont+1)+"º prova?"));
    }
    soma = soma / qtdProvas
    if(soma >= 7){
        elementoRespostaMedia.innerHTML = "Parabéns, você foi aprovado com a média: "+soma.toFixed(2);
    }else{
        elementoRespostaMedia.innerHTML = "Infelizmente você foi reprovado com a média: "+soma.toFixed(2);
    }
    
}


function calcularTemperatura(){
    let elementoTemperatura = document.getElementById("respostaTemperatura");
    let temperaturaCelcius = parseInt(prompt("Informe a temperatura em Celcius"));
    let temperaturaFahrenheit = temperaturaCelcius * 1.8 + 32;
    elementoTemperatura.innerHTML = temperaturaCelcius + "º C em Fahrenheit é igual a " + temperaturaFahrenheit.toFixed(1) + "F";
}