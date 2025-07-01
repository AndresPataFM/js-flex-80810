/* const factorial = (nro) =>{
  if(nro <= 1){
    return 1;
  }
  return nro * factorial(nro-1);
}

// 5! = 5*4*3*2*1 = 120

// console.log(5*4*3*2*1)

// console.log(factorial(5))

function factiorialCiclo (nro){
  let total = 1
  for(let i = 1; i<=nro; i++){
    total*=i
  }
  return total
}

console.log(factiorialCiclo(5)) */

// Funciones como return, pueden ser para recursividad

/* const dx = (caras)=>{
  return ()=>Math.floor(Math.random()*caras)+1
}

const d6 = ()=>{
  const rta = Math.floor(Math.random() * 6)+1
  return rta
}

const d20 = dx(20)

class Dado{
  constructor(caras){
    this.caras = caras
  }
  tirar(){
    return Math.floor(Math.random() * this.caras)+1
  }
}

const d12 = new Dado(12)

console.log(d12.tirar())
console.log(d12.tirar())
console.log(d12.tirar())
console.log(d12.tirar())
console.log(d12.tirar())
console.log(d12.tirar()) */

const productos = [ 
  {nombre:"🥟" , precio:10, id: 101},
  {nombre:"🍕" , precio:40, id: 102},
  {nombre:"🥪" , precio:25, id: 103},
  {nombre:"🍟" , precio:8, id: 104},
]

function trabajarConProductos(trabajo){
  for(let i=0; i<productos.length;i++){
    trabajo(productos[i])
  }
}

// trabajarConProductos(console.log)
// trabajarConProductos((remolacha)=>console.log(remolacha.nombre))

const especularInflacion = (prod)=>{
  console.log(`Estimado de ${prod.nombre} post inflación: `, prod.precio*1.2)
}

// trabajarConProductos((prod)=>console.log(`Estimado de ${prod.nombre} post inflación: `, prod.precio*1.2))
// trabajarConProductos(especularInflacion)

// productos.forEach((prod)=>console.log(prod.nombre))
// productos.forEach((ele, indice)=>console.log(ele, indice))
// productos.forEach((pepito, juanito)=>console.log(pepito, juanito))

/* function esPizza(prod){
  return prod.nombre === "🍕"
}

const pizza = productos.find(esPizza)

const pizzaDeUna = productos.find(prod=>prod.nombre === "🍕")
const pizzaDeId = productos.find(prod=>prod.id === 102)

console.log(pizza)
console.log(pizzaDeUna) */

const pocoPrecios = productos.filter(elemento => elemento.precio<=20)
const pares = productos.filter(elemento => (elemento.precio%2 === 0))

console.log(pocoPrecios)
console.log(productos)
console.log(pares)

const agregarProducto = (nombre, precio, id) =>{
  const existeEnArray = productos.some(x=>x.id===id)
  console.log(existeEnArray)
  if(existeEnArray){
    console.warn("El siguiente id esta ya en uso: ", id)
  } else {
    productos.push({nombre:nombre, precio:precio, id:id})
    console.log("Producto agregado exitosamente")
  }
}

agregarProducto("🥩", 85, 102)
agregarProducto("🥩", 85, 105)
agregarProducto("🍔", 40, 106)

const numeritos = [1,2,3]

const dobleNumeritos = numeritos.map(ele => ele*2)

console.log(dobleNumeritos)

const productosAumentados = productos.map(producto=>{
  const nuevoProd = {nombre: producto.nombre, precio:producto.precio*1.1, id:producto.id}
  return nuevoProd
})

// console.log(productosAumentados)
// productosAumentados.forEach(x=>x.precio*=1.1)
console.log(productosAumentados)

console.log(productos)

class ElementoCanasta{
  constructor(prod, cantidad){
    this.nombre = prod.nombre
    this.precio = prod.precio
    this.id = prod.id
    this.cantidad = cantidad
  }
}

const canasta = {
  lista: [],
  agregarElemento(prod, cantidad){
    this.lista.push(new ElementoCanasta(prod, cantidad))
  },
  calcularTotal(){
    return this.lista.reduce((total, elemento)=>{
      return total + elemento.precio * elemento.cantidad
    }, 0)
  }
}



// canasta.agregarElemento(productos[0], 3)
// canasta.agregarElemento(productos[1], 1)
// canasta.agregarElemento(productos[3], 4)
// // canasta.agregarElemento(productos[3], 4)

// console.log(canasta)

// console.log(canasta.calcularTotal())

// productos.sort((prod1, prod2)=>prod2.precio-prod1.precio)
// productos.sort((prod1, prod2)=>{prod1.precio-prod2.precio})

productos.sort((prod1, prod2)=>{
  const diferenciaPrecios = prod1.precio-prod2.precio
  const idFavorito = 102
  if(diferenciaPrecios<0){
    return -1 // pone primero al prod1
  } else if(diferenciaPrecios>0){
    return 1 //  pone primero a prod2
  } else if(diferenciaPrecios===0){
    if(prod1.id === idFavorito){
      return -1
    } else if(prod2.id === idFavorito){
      return 1
    } else {
      return 0
    }
  } else {
    return 0
  }
})

console.log(productos)