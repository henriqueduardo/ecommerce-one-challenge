import { services } from "../js/services.js";

const puxarProduto = (name, price, imgUrl, id) => {
  const card = document.createElement("div");

  const content = `
  <div class="cards produto-box">
                <img src="${imgUrl}" alt="">
                <div class="edit-del">
                        <button id="del" class="btn-del"><img class="btn-del" src="img/trash3.svg" alt="apagar item"></button>
                        <button class="btn-edit"><a href="../editar-produto.html?id=${id}"><img src="img/pencil.svg" alt="editar item"></a></button>
                </div>
                <p>${name}</p>
                <span>${price}</span>
                <p>#${id}</p>
            </div>
    `;
  card.innerHTML = content;
  card.dataset.id = id;
  return card;
};

const produtos = document.querySelector("[data-products]");

produtos.addEventListener("click", async (evento) => {
  let delBtn = evento.target.className === "btn-del";
  if (delBtn) {
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
        puxarProduto(produto.name, produto.price, produto.imgUrl, produto.id)
      );
    });
  } catch (err) {
    console.log(err);
  }
};

render();
