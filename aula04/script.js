var matrizImagem = [];
var tamanho = 0;

function adicionaImagem() {
    matrizImagem[tamanho] = document.getElementById("linkImagem").value;
    if(matrizImagem[tamanho] == "" || matrizImagem[tamanho] < 0 || matrizImagem[tamanho] == 0 || matrizImagem[tamanho] > 0){
        alert("Link inválido, por favor insira um link válido.");
        return;
    }
    console.log(matrizImagem[tamanho]);


    for(var i = 0; i < tamanho; i++){ //Verificar se tem link repetido
        if(matrizImagem[i] == matrizImagem[tamanho]){
            alert("Essa imagem já foi colocada!");
            return;
        }
    }

    var div = document.createElement("div");
        div.id = "mostraImagem"+tamanho;
        var id = document.getElementById("filmes");
        id.appendChild(div);
    
    
    
    var img = document.createElement("img"); 
    
        img.id = "imagem"+tamanho;
        var id = document.getElementById("mostraImagem"+tamanho);
        id.appendChild(img);
    
        img.src = matrizImagem[tamanho]; 
        var src = document.getElementById("mostraImagem"+tamanho); 
        src.appendChild(img);

    var button = document.createElement("button");
        
        button.id = "botaoImagem"+tamanho;
        var id = document.getElementById("mostraImagem"+tamanho);
        id.appendChild(button);

        button.onclick = "remove()";
        var onclick = document.getElementById("mostraImagem"+tamanho);
        onclick.appendChild(button);
        
        button.innerText =  "Remover";
        var innerText = document.getElementById("mostraImagem"+tamanho)
        innerText.appendChild(button);

        //ver onclick


    alert("Imagem adicionada com sucesso!");
    tamanho++;//final
}

function remove(){
    alert("Oi");
}
  