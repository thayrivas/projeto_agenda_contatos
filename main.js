const form = document.getElementById("form-contatos");
const imgPerfil = '<img src="./imagens/perfil.png" alt="perfil" />';
const nome = [];
const telefone = [];
let linhas = "";

form.addEventListener("submit", function (e) {
  e.preventDefault();
  adicionaLinha();
  atualizaTabela();
});

function adicionaLinha() {
  const inputNomeContato = document.getElementById("nome-contato");
  const inputTelefone = document.getElementById("telefone");

  if (telefone.includes(inputTelefone.value)) {
    alert(`O telefone:${inputTelefone.value} foi adicionado a sua lista de contatos`);
  } else {
    nome.push(inputNomeContato.value);
    telefone.push(inputTelefone.value);

    let linha = "<tr>";
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputTelefone.value}</td>`;
    linha += "</tr>";

    linhas += linha;
  }
  inputNomeContato.value = " ";
  inputTelefone.value = " ";
}

function atualizaTabela() {
  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = linhas;
}

function atualizarLinhas() {
  linhas = " ";

  for (let i = 0; i < nome.length; i++) {
    let linha = "<tr>";
    linha += `<td>${nome[i]}</td>`;
    linha += `<td>${telefone[i]}</td>`;
    linha += "</tr>";
    linhas += linha;
  }
}