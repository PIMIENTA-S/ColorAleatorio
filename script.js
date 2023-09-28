const boton = document.getElementById('btn-color');
const color = document.getElementById('color');

// Se crea una funcion que retorne un color Hexadecimal
const miFuncion = () => {
    // Lo colores hexadecimales se crean a partir de estas combinaciones letras y numeros
    let posibilidades= '0123456789ABCDEF';
    // siempre inician con el #
    let colorFinal= '#'

    for (let i = 0; i < 6; i ++){
        // se obtiene un numero aleatorio que sera nuestro indice
        let indiceNumero = Math.floor(Math.random() * 16);
        // con este indice accedemos a un caracter en la variable posibilidades
        colorFinal += posibilidades[indiceNumero]
        // añadimos este caracter resultante para crear el color
    }
    // lo retornamos
    return colorFinal
}

boton.addEventListener('click', function() {
    let colorResultado = miFuncion();

    // accedemos al texto del h2 y lo cambiamos por el color resultante
    color.innerText = colorResultado;
    // cambiamos el color del body de forma dinamica accediendo con document
    document.body.style.backgroundColor = colorResultado;


})
