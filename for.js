let estudiantes = ["camilo", "brenda", "michael", "andres"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}
for(let i = 0; i < estudiantes.length; i++)
saludarEstudiantes("estudiante, {i}")

// utilizando el elemento de for of
// for(let estudiante of estudiantes){
//     saludarEstudiantes(estudiante);
// }
saludarEstudiantes();

let Empleados = ["camilo","breiner","santiago","ricardo"]

function saludarEmpleados(Empleado){
    console.log(`Hola, ${Empleado}`);
}
for(let i = 0; i < Empleados.length;i++){
    saludarEmpleados(Empleados,{i});
}
saludarEmpleados()