var tentativas = 1;
var numeroSecreto = parseInt(Math.floor(Math.random() * 11));
var repetir = 0;

function chutar() {
     if(repetir == 1){
          alert("Você já descobriu o número aleatório!");
          return;
     }
     let numeroChutado = parseInt(document.getElementById("valor").value);

     while(numeroChutado < 0 || numeroChutado > 10 || isNaN(numeroChutado)){
          alert("Insira um valor valido!");
          return;
     }
     
     let elementoResultado = document.getElementById("resultado");


     while(numeroChutado != numeroSecreto){
          tentativas ++;
          if(numeroChutado < numeroSecreto){
               elementoResultado.innerHTML = "Tente um número maior!";
               return;
          }else{
               elementoResultado.innerHTML = "Tente um número menor!";
               return;
          }
          
     }
     repetir = 1;
     elementoResultado.innerHTML = "Você descobriu o número em "+tentativas+" tentativas!";
}
