let articulos = [
    {nombre: "celular", price: 3000},
    {nombre: "computador", price: 2000},
    {nombre: "cama", price: 1000},
    {nombre: "tv", price: 2000},
    {nombre: "escritorio", price: 15000},
    {nombre: "silla", price: 3000},
    {nombre: "teclado", price: 100},
    {nombre: "audifonos", price: 200},
];

// este metodo me ayuda a filtar los objetos que tengo en mi array

let articulosFiltrados = articulos.filter(function(articulo){
     return articulo.price <= 100

})
articulosFiltrados

// segundo metedo con map este metodo nos ayuda a mapiar todo el contenideo del array
let nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre

})
nombreArticulos

//tercer metodo con find este metodo va a validar con un tru y un false
let encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "computador"
})
encuentraArticulo

//cuarto metodo que es forEach este metedo no me va a generar un nuevo array si que me va a hacer un filtrato de mi array
articulos.forEach(function(articulo){
              console.log(articulo.nombre)                       
})
// quinto metodo que es some este metodo nos va a regresar una validacion de verdadaero o falso para los articulos que cumpla esa validacion
let articuloCaros = articulos.some(function(articulo){
     return articulo.costo <= 3000;
})