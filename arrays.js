let moto = ["llanta","lampara","direccion","espejos"];
// el elemneto push nos ayuda a gregar mas elementos a nuestro array
let maxmoto = moto.push("tanque");
// el elemento pop nos va a eliminar lo ultimo elemento que esta en el array
let ultimo = moto.pop("tanque");
// cuando vallamos a agregar un nuevo elementos no nos va a agregar de ultimo si no de primero
let nuevalongitud = moto.unshift("tanque");
// este elemento nos va ayudar a eleiminar lo primero  que este en nuetra lista de array
let borrarmoto = moto.shift("tanque");
// este nos ayudara saver la posicion de nuestro array
let posicion = moto.indexOf("espejos");
console.log(moto);