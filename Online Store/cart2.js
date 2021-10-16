const ul = document.querySelector("#items-list");
function showItemsInCart() {
    const ul = document.querySelector("#items-list");
    let items = localStorage.getItem("item");
    items = JSON.parse(items);
    for (let i = 0; i < items.length; i++) {
        const li = document.createElement("li");
        li.innerText= items[i].name + "     SR" + items[i].price;
        ul.append(li);
   }
}

const totalPrice = document.getElementById("price");
const vatPrice = document.getElementById("vat");
const deliveryPrice = document.getElementById("delivery-cost");
const discountPrice = document.getElementById("discount");

 function showDeliveryPrice() {
    let result = calculatePrice();


    let vat = result * 0.15;
    let total = result + vat;
    result = result + 10;
    deliveryPrice.innerText = "SR " + 10;
    totalPrice.innerText = "SR " + total + 10;
    vatPrice.innerText = "SR " + vat;

}
 function showCollection() {
    let result = calculatePrice();
    deliveryPrice.innerText = "SR " + 0;

    totalPrice.innerText = "SR " + total;
    vatPrice.innerText = "SR " + vat;
}

function calculatePrice() {
    let items = localStorage.getItem("item");
    items = JSON.parse(items);
    let result = 0;
    // claculate price
    for (let i = 0; i < items.length; i++) {
         result = result + parseInt(items[i].price);
    }
    let vat = result * 0.15;
    let total = result + vat;
    totalPrice.innerText = "SR " + total;
    vatPrice.innerText = "SR " + vat;

    return result;

}

function checkCoupon() {
        // check the coupon
        let result1 = calculatePrice();
        let coupon = document.getElementById("coupon").value;
        for (let j = 0; j < coupons.length; j++) {
            if(coupon === coupons[j]){
                discountPrice.innerText = "SR " + (result1 * 0.10)
                result1 = result1 * 0.90;
            }
        let vat = result1 * 0.15;
        let total = result1 + vat;
        totalPrice.innerText = "SR " + total;
        vatPrice.innerText = "SR " + vat;
        }
    
    
}

// targeting order type
// if it is Delivery we will add 10 to the total
const orderType = document.getElementById("order-type").value;
function orderTypeCost() {
    let deliveryCost = 10;
    if(orderType === "Delivery"){
        let price = calculatePrice();
        let vat = price * 0.15;
        price = price + deliveryCost;
        let total = price + deliveryCost + vat;
        totalPrice.innerText = "SR " + total;
        deliveryPrice.innerText = "SR " + 10;
    }
    //  i try to fix it but it is not working
    else {
        deliveryPrice.innerText = "SR " + 0;
        let price = calculatePrice();
        let vat = price * 0.15;
        let total = price + vat;
        totalPrice.innerText = "SR " + total;
    }
    
}

function confirmOrder() {
    alert("the order was successful!");
}
showItemsInCart();
calculatePrice();
orderTypeCost();



const coupons = ["A10" , "AAA" , "KSA"];
