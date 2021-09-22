var informacoesJogadores= [{
    nome: 'Lelis',
    avatar: 'https://piratebay-coaching.com/wp-content/uploads/2019/08/lelis-perfil-Rodrigo-Santos.png',
    vitorias: 0,
    derrotas: 0,
    pontos: 0
},{
    nome: 'Ceb',
    avatar: 'https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2019/08/02/acbbbab4-afce-4b7a-aed1-d5d0e1e36381/sebastien-ceb-debs-og-dota',
    vitorias: 0,
    derrotas: 0,
    pontos: 0
}];

function exibeJogadorTela(informacoesJogadores){   
    var elemento = "";
    for(var i = 0; i <  informacoesJogadores.length; i++){
        elemento += "<tr>";
        elemento += "<td>"+informacoesJogadores[i].nome+"<br><img class='fotoPerfil' src='"+informacoesJogadores[i].avatar+"'></td>";
        elemento += "<td>"+informacoesJogadores[i].vitorias+"</td>";
        elemento += "<td>"+informacoesJogadores[i].derrotas+"</td>";
        elemento += "<td>"+calculaPontos(informacoesJogadores[i])+"</td>";
        elemento += "<td><button onClick='adicionarVitoria("+i+")'>Vitória</button></td>";
        elemento += "<td><button onClick='adicionarDerrota("+i+")'>Derrota</button></td>";
        elemento += "</tr>";
    }
    elemento += "<tr><td colspan=8><button onClick='adicionarJogador()'>Adicionar jogador</button></td></tr>"  
    var elementoTabela = document.getElementById("tabelaJogadores");
    elementoTabela.innerHTML = elemento;

}

function calculaPontos(jogador){
    var pontos = parseInt((jogador.vitorias * 3) - jogador.derrotas);
    return pontos;
}

function adicionarJogador(){
    if(confirm("Você quer adicionar um Jogador?") == true){
        informacoesJogadores.push({
            nome: prompt("Informe o nome do Jogador:"),
            avatar: prompt("Insira o link da imagem dele:"),
            vitorias: validaVitorias(prompt("Quantas vitorias ele teve?"), 1),
            derrotas: validaDerrotas(prompt("Quantas derrotas ele teve?"), 1),
            pontos: 0
        })
        exibeJogadorTela(informacoesJogadores)
    }else{
        return;
    }
}

function adicionarVitoria(index){
    informacoesJogadores[index].vitorias += 1;
    validaVitorias(index, 0);
    exibeJogadorTela(informacoesJogadores);
    
}

function adicionarDerrota(index){
    informacoesJogadores[index].derrotas += 1;
    validaDerrotas(index, 0);
    exibeJogadorTela(informacoesJogadores);
}


function validaVitorias(index, validaFuncao){ 
    var vitoriasFaltantes = 1;
    if(validaFuncao == 1){
        vitoriasFaltantes = parseInt(index);
    }
    while(vitoriasFaltantes !=0 ){
        for(var i = 0; i < informacoesJogadores.length; i++){
            if(vitoriasFaltantes == 0){
                i == informacoesJogadores.length;
            }else{
                if(index != i && confirm("Ele ganhou contra "+informacoesJogadores[i].nome+"?") == true){
                    informacoesJogadores[i].derrotas ++;
                    console.log(informacoesJogadores[i].derrotas)
                    vitoriasFaltantes -= 1;
                }
            }        
        }
    }
    if(validaFuncao == 1) return parseInt(index);
}


function validaDerrotas(index, validaFuncao){
    var derrotasFaltantes = 1;
    if(validaFuncao == 1){
        derrotasFaltantes = parseInt(index);
    }
    while(derrotasFaltantes !=0 ){
        for(var i = 0; i < informacoesJogadores.length; i++){
            if(derrotasFaltantes == 0){
                i == informacoesJogadores.length;
            }else{
                if(index != i && confirm("Ele perdeu contra "+informacoesJogadores[i].nome+"?") == true){
                    informacoesJogadores[i].vitorias ++;
                    derrotasFaltantes -= 1;
                }
            }        
        }
    }
    if(validaFuncao == 1) return parseInt(index);    
}

function reset(){
    for(var i = 0; i <  informacoesJogadores.length; i++){
        informacoesJogadores[i].vitorias = 0;
        informacoesJogadores[i].derrotas = 0;
        exibeJogadorTela(informacoesJogadores);
    }   
}