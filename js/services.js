//GET
const listaProdutos = () =>
  fetch("http://localhost:3000/produto")
    .then((resposta) => resposta.json())
    .catch((error) => console.log(error));

const listarUmProduto = (id) => {
  return fetch(`http://localhost:3000/produto/${id}`).then((resposta) => {
    return resposta.json();
  });
};

//POST
const criarProduto = (name, imgUrl, price, id) => {
  return fetch("http://localhost:3000/produto", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      imgUrl,
      price,
      id
    }),
  }).then((resposta) => {
    if (resposta.ok) {
      return resposta.body;
    }
    throw new Error("Não foi possível criar a porra produtoVNBJASKDB");
  });
};

// PUT/PATCH
const editarProduto = async (name, imgUrl, price, id, description) => {
  return fetch(`http://localhost:3000/produto/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      imgUrl,
      price,
      description
    }),
  })
    .then((resposta) => {
      return resposta.json();
    })
    .catch((error) => console.log(error));
};

// DELETE
const deletarProduto = async (id) => {
  return await fetch(`http://localhost:3000/produto/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const services = {
  listaProdutos,
  listarUmProduto,
  criarProduto,
  editarProduto,
  deletarProduto,
};
