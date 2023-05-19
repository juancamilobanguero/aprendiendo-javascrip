// describiendo las partes que tiene la moto 
let moto = {
   marca: "YAMAHA", 
   modelo: "YZF",
   color: "azul",
   año: "2023"
}
// this un una variable que hace referencia al objeto
// si nomas queremos traer un solo objeto de solo le damos el nombre y luego con el . escribimos el objeto
moto()

// fuction construtora

function moto(marca, modelo,año){
     this.marca = marca;
     this.año = año;
     this.modelo = modelo;
}
let motoNueva = new moto ("yamaha","Fi","2023")
 
//ejercicios con contructora
function fruta(manzana,perra,uvas){
     this.manzana = manzana;
     this.perra = perra;     
     this.uvas = uvas;
}

let frutas =[];
for(let i = 0; i < 2; i++){
    let manzana = prompt("que frutas deseas");
    let perra = prompt("la frutas que deseas");
    let uvas = prompt("ingrese la fruta ");

    frutas.push(new fruta(manzana,perra,uvas));
}
for(let i = 0; i < frutas.length; i++){
     console.log(frutas[i]);
}
