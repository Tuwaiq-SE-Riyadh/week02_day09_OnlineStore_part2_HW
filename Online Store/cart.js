// target all the buttons
let addToCartBtn = document.querySelectorAll(".add-to-cart");

for(let i=0 ; i < addToCartBtn.length; i++){

    // in here we added EventListener when we click the button
    // it will added to cart
    addToCartBtn[i].addEventListener("click" , function () {

        // push the item in cart array
        // call cartNumber function when click and passing the item that was clicked
        saveInLocalStorage(items_array[i])
    })
}

// this function will take the item that was clicked on and it will save it in localStorage
function saveInLocalStorage(item) {

    // load the items in localStorage
    let storageItems = localStorage.getItem("item");
    storageItems = JSON.parse(storageItems);

    // cheak if there is any items
    // if it is true then it will push a new item in cart array and save it in localStorage
    if(storageItems){
        cart.push(item); //Add the text 'item1' to nameArr
        localStorage.setItem("item", JSON.stringify(cart));
    }
    // means the localStorage is empty and the cart is empty
    else {
        localStorage.setItem("item", JSON.stringify(cart[0] = item));
    }


    calculatePrice(cart);    
}

function calculatePrice(cart) {
    let result = 0;
    for (let i = 0; i < cart.length; i++) {
         result = result + parseInt(cart[i].price);
    }
    console.log(result);
}


// array of items (inCart is how many times the item in cart)
// inCart 0 means nothing in cart
const items_array = [
    { name: "Resistance Bands Set", price: 115 },
    { name: "Adjustable Dumbbells", price: 230 },
    { name: "Ab Roller Wheel", price: 150 },
    { name: "Pushup Bars", price: 95 },
];


const cart = [];

