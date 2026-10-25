const boton = document.getElementById("boton");
const body = document.getElementById("body");

let oscuro = false;

function cambiarTema() {
    if (oscuro) {
        body.style.color = "black";
        body.style.backgroundColor = "white";
    } else {
        body.style.color = "white";
        body.style.backgroundColor = "black";
    }

    oscuro = !oscuro;
}

boton.addEventListener("click", cambiarTema);

const selectorIdioma = document.getElementById("selectorIdioma");

selectorIdioma.addEventListener("change", (evento) => {
    const idiomaSeleccionado = evento.target.value;
    const elementosTraducibles = document.querySelectorAll("[data-es]");

    elementosTraducibles.forEach(elemento => {
        elemento.textContent = elemento.getAttribute(`data-${idiomaSeleccionado}`);
    });

    document.documentElement.lang = idiomaSeleccionado;
});