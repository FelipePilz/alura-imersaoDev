var informacoesJogadores= [{
    nome: "Rafael",
    vitorias: 2,
    empates: 1,
    derrotas: 1,
    pontos: 0
},{
    nome: 'Carlos',
    vitorias: 1,
    empates: 1,
    derrotas: 2,
    pontos: 0
}];

function exibeJogadorTela(informacoesJogadores){   
    var elemento = "";
    for(var i = 0; i <  informacoesJogadores.length; i++){
        elemento += "<tr>";
        elemento += "<td>"+informacoesJogadores[i].nome+"</td>";
        elemento += "<td>"+informacoesJogadores[i].vitorias+"</td>";
        elemento += "<td>"+informacoesJogadores[i].empates+"</td>";
        elemento += "<td>"+informacoesJogadores[i].derrotas+"</td>";
        elemento += "<td>"+calculaPontos(informacoesJogadores[i])+"</td>";
        elemento += "<td><button onClick='adicionarVitoria("+i+")'>Vitória</button></td>";
        elemento += "<td><button onClick='adicionarEmpate("+i+")'>Empate</button></td>";
        elemento += "<td><button onClick='adicionarDerrota("+i+")'>Derrota</button></td>";
        elemento += "</tr>";
    }
    elemento += "<tr><td colspan=8><button onClick='adicionarJogador()'>Adicionar jogador</button></td></tr>"  
    var elementoTabela = document.getElementById("tabelaJogadores");
    elementoTabela.innerHTML = elemento;

}

function calculaPontos(jogador){
    var pontos = parseInt((jogador.vitorias * 3) + jogador.empates);
    return pontos;
}

function adicionarJogador(){
    if(confirm("Você quer adicionar um jogador?") == true){
        informacoesJogadores.push({
            nome: prompt("Informe o nome do jogador:"),
            vitorias: parseInt(prompt("Quantas vitorias ele teve?")),
            empates: parseInt(prompt("Quantos empates ele teve?")),
            derrotas: parseInt(prompt("Quantas derrotas ele teve?")),
            pontos: 0
        })
        exibeJogadorTela(informacoesJogadores)
    }else{
        return;
    }
}

function adicionarVitoria(index){
    informacoesJogadores[index].vitorias += 1;
    console.log(informacoesJogadores[index].vitorias, informacoesJogadores[index].nome)
    exibeJogadorTela(informacoesJogadores);
}

function adicionarEmpate(index){
    informacoesJogadores[index].empates += 1;
    console.log(informacoesJogadores[index].empates, informacoesJogadores[index].nome)
    exibeJogadorTela(informacoesJogadores);
}

function adicionarDerrota(index){
    informacoesJogadores[index].derrotas += 1;
    console.log(informacoesJogadores[index].derrotas, informacoesJogadores[index].nome)
    exibeJogadorTela(informacoesJogadores);
}