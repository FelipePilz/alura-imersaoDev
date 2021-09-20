var matrizImagem = [];
var tamanho = parseInt(0);
console.log(tamanho);

function adicionaImagem() { 
    matrizImagem[tamanho] = document.getElementById("linkImagem").value;
    document.getElementById("linkImagem").value = "";
    if(matrizImagem[tamanho] == "" || matrizImagem[tamanho] < 0 || matrizImagem[tamanho] == 0 || matrizImagem[tamanho] > 0){
        alert("Link inválido, por favor insira um link válido.");
        return;
    }


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
        
        
        //ver onclicks
        button.id = tamanho;
        var id = document.getElementById("mostraImagem"+tamanho);
        id.appendChild(button);

        button.innerText =  "Remover";
        var innerText = document.getElementById("mostraImagem"+tamanho)
        innerText.appendChild(button);
        

        var remover = document.getElementById("mostraImagem"+tamanho);

        var qualRemover = tamanho;
            button.onclick = function () {   
                matrizImagem.splice(qualRemover, 1)
                remover.remove();
                alert("Imagem removida com sucesso!");         
        };
        
        var onclick = document.getElementById("mostraImagem"+tamanho);
        onclick.appendChild(button);
 

    alert("Imagem adicionada com sucesso!");
    tamanho++;//final
}