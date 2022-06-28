// IIFE
function meuEscopo() {
  const form = document.querySelector(".form");
  const resultado = document.querySelector(".resultado");

  const pessoas = [];
  /*  form.onsubmit = function (evento) {
      evento.preventDefault();
      alert("Formulário enviado com sucesso!");
      console.log("Formulário enviado com sucesso!");
  }; 
  */
  /*
 let contador =1;
  function recebeEventoForm(evento) {
      evento.preventDefault();
      console.log(`Form não foi enviado, ${contador} tentativa.`);
      contador++;
  }
  */

  function recebeEventoForm(evento) {
    evento.preventDefault();
    const nome = form.querySelector(".nome");
    const sobrenome = form.querySelector(".sobrenome");
    const peso = form.querySelector(".peso");
    const altura = form.querySelector(".altura");

    pessoas.push = {
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value,
    };

    console.log(pessoas);

    resultado.innerHTML += `<p>Nome: ${nome.value},  Sobrenome: ${sobrenome.value},  Peso: ${peso.value},  Altura: ${altura.value} .</p>`;
  }

  form.addEventListener("submit", recebeEventoForm);
}

meuEscopo();
