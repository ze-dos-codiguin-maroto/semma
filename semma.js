const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const productsList = document.querySelectorAll('.products li');

searchBtn.addEventListener('click', searchProducts);

function searchProducts() {
  const searchTerm = searchInput.value.toLowerCase();
  let found = false;

  productsList.forEach((product) => {
    const productName = product.querySelector('h3').textContent.toLowerCase();
    if (productName.includes(searchTerm)) {
      product.style.display = 'block';
      found = true;
    } else {
      product.style.display = 'none';
    }
  });

  if (!found) {
    const noResults = document.createElement('li');
    noResults.innerHTML = 'Nenhum item encontrado';
    productsList[0].parentNode.appendChild(noResults);
  }
}
  



// Selecione todos os botões "Adicionar ao carrinho"
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Adicione um evento de clique em cada botão
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Atualize a quantidade de itens no carrinho de compras
        const cartQuantity = document.querySelector('.cart-quantity');
        const currentQuantity = parseInt(cartQuantity.textContent);
        cartQuantity.textContent = currentQuantity + 1;
    });
});

// Selecione todos os botões "Remover do carrinho"
const removeToCartButtons = document.querySelectorAll('.remove-from-cart');

// Remova o atributo "disabled" dos botões
removeToCartButtons.forEach(button => {
    button.removeAttribute('disabled');
});

// Adicione um evento de clique em cada botão
removeToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Atualize a quantidade de itens no carrinho de compras
        const cartQuantity = document.querySelector('.cart-quantity');
        const currentQuantity = parseInt(cartQuantity.textContent);
        if (currentQuantity > 0) {
            cartQuantity.textContent = currentQuantity - 1;
        }
    });
});

const cartLink = document.getElementById('cart-link');

cartLink.addEventListener('click', () => {
    window.location.href = 'carrinho.html';
});
