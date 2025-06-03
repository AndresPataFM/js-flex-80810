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
    alert("no tengo esa bevida")
} */

const agua = "agua"
const limonada = "limonada"
const vino = "vino"
const cerveza = "cerveza"

function consultarBebida(){
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


const bebidaEvaluar = consultarBebida()

console.log(bebidaEvaluar)

// switch(consultarBebida()){
switch(bebidaEvaluar){
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
    alert("no tengo esa bevida")
}