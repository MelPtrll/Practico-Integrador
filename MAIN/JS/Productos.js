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
  