function imprimir(array) {
    console.log(array[0]);
}

imprimir([5, 8, 7, 2]);

function imprimir2(array) {
    for(let elemento of array) {
        console.log(elemento);
    }
}

imprimir2([5, 8, 7, 2]);

function imprimir3(objeto) {
    for(let propiedad in objeto) {
        console.log(objeto[propiedad]);
    }
}

imprimir3({name: "Samuel", lastname: "Gomez", age: 19});