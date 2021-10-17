const coupons = [
  '6efc778f-e055-495a-81b0-e78dfe22f437',
  'c83cc57a-5ebf-438a-ac8b-77d06b54cb79',
  'f4b1ce07-156d-44e7-9721-642b1d9d3a46',
  '7533d492-c22b-4efd-b239-abe04aa2829f',
  'ea13e6d2-1dd9-4872-ac69-4446ff7d5038',
  '9265d60b-ccda-4005-9204-e69e506b46bf',
];
(function () {
  const addedProductsContainer = document.getElementById("cart-products");
  let storedProducts = localStorage.getItem("products");
  if (storedProducts) {
    addedProductsContainer.innerHTML = ``;
    storedProducts = JSON.parse(storedProducts);
    for (let i = 0; i < storedProducts.length; i++) {
      let pr = storedProducts[i];
      let product;
      products.forEach((p) => {
        if (p.productId == pr.productId) {
          product = p;
        }
      });

      addedProductsContainer.innerHTML += `
            <div>
                <div><span>Product Title:</span> ${product.title}</div>
                <div><span>Description:</span> ${product.description}</div>
                <div><span>Stock Price:</span> ${product.price}</div>
                <div><span>Count:</span> ${pr.count}</div>
            </div>
            `;
    }
    let price = calculateNewPrice();
    document.getElementById('cart-price').innerHTML = `<span>Price:</span> ${price}$`;
    document.getElementById('totalPrice').value = (price + Math.floor(price * .05));
    document.getElementById('cart-vat').innerHTML = `<span>Vat (5%):</span> ${Math.floor(price*.05)} $`;
    document.getElementById('cart-total').innerHTML = `<span>Total Price (VAT included):</span> ${price+Math.floor(price*.05)}$`;
    //check if coupon applied disable coupons
    if (localStorage.getItem('couponApplied')) {
      document.getElementById('coupon-value').disabled = true;
      document.getElementById('applyCoupon').disabled = true;
    }
    updateOrderPrice();


  } else {
    addedProductsContainer.innerHTML = `<div class="alert alert-warning">No products in your cart yet</div>`;
    document.getElementById('content').classList.add('d-none');
  }
})();

document.getElementById('form-coupon').addEventListener('submit', function (e) {
  e.preventDefault();
  let data = new FormData(document.getElementById('form-coupon'));
  let coupon = data.get('coupon');
  let applied = false;
  coupons.forEach(coup => {
    if (coup == coupon) {
      //set couponeApplied in local Storage and disable (apply coupon button)
      document.getElementById('applyCoupon').disabled = true;
      localStorage.setItem('couponApplied', coupon);
      alert('coupon applied successfully');
      updateOrderPrice();
      applied = true;
    }
  });
  if (!applied) {
    alert('Invalid Coupon');
  }
});

function handleReceivingOption(event) {
  switch (event.value) {
    case 'delivery':
      document.getElementById('form-delivery').classList.remove('d-none');
      break;
    case 'collection':
      document.getElementById('form-delivery').classList.add('d-none');
      localStorage.removeItem('deliveryMethod')
      break;
    default:
      alert('something wrong occurred!');
  }

}

function deliverySelected(e) {
  let myForm = new FormData(document.getElementById('form-delivery'));
  let deliveryMethod = myForm.get('delivery');
  switch (deliveryMethod) {
    case '1':
      localStorage.setItem('deliveryMethod', 10);
      break;
    case '2':
      localStorage.setItem('deliveryMethod', 20);

      break;
    case '3':
      localStorage.setItem('deliveryMethod', 30);
      break;

    default:
      alert('something wrong occurred!');
      break;
  }
  updateOrderPrice();
}

function updateOrderPrice() {
  let price = calculateNewPrice();
  //check if coupon applied
  let coupon = localStorage.getItem('couponApplied');
  if (coupon) {
    price = price - (price * 0.1);
  }
  localStorage.setItem('price', price);
  //check delivery method
  let deliveryFee = localStorage.getItem('deliveryMethod');
  if (deliveryFee) {
    price += parseInt(deliveryFee);
  }
  //add vat
  price += Math.floor(price * 0.05);
  document.getElementById('totalPrice').value = price;
  return price;
}
document.getElementById('order').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Your order number is: ' + Math.floor(Math.random() * (999999 - 100000 + 1) + 100000) + "with price: " + updateOrderPrice());
  localStorage.clear();
});