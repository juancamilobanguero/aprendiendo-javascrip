// describiendo las partes que tiene la moto 
// let moto = {
//    marca: "YAMAHA", 
//    modelo: "YZF",
//    color: "azul",
//    año: "2023"
// }
// this un una variable que hace referencia al objeto
// si nomas queremos traer un solo objeto de solo le damos el nombre y luego con el . escribimos el objeto
// moto()

// fuction construtora

function cicla(marca, modelo,año){
     this.marca = marca;
     this.año = año;
     this.modelo = modelo;
}
let motoNueva = new moto ("yamaha","Fi","2023")