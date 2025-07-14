// const contador = setTimeout(funcion,tiempo)
// Tiempo en ms








































// Promesas

// const miPrimerPromesa = new Promise((resolve, reject)=>{
//   const nroRandom = Math.floor(Math.random()*2)
//   if(nroRandom === 0){
//     reject("Cruz")
//   } else {
//     resolve("Cara")
//   }
// })





























/* const listaDOM = document.getElementById("pokemon")
const url = "https://pokeapi.co/api/v2/pokemon?offset=151&limit=151"

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
    // promesa para cambiar a json
    const datos = await datosJSON.json()
    // agarro lo que uso de los resultados
    const listaPoke = datos.results
    mostrarPokemons(listaPoke)
  }catch(e){
    console.warn(e)
    listaDOM.innerText = "ERROR"
  }
}

cargarPokemon() */