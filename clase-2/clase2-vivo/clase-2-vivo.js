const primero = !false && true
// primero = true && true
// primero = true

console.log(primero)

const segundo = "a" < "B"

console.log(segundo)


/* let saldoString = prompt("Ingrese su saldo en número")
let saldoNumero = parseFloat(saldoString)

if(saldoNumero < 0){
  alert("Tenes saldo negativo")
} else {
  alert("Hermoso saldo")
} */


/* const leguajeFavorito = prompt("Cuál es tu leguaje favorito?").toLowerCase()

if(leguajeFavorito === "javascript" || "java"==leguajeFavorito){
  alert("a mí también me encanta")
} else if (leguajeFavorito=="python") {
  alert("Me copa pero no tanto")
} else {
  alert("No conozco ese lenguaje")
}
 */
/* if(leguajeFavorito === "javascript" || "java"==leguajeFavorito){
  alert("a mí también me encanta")
} else {
  alert("No conozco ese lenguaje")
} else if (leguajeFavorito=="python") {
  alert("Me copa pero no tanto")
}  */

const numero = 4

/* if(numero === 4){
  console.log(1)
} else if(numero < 10){
  console.log(2)
} else {
  console.log(3)
} */
/* 
if(numero < 10){
  console.log(`El número ${numero} es menor a 10`)
  if(numero%2 ===0){
    console.log(`El número ${numero} es par`)
  } else{
    console.log(`El número ${numero} es impar`)
  }
} else {
  console.log(`El número ${numero} es mayor o igual a 10`)
} */

// ||
//  si el valor de la izq es verdadero te lo muestro, sino muestro el de la derecha
// &&
//  si el valor de la izq es falso te lo muestro, sino muestro el de la derecha
// ??
//  si el valor de la izaq es null o undefined, muestra el de la derecha


// En un apartamento hay 6 inquilinos, 2 viven en el mismo cuarto, crea un algoritmo con switch para que nuestra máquina pueda con el nombre dado, decirle a que cuarto/piso ir


/* let nombre = prompt("diga su nombre").toLowerCase()

switch (nombre){
  case "andres":
    alert("1A")
    break
  case "diana":
    alert("1B")
    break
  case "jaime":
    alert("Hola Jaime")
  case "juan":
    alert("2A")
    break
  case "laura":
    alert("2B")
    break
  case "matilda":
    alert("3")
    break
  default:
    alert("Usted no vive aqui")
} 
 */

// for(let i=0; i<3; i = i+1){
//   console.log(i)
// }

/* let quiere = confirm("¿Queres un elogio?")
let contador = 0

while(quiere){
  // contador = contador +1
  // contador += 1
  // contador++

  // alert("Que agredable tu presencia.")
  quiere = confirm(`Que agredable tu presencia. ¿Queres otro elogio? Cantidad de elogios: ${++contador}`)
}

alert("chau") */

/* let quiere = confirm("¿Queres un elogio?")
let contador = 0

do{
  quiere = confirm(`Que agredable tu presencia. ¿Queres otro elogio? Cantidad de elogios: ${++contador}`)
}while(quiere)

alert("chau") */

let datosCorrectos = false

do{
  let contrasenia = "1234"
  let ingresoContrasenia = prompt("ingrese su contrasenia")
  datosCorrectos = contrasenia === ingresoContrasenia
} while(!datosCorrectos)

alert("Ingresaste")