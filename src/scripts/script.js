const formulario = document.querySelector("form");
function pegarValoresDoForm(event) {
  event.preventDefault();
  const listaDeVaInputs = Array.from(event.target);
  const listaDeValores = listaDeVaInputs.map(function (valorAtual) {
    return valorAtual.value;
  });
  console.log(listaDeValores);
}

function salvar(event) {
  event.preventDefault();
  pegarValoresDoForm();
}

formulario.addEventListener("submit", pegarValoresDoForm);
