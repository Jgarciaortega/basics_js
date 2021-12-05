window.onload = init;

window.addEventListener('keypress', teclear);

//VARIABLE GLOBALES
let pantalla;
let signo = false;
let punto = false;


function teclear(ev){

    mostrarEnDisplay(ev.key);
}

function init() {

    let botones = document.querySelectorAll('.boton');
    pantalla = document.querySelector('input');

    botones.forEach(boton => {

        boton.addEventListener('mousedown', recogerPulsacion);
        boton.addEventListener('mouseup', quitarSombra);

    });

}

function recogerPulsacion() {

    this.classList.add('sombra');

    mostrarEnDisplay(this.innerText);

}

function quitarSombra() {

    this.classList.remove('sombra'); 

}

function mostrarEnDisplay(digito) {

    let esNumero = compruebaSiNumero(digito);

    if (pantalla.value == 0) {

        pantalla.value = "";

    }

    if (digito == '*') ditio = 'x';

    if (esNumero) {

        pantalla.value += digito;
        signo = false;

    } else {

        if (!pantalla.value == "") {

            if (!signo) {

                if (digito == '+' || digito == '-' || digito == '/' || digito == 'x') {

                    pantalla.value += digito;
                    signo = true;
                    punto = false;

                }

                if(digito == '.' && !punto){

                    pantalla.value += ',';
                    signo = true;
                    punto = true;

                } 
            }



        } else {

            pantalla.value = 0;

        }


        if (digito == "=") {

            if(!signo) calcular();
            punto = false;
            
        }

        if (digito == "C") pantalla.value = 0;


    }

}


function compruebaSiNumero(digito) {

    let numero = false;

    if (!isNaN(digito)) {

        numero = true;

    }

    return numero;
}


function calcular() {

    pantalla.value = eval(pantalla.value);
}