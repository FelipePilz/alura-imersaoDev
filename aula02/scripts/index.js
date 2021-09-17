function ConverterParaDolar() {

    var valorEmDolar = parseFloat(document.getElementById("valor").value) * 0.19;
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em dolar é $" + valorEmDolar.toFixed(2) + "<br>Em Bitcoin é " + (valorEmDolar * 0.0000041).toFixed(7)+ " BTC";
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  
  function ConverterParaEuro() {
    var valorEmEuro = parseFloat(document.getElementById("valor").value) * 0.16;
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em dolar é €" + valorEmEuro.toFixed(2) + "<br>Em Bitcoin é " + (valorEmEuro * 0.0000041).toFixed(7) + " BTC";
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  