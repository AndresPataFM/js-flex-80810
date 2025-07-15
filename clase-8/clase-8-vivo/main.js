// const contador = setTimeout(funcion,tiempo)
// Tiempo en ms

/* const temporizador = setTimeout(()=>{
  console.log("Pasaron tres segundos")
}, 3000) */

/* setTimeout(()=>console.log(1), 2000)
setTimeout(()=>console.log(2), 1000)
setTimeout(()=>console.log(3), 5000)
setTimeout(()=>console.log(2), 1000)
console.log(5) */

// El código sincrónico siempre sale antes que el asincrónico

/* setTimeout(()=>console.log(1), 1000)
setTimeout(()=>console.log(2), 0)
console.log(3) */

// 321
/* let tiempo = 0
const segundero = document.getElementById("segundero")
const intervalo = setInterval(()=>{
  // console.log(++tiempo, "segundos")
  segundero.innerText = `${(++tiempo)/100}s`
}, 10) */


// setTimeout(()=>{
//   clearInterval(intervalo)
//   console.log("Frenar")
// }, 5000)

/* const btnFrenar = document.getElementById("frenar")

btnFrenar.addEventListener("click", ()=>{
  clearInterval(intervalo)
  console.log("Frenar")
})
 */



/* console.log('empieza sincronico')
function saludar(string){
    console.log("¡Hola " + string + "!")
}
function nombre(){
    return "Andrés"
}
// Saludo sincrónico
saludar(nombre())
// Saludo asincrónico
// setTimeout(function(){saludar("Juan")}, 10000)
// setTimeout(function(){saludar("Pedro")}, 1000)
// for(let i=0; i<3; i++){
//     console.log(i)
// }
console.log('termina sincrónico') */



// Promesas
// const miPrimerPromesa = new Promise((resolve, reject)=>{
//   const nroRandom = Math.floor(Math.random()*2)
//   if(nroRandom === 0){
//     reject("Cruz")
//   } else {
//     resolve("Cara")
//   }
// })
// console.log(miPrimerPromesa)

// console.log("antes del try")
// try {
//   // 
//   console.log("mostrar cosas iniciales")
//   console.log("pedido a base de datos")
//   asdasd // frena en el error
//   asd.prop
//   console.log("mostrar lo que trajimos de la base de datos")
// } catch (error) {
//   // entra al catch en el error
//   console.warn("Este es el error", error)
// } finally {
//   // siempre se ejecuta
//   console.log("Finalizamos el pedido a la API")
// }


// console.log("luego del try")

/* const listaProductos = document.getElementById("productos")
let productos = []


const mostrarProductos = ()=>{
  //sincrónico
  console.log(productos)
  listaProductos.innerHTML = ""
  productos.forEach(prod =>{
    const li = document.createElement("li")
    li.innerText = `${prod.id} - ${prod.nombre}`
    listaProductos.appendChild(li)
  })
} */

/* const traerProductos = ()=>{
  // asincrónico
  try {
    const productosFetch = fetch("lista.json")
    productosFetch.then((respuesta)=>{
      console.log(respuesta)
      // El método .json viene de por si en las respuestas de las promesas y convierte un json a js
      return respuesta.json()
    }).then(rta=>{
      productos = rta
      console.log(productos)
      mostrarProductos()
    })
  } catch (error) {
    console.warn("Salio mal el pedido")
  }
} */

// const traerProductos = async ()=>{
//   console.log("INICIO")
//   try {
//     const datosJson = await fetch("lista.json") // pedimos info de la api
//     const datosProcesados = await datosJson.json() // la convertimos a js

//     // utilizamos los datos que conseguimos
//     productos = datosProcesados
//     mostrarProductos()
//   } catch (error) {
//     console.warn("Este es el error:", error)
//     listaProductos.innerText = "Error 404, no se consiguieron los datos, intenta más tarde"
//   }
//   console.log( "FIN")
// }


// traerProductos() //asincrónico
// // mostrarProductos() //sincrónico






















const listaDOM = document.getElementById("pokemon")
// query parameters | parametros de búscqueda
const url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=151"
// const url = "https://pokeapi.co/api/v2/saraza1"

function mostrarPokemons(arrayPokemon){
  listaDOM.innerHTML = ""
  arrayPokemon.forEach(pokemon => {
    const a = document.createElement("a")
    const li = document.createElement("li")
    a.href = pokemon.url
    a.target = "_blank"
    a.textContent = pokemon.name
    li.appendChild(a)
    listaDOM.appendChild(li)
  });
}


// fetch(url).then(rta=>{
//   return rta.json()
// }).then(respuesta=>{
//   console.log(respuesta)
//   mostrarPokemons(respuesta.results)
// }).catch(e=>
//   console.warn("Fetch fallido")
// )

async function cargarPokemon(){
  try{
    // promesa inicial
    const datosJSON = await fetch(url)
    console.log(datosJSON)
    // promesa para cambiar a json
    const datos = await datosJSON.json()
    // agarro lo que uso de los resultados
    console.log(datos)
    const listaPoke = datos.results
    mostrarPokemons(listaPoke)
  }catch(e){
    console.warn(e)
    listaDOM.innerText = "ERROR"
  }
}

cargarPokemon()