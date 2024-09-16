var numCorrecto = 1; 
var bandera = true;
var numUsuario; 
var resultado;

function leerNumero(){
    let num;
    num = parseInt(prompt("Ingrese un numero comprendido entre 1 y 100: "));
    while(num > 100 || num <= 0 || isNaN(num)){
        num = parseInt(prompt("Ingrese un numero comprendido entre 1 y 100: "));
    }

    return num; 
}

function comprobarValor(numUsuario, numCorrecto){
    if (numUsuario == numCorrecto){
        return 0
    } else if(numUsuario > numCorrecto){
        return 1
    } else{
        return -1
    }
}

while(bandera){
    numUsuario = leerNumero();
    resultado = comprobarValor(numUsuario, numCorrecto)
  
    if(resultado === 0){
        alert("Felicidades, haz acertado el numero"); 
        bandera = false; 
    } else if(resultado === 1){
        alert("El número que ingresaste es mayor que el número correcto. Intenta de nuevo");
    } else{
        alert("El número que ingresaste es menor que el número correcto. Intenta de nuevo");
    }
}
