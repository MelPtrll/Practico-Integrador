function mostrarCategoria(categoria) {
  var categorias = document.querySelectorAll('.productos');
  categorias.forEach(function(cat) {
    cat.style.display = 'none';
  });
  
  var categoriaMostrar = document.getElementById(categoria);
  if (categoriaMostrar) {
    categoriaMostrar.style.display = 'flex';
  }
}

document.querySelectorAll('.add-to-cart-btn').forEach(button => {
  button.addEventListener('click', function() {
    const productId = this.getAttribute('data-id');
    const productName = this.getAttribute('data-name');
    const productPrice = parseFloat(this.getAttribute('data-price'));

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProduct = cart.find(item => item.id == productId);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({ id: productId, name: productName, price: productPrice, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Producto agregado al carrito');
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const catalogContainer = document.getElementById("catalog-container");

  fetch('productos.json')
      .then(response => response.json())
      .then(products => {
          products.forEach(product => {
              const productCard = document.createElement("div");
              productCard.className = "product-card";
              productCard.innerHTML = `
                  <img src="images/${product.imagen}" alt="${product.nombre}" class="product-image">
                  <h3>${product.nombre}</h3>
                  <p>${product.descripcion}</p>
                  <p>Precio: $${product.precio.toFixed(2)}</p>
                  <button class="add-to-cart" data-id="${product.id}">Agregar al Carrito</button>
              `;
              catalogContainer.appendChild(productCard);
          });

          document.querySelectorAll('.add-to-cart').forEach(button => {
              button.addEventListener('click', (e) => {
                  const productId = parseInt(e.target.getAttribute('data-id'));
                  addToCart(productId);
              });
          });
      });

  function addToCart(productId) {
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      const productInCart = cart.find(item => item.id === productId);

      if (productInCart) {
          productInCart.quantity += 1;
      } else {
          cart.push({ id: productId, quantity: 1 });
      }

      localStorage.setItem('cart', JSON.stringify(cart));
      alert('Producto agregado al carrito');
  }
});

function agregarAlCarritoYRedirigir(nombre, precio, img, descripcion) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  const existingItem = cart.find(item => item.name === nombre);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ name: nombre, price: precio, quantity: 1, img: img, description: descripcion });
  }

  localStorage.setItem('cart', JSON.stringify(cart));

  window.location.href = '/MAIN/HTML/Carrito.html';
}
