const botoes = document.querySelectorAll(".botao");
console.log(botoes);

for (let i = 0; i < botoes.length; i++) {
    console.log(i);
  }

  botoes[i].onclick = function () {};
  botoes[i].onclick = function () {
    botoes[i].classList.add("ativo");
  };
  for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {
      botoes[i].classList.add("ativo");
    };
  }