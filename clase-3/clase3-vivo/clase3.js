// declarar la info a utilizar *4

// armar pregunta *4

// hacer pregunta *4

// verificar rta (tipo de dato) *4

// evaluar si la rta es correcta o no *4

// mostrar rta a usuario


/* const agua = "agua"
const limonada = "limonada"
const vino = "vino"
const cerveza = "cerveza"

const consultaBebida = prompt("¿Que desea tomar?").toLowerCase()

switch(consultaBebida){
  case agua:
    alert("Aca tenes tu agua.")
    break
  case vino:
    alert("Aca tenes tu vino.")
    break
  case limonada:
    alert("Aca tenes tu limonada.")
    break
  case cerveza:
    alert("Aca tenes tu cerveza.")
    break
  default:
    alert("no tengo esa bebida")
} */

// Bebidas en stock

const agua = "agua"
const limonada = "limonada"
const vino = "vino"
const cerveza = "cerveza"

// funciones

function consultarBebida(){
  // Le pregutna al usuario que bebida quiere y evita queapreten cancelar o respondan vacío
  let consultaBebida = prompt("¿Que desea tomar?")
  // let validador = consultaBebida === null || consultaBebida === ""
  while(consultaBebida === null || consultaBebida === ""){
    consultaBebida = prompt("¿Que desea tomar? Por favor no aprete cancelar ni deje el campo vacío")
    // validador = consultaBebida === null || consultaBebida === ""
  }
  const bebidaProcesada = consultaBebida.toLowerCase()
  // console.log(bebidaProcesada)
  return bebidaProcesada
}

// switch(consultarBebida()){
function responderConsultaBebida(bebida){
  // Evalúa si tenemos esa bebida que se consulta
  if(bebida === agua || bebida === vino || bebida === limonada || bebida === cerveza){
    alert(`Aca tenes tu ${bebida}.`)
    return bebida
  } else {
    alert(`No tengo ${bebida}.`)
    return ""
  }
}

function mesero(){
  // corre la aplicación, preguntando cuantas bebidas quieren y verifica si el pedido es el correcto
  let loop = true
  while(loop){
    const cantidad = parseInt(prompt("¿Cuántas bebidas quieren?"))
    let pedido = "Sus bebidas son: "
    for(let i=0; i<cantidad; i++){
      let bebidaActual = consultarBebida()
      let bebidaConsultada = responderConsultaBebida(bebidaActual)
      if(bebidaConsultada !== ""){
        pedido += `\n- ${bebidaConsultada}`
      }
    }
    pedido += "\n ¿Quiere pedir las bebidas nuevamente?"
    loop = confirm(pedido)
  }
  alert("Gracias por su pedido")
}

// Ejecución de código

// mesero()

// =================================================

/* function sumar (primerNumero, segundoNumero){
  return primerNumero + segundoNumero
}

console.log(sumar(4,7))

// en js, se pueden reasignar funciones a variables primitivas
// es un crimen de guerra
sumar = 2+2

console.log(sumar(3,2)) */

// Funciones anonimas, para proteger las variables

/* function sumar (primerNumero, segundoNumero){
  return primerNumero + segundoNumero
} */

/* const sumar = function(primerNumero, segundoNumero){
  return primerNumero + segundoNumero
}

console.log(sumar(4,7))

// El const nos protege de la reasignación
// sumar = 2+2

console.log(sumar(3,2)) */

/* 2 + 5 es igual a 7
2 + 5 es igual a 7
2 + 5 es igual a 7
2 + 5 es igual a 7 */

// 4+2 = 6


// Función flecha
// const sumar = (primerNumero, segundoNumero)=>{
//   return primerNumero + segundoNumero
// }

/* const sumar = (primerNumero, segundoNumero) => primerNumero + segundoNumero

console.log(sumar(12, 45)) */

// const saludarNombre = nombre => `¡Hola ${nombre}!`

/* const saludarNombre = nombre => {
  // mucho código
  return `¡Hola ${nombre}!`
} */

const saludarNombre = nombre => {
  // mucho código
  return "¡Hola " + nombre + "!"
}

console.log(saludarNombre("Andrés"))

const pedirDato = prompt("saraza")

// const PUNTUACION_MAXIMA = 100;