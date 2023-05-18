let estudiantes = ["camilo","andres","samuel","manuel","rata mona"];

function saludarEstudiantes(estudiante){
       console.log(`hola ${estudiante}`); // tiene que ir con esas comillas para que salga la solicitud que deas
}

while(estudiantes.length > 0){
    console.log(estudiantes);
    let estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
} 
