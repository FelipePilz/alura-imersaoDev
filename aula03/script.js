
//elementoResultado.innerHTML

  function Chutar() {
     let numeroSecreto = Math.floor(Math.random() * 11);
     let numeroChutado = parseInt(document.getElementById("valor").value);

     while(numeroChutado < 0 || numeroChutado > 10 || isNaN(numeroChutado)){
          alert("Insira um valor valido!");
          return;
     }
     
  
     }

