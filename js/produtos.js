function increaseQuantity(id) {
    let quantityElement = document.getElementById(`quantity-${id}`);
    let currentQuantity = parseInt(quantityElement.innerText);
    quantityElement.innerText = currentQuantity + 1;
  }
  
  function decreaseQuantity(id) {
    let quantityElement = document.getElementById(`quantity-${id}`);
    let currentQuantity = parseInt(quantityElement.innerText);
    if (currentQuantity > 0) {
      quantityElement.innerText = currentQuantity - 1;
    }
  }
  