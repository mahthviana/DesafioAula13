const palpite = document.getElementById(palpite);
const botao = document.getElementById(enviar);
var number = Math.floor(Math.random() * (10 - 1 + 1)) + 1;

botao.addEventListener('click', (event) => {
  event.preventDefault();
  
  var correctNumber;

  if (number > 0) {
    correctNumber = number;
  }
  if (palpite !== correctNumber) {
    var dicas = document.getElementById(dica);
    const p = document.createElement('p');
    dicas.

    if (palpite < correctNumber) {
      p.innerText = "O número correto é maior que o seu palpite atual"
    }
    else if (palpite > correctNumber) {
      p.innerText = "O número correto é menor que o seu palpite"
    }
    else {
      p.innerText = "O número está correto!"
      resp.innerText = correctNumber
    }
  }


})