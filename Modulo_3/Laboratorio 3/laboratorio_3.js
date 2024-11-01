//Aquí desarrollaremos el laboratorio tres
//en la medida de lo posible sería bueno dejar comentado cada ejercicio para que sea más fácil 
//identificar cada punto al momento de arreglar el PDF
//según lo acordado Brayan hace el primer punto, aleja hace el segundo y Jonathan el tercer punto
//El cuarto punto está por definir para hacer un punto cada uno del ejercicio 4.

//Desarrollo ejercicio 3

//Una función tradicional que salude al usuario

function saludar (nombre) {
    console.log(`Hola ${nombre}`)
}
saludar("Jonathan")

//Una función flecha que calcule el total con impuesto

let total = (valor, impuesto)  => {
        let total
        impuesto = impuesto / 100
        total = valor + (valor * impuesto)
        console.log(`El valor total a pagar ya con el impuesto de iva incluido es $${total}`)
}

total(1000000,19)

//Una función que reciba un callback simple

const PAISES = ['Colombia', 'Argentina', 'Brasil']

function agregarPais (lista, callback){
    lista.push ('Perú')
    callback(lista)
}

agregarPais(PAISES, function(lista) {
    console.log(`He agregado un país al array y ahora es de ${lista.length} elementos`)
})