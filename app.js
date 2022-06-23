let saludo = "bienvenido a la tienda virtual de vivero pimpaji!"
alert (saludo)



class itemfloracion {
    constructor (nombre, precio){
        this.nombre= nombre;
        this.precio= precio;
    }
}

const productos = [];

productos.push(new itemfloracion("floracion",500));

let pedidoFloracion = document.getElementById("floracion")
pedidoFloracion.addEventListener("submit",agregar)

function agregar (e){

    e.preventDefault();

    let pedidoFloracion = e.target
    console.log (floracion.children[0].value)
    console.log (floracion.children[1].value)

    let precio = Number(500)
    let nombre = "Floracion"

    let cantidad = floracion.children[0].value;
    let precioFloracion = cantidad * precio
    mostrarResultado(cantidad, precioFloracion, nombre)


}

function mostrarResultado(parametro1,parametro2,parametro3){
    let divFloracion = document.createElement("div")
    floracion.innerHTML = `<h3> usted agrego ${parametro1} ${parametro3}. por un total de $ ${parametro2} `

    document.body.append(divFloracion)
}

class itemFertilizante{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}

productos.push(new itemFertilizante("fertilizante", 650));

let pedidoFertilizante = document.getElementById("fertilizante")
pedidoFertilizante.addEventListener("submit",agregarFertilizante)

function agregarFertilizante (e){

    e.preventDefault();

    let pedidoFertilizante = e.target

    console.log(fertilizante.children[0].value)
    console.log(fertilizante.children[1].value)

    let precioFertilizante = Number(650)
    let nombreFertilizante = "Fertilizante"

    let cantidadFertilizante = fertilizante.children[0].value;


    let precioTotalFertilizante = cantidadFertilizante * precioFertilizante
    mostrarResultadoF(cantidadFertilizante, precioTotalFertilizante, nombreFertilizante)

} 

function mostrarResultadoF(parametro1, parametro2, parametro3){

    let divfertilizante = document.createElement("div")
    fertilizante.innerHTML = `<h3> usted agrego ${parametro1} ${parametro3}. por un total de $ ${parametro2}</h3>`

    document.body.append(divfertilizante)
}

class itemHormonal {
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}

productos.push(new itemHormonal("hormonal", 550));

let pedidoHormonal = document.getElementById ("hormonal")
pedidoHormonal.addEventListener("submit" , agregarHormonal)

function agregarHormonal (e){


    e.preventDefault();

    let pedidoHormonal = e.target

    console.log(hormonal.children[0].value)
    console.log(hormonal.children[1].value)

    let precioHormonal = Number(550)
    let cantidadHormonal = hormonal.children[0].value
    let nombreHormonal = "hormonal"

    let precioTotalHormonal = cantidadHormonal * precioHormonal

    mostrarResultadoH(cantidadHormonal, precioTotalHormonal, nombreHormonal )
}

function mostrarResultadoH (parametro1, parametro2, parametro3){
    let divhormonal = document.createElement("div")
    hormonal.innerHTML = `<h3> usted agrego ${parametro1} ${parametro3}. por un total de $ ${parametro2}</h3>`;

    document.body.append(divhormonal)

}