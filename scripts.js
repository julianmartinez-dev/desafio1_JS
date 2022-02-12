const btnSolucion = document.querySelector("#solucion");
btnSolucion.addEventListener("click", adivinarNumero);

function adivinarNumero() {

  const NUMERO_GANADOR = 7;
  let ADIVINADO = false; //Cuando se encuentre al ganador, la bandera pasa a true
  let intentosRestantes = 3; //Disminuye en cada iteración

  do {
    let numeroInsertado = parseInt(
      prompt(
        `Adivina un numero entre 1 y 10 tienes ${intentosRestantes} oportunidades`
      )
    );
    if (isNaN(numeroInsertado)) { //Si el valor ingresado no es un numero se cierra la función
      alert("Debes insertar un valor adecuado, buena suerte la próxima");
      return;

    }
    if (numeroInsertado === NUMERO_GANADOR) { //Comparación
      alert(`¡¡Adivinaste!! el numero secreto es ${numeroInsertado}`);
      ADIVINADO = true;
      return;
    }
    intentosRestantes--;

  } while (ADIVINADO === false && intentosRestantes > 0);

  if(!ADIVINADO){
      alert("Se terminaron los intentos :(");
      alert(`El número secreto era ${NUMERO_GANADOR}, buena suerte la próxima`)
  }

}
