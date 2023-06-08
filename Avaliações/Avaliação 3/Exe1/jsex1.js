function calcular(){

    var km, consumo, div, valor, valorgasto;

    km = document.getElementById("txtkm").value;
    consumo = document.getElementById("txtkmcarro").value;
    valor = document.getElementById("txtvalorcombustivel").value;

    km = parseFloat(km);
    consumo = parseFloat(consumo);
    valor = parseFloat(valor);
    
    div = km/consumo;
    document.getElementById("txtkmgastos").value = div;

    valorgasto = valor * div;
    document.getElementById("txtdinheirogasto").value = valorgasto;



}