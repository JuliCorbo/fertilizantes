let saludo = "bienvenido a la tienda virtual de vivero pimpaji!"
alert (saludo)


//objeto de productos con constructor
class items {
    constructor (nombre, precio){
        this.nombre= nombre;
        this.precio= precio;
    }
}

const productos = [];

//productos pusheados
productos.push(new items("floracion",500));
productos.push(new items("fertilizante", 650));
productos.push(new items("hormonal", 550));


//DOM del item floracion y su funcion
let pedidoFloracion = document.getElementById("floracion")
pedidoFloracion.addEventListener("submit",agregar)

function agregar (e){

    e.preventDefault();

    let pedidoFloracion = e.target
    console.log (floracion.children[0].value)
    console.log (floracion.children[1].value)

    let precio = Number(550)
    let nombre = "Floracion"

    let cantidad = floracion.children[0].value;
    let precioFloracion = cantidad * precio
    mostrarResultado(cantidad, precioFloracion, nombre)


}


// evento del item Foracion
function mostrarResultado(parametro1,parametro2,parametro3){
    let divFloracion = document.createElement("div")
    floracion.innerHTML = `<h3> usted agrego ${parametro1} ${parametro3}. por un total de $ ${parametro2} `

    document.body.append(divFloracion)
}



//DOM del item fertilizante y su funcion
let pedidoFertilizante = document.getElementById("fertilizante")
pedidoFertilizante.addEventListener("submit",agregarFertilizante)

function agregarFertilizante (e){

    e.preventDefault();

    let pedidoFertilizante = e.target // averiguar por que no se marco en azul

    console.log(fertilizante.children[0].value)
    console.log(fertilizante.children[1].value)

    let precio = Number(550)
    let nombreFertilizante = "Fertilizante"

    let cantidadFertilizante = fertilizante.children[0].value;


    let precioTotalFertilizante = cantidadFertilizante * precio
    mostrarResultadoF(cantidadFertilizante, precioTotalFertilizante, nombreFertilizante)

} 
//evento del item fertilizante
function mostrarResultadoF(parametro1, parametro2, parametro3){

    let divfertilizante = document.createElement("div")
    fertilizante.innerHTML = `<h3> usted agrego ${parametro1} ${parametro3}. por un total de $ ${parametro2}</h3>`

    document.body.append(divfertilizante)
}



//dom del item hormonal
let pedidoHormonal = document.getElementById ("hormonal")
pedidoHormonal.addEventListener("submit",agregarHormonal)

function agregarHormonal (e){


    e.preventDefault();

    let pedidoHormonal = e.target

    console.log(hormonal.children[0].value)
    console.log(hormonal.children[1].value)

    let precio = Number(550)
    let cantidadHormonal = hormonal.children[0].value
    let nombreHormonal = "hormonal"

    let precioTotalHormonal = cantidadHormonal * precio

    mostrarResultadoH(cantidadHormonal, precioTotalHormonal, nombreHormonal )
}

//evento del item hormonal
function mostrarResultadoH (parametro1, parametro2, parametro3){
    let divhormonal = document.createElement("div")
    hormonal.innerHTML = `<h3> usted agrego ${parametro1} ${parametro3}. por un total de $ ${parametro2}</h3>`;

    document.body.append(divhormonal)

}
