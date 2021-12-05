/*
document.addEventListener("click", function () {
    document.getElementById("caja").addEventListener("mousedown", prueba);
    alert("hola");

})*/

var botones;
var pantalla;
var punto = true;


window.onload = function () {

    pantalla = document.getElementById("pantalla");
    pantalla.value = "0";
    
}

window.addEventListener("keydown", function (event) {
    
   recogerPulsacion(event.key);
    
}, false);

document.addEventListener("DOMContentLoaded",

    function () {

        botones = document.getElementsByClassName("boton");

        for (let index = 0; index < botones.length; index++) {

            botones[index].addEventListener("mousedown", pulsarTecla);
            botones[index].addEventListener("mouseup", soltarTecla)

        }

    })


function recogerPulsacion(pulsacion){

    if ((pulsacion == "Backspace") || (pulsacion == "Enter") || (!isNaN(pulsacion)) || (pulsacion == "+") || (pulsacion == "-") || (pulsacion == "*") ||
    pulsacion == "/" || pulsacion == "."){

        actualizarDisplay(pulsacion);

    }
}

function pulsarTecla() {

    this.classList.add("sombreado");

    if (this.id == "borrar") {

        actualizarDisplay(this.id);

    } else {

        actualizarDisplay(this.innerText);

    }

}

function soltarTecla() {

    this.classList.remove("sombreado");

}

function actualizarDisplay(digito) {

    var totalDigitos = pantalla.value.length;


    if (pantalla.value == 0) pantalla.value = "";

    if (digito == "C") {

        pantalla.value = 0;


    } else if ((digito == "=") || (digito == "Enter")) {

        calcular(pantalla.value);

    } else if ((digito == "borrar") || (digito == "Backspace")){

        if (pantalla.value.length > 1) {

            if(pantalla.value.charAt(totalDigitos - 1) == ")") {

                pantalla.value = pantalla.value.substring(1, totalDigitos - 1);


            }else{

                pantalla.value = pantalla.value.substring(0, totalDigitos - 1);
            }
            

        } else {

            pantalla.value = 0;
        }

    } else if (digito == "()") {

        ponerParentesis(pantalla.value);

    } else if (digito == ".") {

        if (punto){

            pantalla.value += digito;
        }

    } else {

        /* Si recibe una opcion no numerica */
        if (isNaN(digito)) {
            /* Concatenamos siempre que el valor previo no sea un operador */

            if (totalDigitos >= 1 && pantalla.value != 0) {

                if (!isNaN(pantalla.value.charAt(totalDigitos - 1))) {

                    pantalla.value += digito;

                }
            } else {

                pantalla.value = 0;
            }

            /* Si recibe un numero concatenamos */
        } else {
            
            pantalla.value += digito;
            

        }

    }
}

function calcular(operacion) {

    operacion = operacion.replace("x", "*");
    let cadena = new Array();

    if (operacion.indexOf("%") != -1) {

        cadena = operacion.split("%");
        pantalla.value = (cadena[0] * cadena[1]) / 100;

    } else {

        try {

            pantalla.value = eval(operacion);

        } catch (error) {

            pantalla.value = "ERROR";
        }

    }
}

function ponerParentesis(operacion) {

    operacion = "(" + operacion + ")";

    pantalla.value = operacion;
}







