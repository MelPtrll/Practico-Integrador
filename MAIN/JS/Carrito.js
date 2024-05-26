document.addEventListener('DOMContentLoaded', function() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    const checkoutBtn = document.getElementById('checkout-button');
    const popup = document.getElementById('popup');
    const comprarAhoraBtn = document.getElementById('comprar-ahora-btn');
    const seguirComprandoBtn = document.getElementById('seguir-comprando-btn');
  
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    function renderCart() {
      cartItemsContainer.innerHTML = '';
      let total = 0;
  
      cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
  
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td><img src="${item.image}" alt="${item.name}" class="img-thumbnail" style="max-width: 50px;"></td>
          <td>${item.name}</td>
          <td>${item.description}</td>
          <td>$${item.price.toFixed(2)}</td>
          <td>
            <input type="number" value="${item.quantity}" min="1" class="form-control quantity-input" data-id="${item.name}">
          </td>
          <td>$${itemTotal.toFixed(2)}</td>
          <td>
            <button class="btn btn-danger btn-sm remove-btn" data-id="${item.name}">Eliminar</button>
          </td>
        `;
  
        cartItemsContainer.appendChild(tr);
      });
  
      totalPriceElement.textContent = `$${total.toFixed(2)}`;
    }
  
    function updateCart() {
      localStorage.setItem('cart', JSON.stringify(cart));
      renderCart();
    }
  
    cartItemsContainer.addEventListener('change', function(e) {
      if (e.target.classList.contains('quantity-input')) {
        const name = e.target.getAttribute('data-id');
        const newQuantity = parseInt(e.target.value);
  
        const item = cart.find(i => i.name == name);
        if (item) {
          item.quantity = newQuantity;
          updateCart();
        }
      }
    });
  
    cartItemsContainer.addEventListener('click', function(e) {
      if (e.target.classList.contains('remove-btn')) {
        const name = e.target.getAttribute('data-id');
        cart = cart.filter(item => item.name != name);
        updateCart();
      }
    });
  
    checkoutBtn.addEventListener('click', function() {
      popup.style.display = 'block';
    });
  
    comprarAhoraBtn.addEventListener('click', function() {
      alert('funcionalidad de pago no implementada aun.');
    });
  
    seguirComprandoBtn.addEventListener('click', function() {

      window.location.href = '/index.html';
    });
  
    renderCart();
  });