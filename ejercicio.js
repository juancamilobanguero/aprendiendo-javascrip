let op1 = piedra;
let op2 = papel;
let op3 = tigera;

let resultado = function(user,cpu){
    if(user != cpu){
        if(user === op1 && cpu === op3){
            console.log("el usuario Gano con"+ op1)
        }else if(user === op2 && cpu === op1){
            console.log("el usuario Gano con"+ op2)
        }else if(user === op3 && cpu === op2){
            console.log("el usuario Gano con"+ op3)
        }else{
            console.log("La cpu Gano!!")
        }
        
    } else if(user === cpu){
        console.log("empate")
    }
};