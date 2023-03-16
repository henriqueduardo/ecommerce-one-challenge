// input - pesquisar produtos
const cards = document.querySelectorAll('.cards');
const filterInput = document.getElementById('filter');

function hasWhiteSpace(text) {
  return /\s/g.test(text);
}

filterInput.addEventListener('input', () => {
  const filterText = filterInput.value.toLowerCase();

  if (hasWhiteSpace(filterText)) return;

  for (const card of cards) {
    let cardTitle = card.querySelector('p');
    cardTitle = cardTitle.textContent.toLowerCase();

    if (cardTitle.includes(filterText)) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  }
});

// form - validar contato
function validarForm() {
  let nome = document.getElementById("nome");
  let mensagem = document.getElementById("mensagem");

      if(nome.value == "") {
          alert("Informe seu nome.");
          nome.focus();
          return;
      }
      if(mensagem.value == "") {
          alert("Escreva sua mensagem!");
          mensagem.focus();
          return;
      }
      alert("Mensagem enviada!");
      resetarForm();
}

// validar login
function validarLogin() {
  let email = document.getElementById("email");
  let senha = document.getElementById("senha");

    if(email.value == "") {
      alert("Digite um e-mail valido!");
      email.focus();
      return;
    }
    if(senha.value == "") {
    alert("Senha incorreta!");
    senha.focus();
    return;
    }
    alert("Login feito com sucesso!");
    resetarForm();
}

// validar adicionar produto
function validarProduto() {
  let imgInput = document.getElementById("imgInput");
  let categoria = document.getElementById("categoria");
  let nomeProduto = document.getElementById("nomeProduto");
  let preco = document.getElementById("preco");
  let descricao = document.getElementById("descricao");

    if(imgInput.value == "") {
      alert("Insira uma URL válida.");
      imgInput.focus();
      return;
    }
    if(categoria.value == "") {
      alert("Infore uma categoria.");
      categoria.focus();
      return;
    }
    if(nomeProduto.value == "") {
      alert("Escolha um nome para o produto.");
      nomeProduto.focus();
      return;
    }
    if(preco.value == "") {
      alert("Informe o preço do produto $$.");
      preco.focus();
      return;
    }
    if(descricao.value == "") {
      alert("Descreva os detalhes do produto.");
      descricao.focus();
      return;
    }
    alert("Produto criado!");
    resetarForm();
}

// resetar form
function resetarForm() {
  document.getElementById("nome").value = "";
  document.getElementById("mensagem").value = "";
  document.getElementById("email").value = "";
  document.getElementById("senha").value = "";
  document.getElementById("imgInput").value = "";
  document.getElementById("categoria").value = "";
  document.getElementById("nomeProduto").value = "";
  document.getElementById("preco").value = "";
  document.getElementById("descricao").value = "";
}

// não dar refresh
const btn = document.getElementById("submit");
btn.addEventListener("click", function(e){
  e.preventDefault();
  console.log("não recarregar a porra da pagina");
})

// slides
const slides = document.querySelectorAll(".banner");
const dots = document.querySelectorAll(".dot");
let slideIndex = 0;

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
    dots[i].classList.remove("active");
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].classList.add("active");
  dots[slideIndex - 1].classList.add("active");

  setTimeout(showSlides, 4000);
}

showSlides();
