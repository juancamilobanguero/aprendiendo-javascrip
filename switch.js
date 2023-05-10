let numero = 1000;

switch (numero){
    case 1:
    console.log("soy uno!");
    // siempre tiene que ir el break cuando le estamos dando un case
    break;
    case 20:
        console.log("soy un 20!");
        break;
        case 200:
      console.log("soy un 200!");
      break;
      case 50:
        console.log("soy un 50!")
        // esta funcion de default va hacer si le dimos un case y no encuentra el case no vas a rogar un texto
        default:
            console.log("no soy nada");      
}