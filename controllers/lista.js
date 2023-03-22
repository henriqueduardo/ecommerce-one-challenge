import { services } from "../js/services.js";
import { formatPrice } from "../formatterPrices.js";

const getProducts = (name, price, imgUrl, id, alt) => {
  const card = document.createElement("div");

  const conteudo = `
  <div class="cards produto-box">
                <img src="${imgUrl}" alt="${alt}">
                <div class="edit-del">
                    <button id="del" class="btn-del"><img class="btn-del" src="img/trash3.svg" alt="apagar item"></button>
                    <a href="editar-produto.html?id=${id}"><button class="btn-edit"><img src="img/pencil.svg" alt="editar item"></button></a>
                </div>
                <p>${name}</p>
                <span>${price}</span>
                <p>${id}</p>
            </div>
    `;
  card.innerHTML = conteudo;
  card.dataset.id = id;
  return card;
};

const produtos = document.querySelector("[data-products]");

produtos.addEventListener("click", async (evento) => {
  let deleteButton = evento.target.className === "btn-del";
  if (deleteButton) {
    const produto = evento.target.closest("[data-id]");
    let id = produto.dataset.id;
    services
      .deletarProduto(id)
      .then((res) => {
        produto.remove();
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
});

const render = async () => {
  try {
    const listaProdutos = await services.listaProdutos();

    listaProdutos.forEach((produto) => {
      produtos.appendChild(
        getProducts(produto.name, produto.price, produto.imgUrl, produto.id)
      );
    });
  } catch (err) {
    console.log(err);
  }
};

render();
