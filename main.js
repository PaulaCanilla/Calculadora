//Se busca el botón en el html, cuando se hace clic se ejecuta la función de calcular.
document.getElementById("calcular").addEventListener("click", calcular);

//Función que se ejecuta una vez que el usuario pulsa el botón.
function calcular(){
    const valor1= Number(document.getElementById("valor1").value);
    const valor2 = Number(document.getElementById("valor2").value);
    const operacion = document.getElementById("operacion").value;
    const resultado = document.getElementById("resultado");

    //Se guardan las variables, como const ya que no va a cambiar el valor.
    //Con document. javascript accede al html.
    //Con getElementById() busca en el html un id con el nombre que se especifica.
    //Value devuekve lo que se ha escrito en el input.

    //Hacer un cálculo dependiendo de la operación
     let result;

    switch(operacion){
        case "suma":
            result = valor1 + valor2;
        break;

        case"resta":
            result = valor1 - valor2;
        break;

        case "multiplicacion":
            result = valor1 * valor2;
        break;

        case "divison":
            if (valor2===0){
                resultado.textContent = "No se puede dividir entre 0";
                return;
            }
            result = valor1 / valor2;
        break;

        case "modulo":
            if(valor2===0){
                resultado.textContent= "No se puede dividir entre 0.";
                return;
            }
            result = valor1 % valor2;
        break;

        case "potencia":
            if (valor2 < 0){
                resultado.textContent="La potencia no puede ser un número negativo";
                return;
            }

            if (valor2 === 0){
                result = 1;
                break;
            }

            if (valor1 ===0){
                result = 0;
                break;
            }

            result = 1;
            for(let i = 0; i<valor2; i++){
                result = result * valor1;
            }

        break;

        default:
            resultado.textContent= "No es correcto";
        return;
    }

    resultado.textContent = "El resultado es: " + result
}