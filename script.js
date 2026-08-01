const secciones = document.querySelectorAll(
    ".servicios, .trabajos, .nosotros, .contacto"
);


function mostrarSecciones(){

    const alturaPantalla = window.innerHeight;


    secciones.forEach(seccion => {

        const posicion = seccion.getBoundingClientRect().top;


        if(posicion < alturaPantalla - 100){

            seccion.classList.add("visible");

        }

    });

}


window.addEventListener("scroll", mostrarSecciones);

mostrarSecciones();
