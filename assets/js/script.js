function cambiarParrafo() {
    let parrafoNuevo = document.getElementById('miParrafo');
    parrafoNuevo.innerHTML = 'Adios mundo';
    parrafoNuevo.style.color = 'red';
    parrafoNuevo.style.fontSize = '30px';
}

function cambiarAModoNocturno() {
    let nuevoBody = document.getElementById('bodyCambiante');
    nuevoBody.style.backgroundColor = 'black';
    nuevoBody.style.color = 'white';
}

