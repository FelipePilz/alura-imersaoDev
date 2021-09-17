function ConverterParaAnosLuz(){
    let valorEmKm = parseFloat(document.getElementById("valor").value);
    var valorEmAnosLuz = parseFloat(valorEmKm * 0.00000000000010570);
    let elementoValorConvertido = document.getElementById("valorConvertido");
    elementoValorConvertido.innerHTML = valorEmKm + " KM em anos luz é: " + valorEmAnosLuz;
}