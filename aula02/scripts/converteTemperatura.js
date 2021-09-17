function ConverterParaCelcius(){
    let valorCelcius = parseFloat(document.getElementById("celcius").value);
    let valorKelvin = valorCelcius + 273;
    let valorFahrenheit = 1.8 * valorCelcius + 32;

    let elementoValorConvertido = document.getElementById("valorConvertido");
    elementoValorConvertido.innerHTML = valorCelcius.toFixed(1) + "°C em Fahrenheit é "+valorFahrenheit.toFixed(1)+"°F e em Kelvin é "+valorKelvin.toFixed(1)+"K";
}

function ConverterParaFahrenheit(){
    let valorFahrenheit = parseFloat(document.getElementById("fahrenheit").value);
    let valorKelvin =  (valorFahrenheit -32)/1.8 + 273;
    let valorCelcius =  (valorFahrenheit-32)/1.8;

    let elementoValorConvertido = document.getElementById("valorConvertido");
    elementoValorConvertido.innerHTML = valorFahrenheit.toFixed(1) + "°F em Kelvin é "+valorKelvin.toFixed(1)+"°K e em Celsius é "+valorCelcius.toFixed(1)+"°C";

}

function ConverterParaKelvin(){
    let valorKelvin = parseFloat(document.getElementById("kelvin").value);
    let valorCelcius = valorKelvin - 273;
    let valorFahrenheit = 1.8 * (valorKelvin - 273) + 32;

    let elementoValorConvertido = document.getElementById("valorConvertido");
    elementoValorConvertido.innerHTML = valorKelvin.toFixed(1) + "K em Fahrenheit é "+valorFahrenheit.toFixed(1)+"°F e em Celsius é "+valorCelcius.toFixed(1)+"°C";
}