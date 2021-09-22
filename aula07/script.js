var carta1 = {
    nome: "Rubick",
    atributos: {
        forca:  21,
        agilidade:  23,
        inteligencia: 25
    }
};

var carta2 = {
    nome: "Luna",
    atributos: {
        forca:  21,
        agilidade:  24,
        inteligencia: 23
    }
};

var carta3 = {
    nome: "Axe",
    atributos: {
        forca:  25,
        agilidade:  20,
        inteligencia: 18
    }
};

var carta4 = {
    nome: "Faceless Void",
    atributos: {
        forca:  20,
        agilidade:  19,
        inteligencia: 15
    }
};

var carta5 = {
    nome: "Invoker",
    atributos: {
        forca:  18,
        agilidade:  14,
        inteligencia: 15
    }
};

var carta6 = {
    nome: "Mars",
    atributos: {
        forca:  23,
        agilidade:  20,
        inteligencia: 21
    }
};

var cartas = [carta1, carta2, carta3, carta4, carta5, carta6];
var cartaMaquina;
var cartaJogador;

function sortearCarta(){
    cartaMaquina = cartas[sortearNumero()];
    do{   
        cartaJogador = cartas[sortearNumero()];
    }while(cartaMaquina == cartaJogador);

    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;

    exibirOpcoes();
}

function sortearNumero(){
    var numeroSorteado = parseInt(Math.random() * cartas.length);
    return numeroSorteado;
}

function exibirOpcoes(){
    var opcoes = document.getElementById("opcoes");
    var opcoesTexto = "";
    for(var atributo in cartaJogador.atributos){
        opcoesTexto += "<input type='radio' name='atributo' value='"+atributo+"'>" + atributo;
    }
    opcoes.innerHTML = opcoesTexto;
}

function jogar(){
    var atributoSelecionado = obtemAtributoSelecionado();
    while(atributoSelecionado == undefined){
        alert("Selecione um atributo!");
        atributoSelecionado = obtemAtributoSelecionado();
        return;
    }

    var elementoResultado = document.getElementById("resultado");
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

    if(valorCartaJogador > valorCartaMaquina){
        elementoResultado.innerHTML = "Você venceu! <br> <span>"+cartaJogador.nome+" VS "+cartaMaquina.nome+"</span>";
    }else if(valorCartaJogador < valorCartaMaquina){
        elementoResultado.innerHTML = "Você perdeu, a carta da máquina é maior! <br> <span>"+cartaJogador.nome+" VS "+cartaMaquina.nome+"</span>"
    }else{
        elementoResultado.innerHTML = "Empatou! <br>  <span>"+cartaJogador.nome+" VS "+cartaMaquina.nome+"</span>"
    }

    document.getElementById("btnSortear").disabled = false;
    document.getElementById("btnSortear").innerHTML = "Sortear outra vez!";
    document.getElementById("btnJogar").disabled = true;
}

function obtemAtributoSelecionado(){
    var radioAtributos = document.getElementsByName("atributo");
    for(var i = 0; i < radioAtributos.length; i++){
        if(radioAtributos[i].checked == true){
            return radioAtributos[i].value;
        }
    }
}