import { services } from "../js/services.js";

const getURL = new URL(window.location);

const id = getURL.searchParams.get("id");

const imagemUrl = document.querySelector("[data-url]");
const inputNome = document.querySelector("[data-nome]");
const inputPreco = document.querySelector("[data-preco]");
const inputDescricao = document.querySelector("[data-descricao]");

services.listaUmProduto(id).then((dados) => {
  imagemUrl.setAttribute("src", dados.imgUrl);
  inputNome.value = dados.name;
  inputPreco.value = dados.price;
  inputDescricao.value = dados.description;
});

const formulario = document.querySelector("[data-form]");
formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  services
    .editarProduto(id, inputNome.value, inputPreco.value, inputDescricao.value)
    .then(() => {
      window.location.href = "../produtos.html";
    });
});
