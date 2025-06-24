/* const usuario = {
  nombre: "Andrés",
  rol: "profesor",
  online: false,
  cursos: ["Js", "DW", "React"],
  mostrarCursos(){
    for(let curso of this.cursos){
      console.log(curso)
    }
  }
}

// Llamar prop

console.log(usuario.nombre)
console.log(usuario["rol"]) //recomiendo no utilizar

// /llamar método

// usuario.mostrarCursos()
usuario["mostrarCursos"]() //recomiendo no utilizar

// modificar

usuario.nombre = "Juan"

console.log(usuario.nombre)

usuario.nroMatricula = 45645656

console.log(usuario.nroMatricula)

usuario["miren me"] = "Porque existo"

// console.table(usuario.miren me) //genera error
console.log(usuario["miren me"])
console.table(usuario) */

/* const usuario = {
  nombre: "Andrés",
  rol: "profesor",
  online: false,
  cursos: ["Js", "DW", "React"],
  mostrarCursos(){
    for(let curso of this.cursos){
      console.log(curso)
    }
  }
}
console.log(usuario) */

const usuarios = [];


function asd(){}

// camelCase con mayúscula inicial es PascalCase
function Usuario(nombre = "", rol = "", online = false, cursos = []){
  this.nombre = nombre;
  this.rol = rol
  this.online = online
  this.cursos = cursos
  this.mostrarCursos = function(){
    for(let curso of this.cursos){
      console.log(curso)
    }
  }
}

const andres = new Usuario("Andrés", "Estudiante", true, ["Js"])
const juan = new Usuario("Juan", "Estudiante")

console.log(andres)
console.log(juan)

class Gato {
  constructor(nombre, edadEnMeses){
    this.nombre = nombre
    this.edadEnMeses = edadEnMeses
  }
  maullar(){
    console.log("miau")
  }
}

class Gatos {
  constructor(){
    this.lista = []
  }
  guardarMichis(){
    const gatosGuardar = JSON.stringify(gatos.lista)
    localStorage.setItem("listaGatos", gatosGuardar)
  }
  agregarGato(nombre, edad){
    // nombre = prompt("agregue un nombre al gatito")
    // while(nombre.trim() === "" || nombre === null){
    //   nombre = prompt("agregue un nombre al gatito, no aprete cancelar ni deje el espacio vacío")
    // }
    // edad = parseInt(prompt("agregue un edad al gatito"))
    // while(isNaN(edad) || edad === null || edad<0){
    //   edad = parseInt(prompt("agregue un edad al gatito en meses, tiene que ser un numero entero igual o superior a cero"))
    // }
    this.lista.push(new Gato(nombre, edad))
    this.guardarMichis()
  }
  aumentarEdad(){
    for(let i =0; i<this.lista.length; i++){
      this.lista[i].edadEnMeses++
    }
    this.guardarMichis()
  }
  mostrarMichis(){
    console.table(this.lista)
  }
  traerMichis(){
    const conseguirMichis = localStorage.getItem("listaGatos")
    const michisUtilizables = JSON.parse(conseguirMichis)
    for(const michi of michisUtilizables){
      this.agregarGato(michi.nombre, michi.edadEnMeses)
    }
  }
}

const gatos = new Gatos()
gatos.traerMichis()

// gatos.agregarGato("Michifus", 48)
// gatos.agregarGato("Mandarina", 7)
// gatos.agregarGato("Budín", 36)
// gatos.agregarGato("Pochoclo", 78)
// gatos.agregarGato("Merluza", 0)

console.log(gatos.lista)

// const numero = 4

// const booleano = false

// sessionStorage.setItem("numero", numero)
// localStorage.setItem("booleano", booleano)

console.log(localStorage.getItem("booleano"), typeof localStorage.getItem("booleano"))
console.log(sessionStorage.getItem("numero"), typeof sessionStorage.getItem("numero"))
console.log(sessionStorage.getItem("asdasdasdasdasd")) // lo que no existe es nulo

// const gatosGuardar = JSON.stringify(gatos.lista)

// localStorage.setItem("listaGatos", gatosGuardar)

// function convertirMichis(){
//   const conseguirMichis = localStorage.getItem("listaGatos")
//   const michisUtilizables = JSON.parse(conseguirMichis)
//   for(const michi of michisUtilizables){
//     gatos.agregarGato(michi.nombre, michi.edadEnMeses)
//   }
// }

// console.log(michisUtilizables)
// michisUtilizables.maullar()

for(const elemento in gatos.lista[0]){
  console.log(elemento)
}
