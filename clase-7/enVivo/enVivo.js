// get

// getElelementById(string) // Find

const liHTML = document.getElementById("liHTML")

// console.log(liHTML)
// console.dir(liHTML)


// getElementsByClassName(string) // filter
const rojos = document.getElementsByClassName("rojo")
// const rojos = document.getElementsByClassName("verde cursiva rojo")

// console.dir(rojos)

// getElementByTagName(string) // filter

const divs = document.getElementsByTagName("div")

// console.dir(divs)


// query

// querySelector(string) // find

const queryRojo = document.querySelector(".rojo")
const queryHTML = document.querySelector("#liHTML")
const queryComplejo = document.querySelector("div.rojo.verde")

// console.log(queryRojo)
// console.log(queryHTML)
// console.log(queryComplejo)

// querySelectorAll(string) // filter

const queryRojos = document.querySelectorAll(".rojo")
// console.log(queryRojos)

// Modicamos

const trabajoEsp = "Mi trabajo es saraza"
const trabajoEng = "My work is etc."

const divTrabajo = document.getElementById("trabajo")

console.dir(divTrabajo)

divTrabajo.innerText = trabajoEsp

// console.dir(btnDeberes)


// const sabesIngles = confirm("¿Sabés ingles?")

// if(sabesIngles){
//   // document.getElementById("soyElHTML").lang = "en"
//   divTrabajo.innerText = trabajoEng
// } else {
//   // document.getElementById("soyElHTML").lang = "es"
//   divTrabajo.innerText = trabajoEsp
// }

const darkmode = confirm("Darkmode?")

if(darkmode){
  document.body.classList.toggle("darkmode")
}