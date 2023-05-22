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

function celular(samsung,iphone,nokia){
     this.samsung = samsung;
     this.iphone = iphone;
     this.nokia = nokia;
}

let celulares = [];
for(let i = 0; i <3;i++){
     let samsung = prompt("ingrese la marca del celular que quiere comprar");
     let iphone = prompt("cual iphone desea!");
     let nokia = prompt("cual nokiadeseas!")

     celulares.push(new celular(samsung,iphone,nokia));
}
for(let i = 0; i < celulares.length;i++){
     console.log(celulares[i])
}

function computador (pantalla,cargador,tatil){
        this.pantalla = pantalla;
        this.cargador = cargador;
        this.tatil = tatil;
}

let computadors = [];
for(let i = 0; i <3;i++){
     let pantalla = prompt("cual pantalla desea!");
     let cargador = prompt("cual cargador desea!");
     let tatil = prompt("cual tatil desea!");
     computadors.push(new computador(pantalla,cargador,tatil));
}
for(let i = 0; i < computadors.length;i++){
     console.log(computadors[i])
}