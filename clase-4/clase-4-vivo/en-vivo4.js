const usuario = {
  //clave: valor
  nombre: "Andrés", //propiedad
  permisos: "profesor",
  online: true,
  saludarAlIngreso: function(){ //método
    console.log(`Hola ${usuario.nombre}`)
  }
}

console.log(usuario)
console.log(usuario.nombre)
usuario.saludarAlIngreso()

console.log(console)


// Prototipos

/* console.log(Number)
console.log(Object)
console.log(String)
 */

// Entre otros

// Arrays

// El prototipo de Arrays es derivado de el prototiopo de Objetos

const numeritos = [
  123, // Elemento
  75,
  44, 
  55,
  456,
  528
]

// const numeritos = [123,75, 44, 55]

// console.log(numeritos)
// console.table(numeritos)

// propiedad única, length / largo
// console.log(numeritos.length)

/* numeritos[0]

console.log(numeritos[0])

console.log(numeritos[numeritos.length-1]) */

/* console.log(numeritos[2])

numeritos[2] = 3

console.log(numeritos[2]) */

// numeritos = 123

// console.log(numeritos)

// mala práctica para agregar elementos

/* numeritos[6] = 7
numeritos[8] = 8

console.table(numeritos)

console.log(numeritos[7])

for(let i=0; i<numeritos.length; i++){
  console.log(numeritos[i])
}

const objetos = [
  {a:1},
  {a:2},
  {a:3},
  {},
  // undefined, //esto genera error al recorrer
  {a:4},
]

for(let i=0; i<objetos.length; i++){
  console.log(objetos[i].a)
} */

const nombres = ["Andrés", "Nahuel", "Gianfranco"]

// console.table(nombres)

// nombres.unshift("Jorge")
// nombres.push("Jorge")

// nombres.shift()
// const datoRemovido = nombres.shift()
// const datoRemovido = nombres.pop()

// const nombresUnidos = nombres.join()
// const nombresUnidos = nombres.join(", tambien esta ")
// const nombresUnidos = `Los nombres en nuestra base de datos son:\n- ${nombres.join("\n- ")}`

// console.log(nombres.indexOf("Nahuel"))


// console.log(datoRemovido)
// console.table(nombresUnidos)
// console.table(nombres)

/* function quitarMasDeUnoShift(array, cantidad){
  // función helper para quitar con shift de un array n elementos
  for(let i=0; i<cantidad; i++){
    array.shift()
  }
}

console.log(numeritos)
quitarMasDeUnoShift(numeritos, 3)
console.log(numeritos) */

const cancion = [1,2,3,4,5,5,5,6]
/*  */
/* console.log(cancion) */
/* console.log(cancion.indexOf(5)) */
/* console.log(cancion.lastIndexOf(5)) */

/* const agregarNumeritosUnicos = function(numerito){
  const query = numeritos.indexOf(numerito)
  if(query === -1){
    numeritos.push(numerito)
  } else {
    console.warn("El numerito ya existe en array", numerito)
  }
}

agregarNumeritosUnicos(14568)
console.log(numeritos)
agregarNumeritosUnicos(14568) */

console.log(nombres)

/* nombres.sort()
nombres.reverse() */

nombres.sort().reverse()

console.log(nombres)


/* console.log(numeritos)

numeritos.sort()

console.log(numeritos) */

/* const agregarNumeritosUnicos = function(numerito){
  const query = numeritos.indexOf(numerito)
  console.log(query)
  if(numeritos.includes(numerito)){
    console.warn(`El numerito ya existe en array en posición ${query}`, numerito)
  } else {
    numeritos.push(numerito)
  }
}

agregarNumeritosUnicos(75) */

/* const hola = "hola"

console.log(hola.length)
console.log(hola) */
// console.log(String.length)

/* for(const numero of numeritos){
  console.log(numero)
} */
for(let nombre of nombres){
  nombre = nombre.toLowerCase()
  console.log(nombre)
}

console.log(nombres)