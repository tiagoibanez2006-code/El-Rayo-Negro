// El Rayo Negro - Script principal

console.log("El Rayo Negro cargado correctamente");


// Animación al aparecer elementos al hacer scroll

const elementos = document.querySelectorAll(".card, .proyecto, .nosotros-texto");

const mostrarElemento = () => {

    elementos.forEach(elemento => {

        const posicion = elemento.getBoundingClientRect().top;
        const alturaPantalla = window.innerHeight;

        if (posicion < alturaPantalla - 100) {
            elemento.classList.add("mostrar");
        }

    });

};


window.addEventListener("scroll", mostrarElemento);

mostrarElemento();
