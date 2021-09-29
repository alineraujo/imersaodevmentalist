var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);

  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Você acertou!";
    console.log("acertou");
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10 ";
    console.log("você deve digitar um número de 0 a 10");
  } else if (chute < numeroSecreto) {
    elementoResultado.innerHTML = "Você errou, o número secreto é maior ";
    console.log("número secreto maior");
  } else if (chute > numeroSecreto) {
    elementoResultado.innerHTML = "Você errou, o número secreto é menor ";
    console.log("número secreto menor");
  }
  //else {
  //elementoResultado.innerHTML = "Você errou ";
  //console.log("errou");
}