function calcular(){

    var planeta, peso, pesoplaneta;

    peso = document.getElementById("txtpeso").value;
    planeta = document.getElementById("ddplaneta").value;

    peso = parseFloat(peso);

    if(planeta == 1){
        pesoplaneta = peso/10*0.37;
        document.getElementById("txtresultado").value = pesoplaneta;
    }
     else if(planeta == 2){
        pesoplaneta = peso/10*0.88;
        document.getElementById("txtresultado").value = pesoplaneta;
     }
        else if(planeta == 3){
            pesoplaneta = peso/10*0.38;
            document.getElementById("txtresultado").value = pesoplaneta;
        }
            else if(planeta == 4){
                pesoplaneta = peso/10*2.64;
                document.getElementById("txtresultado").value = pesoplaneta;
            }
                else if(planeta == 5){
                    pesoplaneta = peso/10*1.15;
                    document.getElementById("txtresultado").value = pesoplaneta;
                }
                    else if(planeta == 6){
                        pesoplaneta = peso/10*0.88;
                        document.getElementById("txtresultado").value = pesoplaneta;
                    }
}

