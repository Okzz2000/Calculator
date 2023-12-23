function findH(){
    var sideA = document.getElementById("a").value;
    var sideB = document.getElementById("b").value;
   
  
    if(sideA<1 || sideB<1){
       alert("Täida kõik väljad!");
       }else{
        
    document.getElementById("aSqu").innerHTML = sideA * sideA;
    document.getElementById("bSqu").innerHTML = sideB * sideB;
    document.getElementById("aAndB").innerHTML = (sideA * sideA) + (sideB * sideB);
    document.getElementById("sqrtC").innerHTML = Math.round((Math.sqrt((sideA * sideA) + (sideB * sideB)) * 100)) / 100;
   }
  }