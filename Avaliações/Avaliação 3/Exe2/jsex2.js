function calcular(){
    var n1, n2, percent,validan1, validan2 ;
    n1 = document.getElementById("txtsalario").value;
    n2 = document.getElementById("txtprestacao").value;
    validan1 = isNaN(n1);
    validan2 = isNaN(n2);
    
    if(validan1==false && validan2==false && n1!="" && n2!="") {
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);
    percent = (n1 * 0.3);
      
      if(percent > n2){
        document.getElementById("txtresultado").value = "Aprovado."; 
      } 
      else
      document.getElementById("txtresultado").value = "Negado."; 

    
    
    }
    else alert("Informe apenas valores númericos")
  }

