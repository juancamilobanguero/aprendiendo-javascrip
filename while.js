let estudiantes = ["camilo","andres","samuel","manuel"];

function saludarEstudiantes(estudiante){
       console.log("hola, ${estudiante}");
}

while(estudiantes.length > 0){
    console.log(estudiantes);
    let estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
} 