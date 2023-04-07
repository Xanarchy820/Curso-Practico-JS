let bandera = false;

do {
    let respuesta = prompt("¿Cuánto es 2 + 2?");
    if(respuesta === 4) {
        console.log("Felicitaciones");
        bandera = true;
    }
}while(!bandera);