var carta1 = {
    nome: "Rubick",
    imagem: "http://cdn.dota2.com/apps/dota2/images/heroes/rubick_vert.jpg?v=5027641",
    atributos: {
        forca:  21,
        agilidade:  23,
        inteligencia: 25
    }
};

var carta2 = {
    nome: "Luna",
    imagem: "https://pt.dotabuff.com/assets/heroes/luna-vert-a6243d7eaced1adbb61dd85322e5490c4f9d57da0278913f288f050412e868a2.jpg",
    atributos: {
        forca:  21,
        agilidade:  24,
        inteligencia: 23
    }
};

var carta3 = {
    nome: "Centaur Warrunner",
    imagem: "https://orcz.com/images/thumb/8/81/Dota2centaurwarrunner.jpg/400px-Dota2centaurwarrunner.jpg",
    atributos: {
        forca:  27,
        agilidade:  15,
        inteligencia: 15
    }
};

var carta4 = {
    nome: "Faceless Void",
    imagem: "https://deluxegamer.com/wp-content/uploads/2021/03/AE7555F5-85F7-402F-9EA1-FE9AEFCC8B9E.jpeg",
    atributos: {
        forca:  20,
        agilidade:  19,
        inteligencia: 15
    }
};

var carta5 = {
    nome: "Invoker",
    imagem: "https://i.pinimg.com/236x/a1/6c/9a/a16c9a9a79dd3854b097115cb17b3be4.jpg",
    atributos: {
        forca:  18,
        agilidade:  14,
        inteligencia: 15
    }
};

var carta6 = {
    nome: "Mars",
    imagem: "http://cdn.dota2.com/apps/dota2/images/heroes/mars_vert.jpg?v=5027641",
    atributos: {
        forca:  23,
        agilidade:  20,
        inteligencia: 21
    }
};

var carta7 = {
    nome: "Nucleo dos Temidos",
    imagem: "https://lh5.googleusercontent.com/UIXA9dFv8sxAOTKoKBUNLP2e6y0rALwLyLmzfzCTxReNjP4QWR1W29vnIUdVYnOTloAJ9bXDsfobTnyE1k5LHspMf0Q0J5xIRiodBlGEBRVTk8vHVBn5VLX5c4vQadnaMU0Iqy3r",
    atributos: {
        forca:  100,
        agilidade:  100,
        inteligencia: 100
    }
};

var carta8 = {
    nome: "Nucleo dos Iluminados",
    imagem: "https://external-preview.redd.it/3ai71IcbokpvLacAf_Bnkvd88hlfRAynKClnDXiLn20.jpg?width=640&crop=smart&auto=webp&s=90fd5d6e2f140084fb82ff54ff91c62d19fb63ef",
    atributos: {
        forca:  100,
        agilidade:  100,
        inteligencia: 100
    }
};



var cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8];
var cartaMaquina;
var cartaJogador;

function sortearCarta(){
    cartaMaquina = cartas[sortearNumero()];
    do{   
        cartaJogador = cartas[sortearNumero()];
    }while(cartaMaquina == cartaJogador);

    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
    document.getElementById("resultado").innerHTML = "";
    
    var divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = "";
    exibirCartaJogador();

    
}

function sortearNumero(){
    var numeroSorteado = parseInt(Math.random() * cartas.length);
    return numeroSorteado;
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
        elementoResultado.innerHTML = "VITÓRIA!<br>";
    }else if(valorCartaJogador < valorCartaMaquina){
        elementoResultado.innerHTML = "DERROTA!<br>"
    }else{
        elementoResultado.innerHTML = "EMPATE!<br>"
    }

    document.getElementById("btnSortear").disabled = false;
    document.getElementById("btnSortear").innerHTML = "Sortear outra vez!";
    document.getElementById("btnJogar").disabled = true;
    exibirCartaMaquina();
}

function obtemAtributoSelecionado(){
    var radioAtributos = document.getElementsByName("atributo");
    for(var i = 0; i < radioAtributos.length; i++){
        if(radioAtributos[i].checked == true){
            return radioAtributos[i].value;
        }
    }
}

function exibirCartaJogador(){
    var divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem}`;
    var moldura = "<img src='https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png' style='width: inherit; height: inherit; position: absolute;'>";
    var tagHTML = "<div id= 'opcoes' class='carta-status'>";

    var opcoesTexto = "";
    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + (atributo.charAt(0).toUpperCase() + atributo.slice(1)) + ": " + cartaJogador.atributos[atributo] + "<br>";
        
    }
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto +  "</div>";
}

function exibirCartaMaquina(){
    var divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem}`;
    var moldura = "<img src='https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png' style='width: inherit; height: inherit; position: absolute;'>";
    var tagHTML = "<div id= 'opcoes' class='carta-status'>";

    var opcoesTexto = "";
    for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<input type='radio' disabled name='atributo' value='" + atributo + "'>" + (atributo.charAt(0).toUpperCase() + atributo.slice(1)) + ": " + cartaMaquina.atributos[atributo] + "<br>";
        
    }
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto +  "</div>";
}