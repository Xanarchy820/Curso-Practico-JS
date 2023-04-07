function imprimir3(objeto) {
    for(let propiedad in objeto) {
        console.log(objeto[propiedad]);
    }
}

imprimir3({name: "Samuel", lastname: "Gomez", age: 19});