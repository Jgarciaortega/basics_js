window.onload = init;



function init() {

    let cuadrados = document.querySelectorAll('.cuadrado');

    cuadrados.forEach(cuadrado => {
        
        cuadrado.addEventListener('mouseover', cambiarACirculo);
        cuadrado.addEventListener('mouseout', quitarCirculo);
        cuadrado.addEventListener('mousedown', quitarSombra);
        cuadrado.addEventListener('mouseup', anyadirSombra);
        cuadrado.addEventListener('dblclick', sombraInterior);


    });

    document.querySelectorAll('button').forEach (boton => {

        boton.addEventListener('mousedown', eliminar);

    })

}

function eliminar(){

    let nodoPadre = this.parentNode;
    let nodoPadre2 = nodoPadre.parentNode;

    nodoPadre2.removeChild(nodoPadre);
    
}


function cambiarACirculo() {

    this.classList.add('circulo');
   
   
}

function quitarCirculo() {

    this.classList.remove('circulo');
   
}


function quitarSombra() {

    this.classList.add('sinSombra');
    
}

function anyadirSombra(){

    this.classList.remove('sinSombra');
}

function sombraInterior(){

    this.removeEventListener('mouseout',quitarCirculo);
    this.classList.add('sinSombra');
    this.classList.add('conSombraInterior');
    
}