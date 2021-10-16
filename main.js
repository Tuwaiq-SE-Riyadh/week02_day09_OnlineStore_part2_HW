let carts = document.querySelectorAll('.add-cart');
let products = [ 
    {
        name: "T-SHIRT light blue",
        image: "t1",
        price: 15,
        pInCaet: 0
    },
    {
        name: "T-SHIRT Orange",
        image: "t2",
        price: 20,
        pInCaet: 0
    },
    {
        name: "T-SHIRT Navy blue",
        image: "t3",
        price: 15,
        pInCaet: 0
    },
    {
        name: "T-SHRT Striped ",
        image: "t4",
        price: 18,
        pInCaet: 0
    },
    {
        name: "T-SHIRT Dark gray",
        image: "t5",
        price: 14,
        pInCaet: 0
    },
    {
        name: "T-SHIRT Green",
        image: "t6",
        price: 18,
        pInCaet: 0
    }
];

for(let i=0; i< carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    });
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if( productNumbers ) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(product, action) {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    let cartItems = localStorage.getItem('productspInCaet');
    cartItems = JSON.parse(cartItems);

    if( action ) {
        localStorage.setItem("cartNumbers", productNumbers - 1);
        document.querySelector('.cart span').textContent = productNumbers - 1;
        console.log("action running");
    } else if( productNumbers ) {
        localStorage.setItem("cartNumbers", productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem("cartNumbers", 1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItems(product);
}

function setItems(product) {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    let cartItems = localStorage.getItem('productspInCaet');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null) {
        let currentProduct = product.image;
    
        if( cartItems[currentProduct] == undefined ) {
            cartItems = {
                ...cartItems,
                [currentProduct]: product
            }
        } 
        cartItems[currentProduct].pInCaet += 1;

    } else {
        product.pInCaet = 1;
        cartItems = { 
            [product.image]: product
        };
    }

    localStorage.setItem('productspInCaet', JSON.stringify(cartItems));
}

function totalCost( product, action ) {
    let cart = localStorage.getItem("totalCost");

    if( action) {
        cart = parseInt(cart);

        localStorage.setItem("totalCost", cart - product.price);
    } else if(cart != null) {
        
        cart = parseInt(cart);
        localStorage.setItem("totalCost", cart + product.price);
    
    } else {
        localStorage.setItem("totalCost", product.price);
    }
}

function displayCart() {
    let cartItems = localStorage.getItem('productspInCaet');
    cartItems = JSON.parse(cartItems);
    let cart = localStorage.getItem("totalCost");
    cart = parseInt(cart);
    let totalOfItems= 0;
    totalOfItems = parseInt(totalOfItems);
    let productContainer = document.querySelector('.products');
    if( cartItems && productContainer ) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map( (item, index) => {
            productContainer.innerHTML += 
            `<div class="product"><img src="./images/${item.image}.png" />
                <span class="sm-hide">${item.name}</span>
            </div>
            <div class="price sm-hide">$${item.price},00</div>
            <div class="quantity">
                    <span>${item.pInCaet}</span>
            </div>
            <div class="total">$${item.pInCaet * item.price},00</div>`;

            
        });      
        productContainer.innerHTML += `
        <div class="basketTotalContainer">
        <h4 class="basketTotalTitle">"collection” or “delivery" :</h4>
        <select class="delivery" OnSelect ="select()"  >
          <option class="valuo10" value="10">"collection : $10.00”</option>
          <option class="valuo15"value="15">“delivery : $15.00"</option>
    
        </select>
        </div>`
        productContainer.innerHTML += `
        <div class="basketTotalContainer">
        <h4 class="basketTotalTitle">FAIST DELIVRY:</h4>
        <select class ="faist" OnSelect ="faistSelect()">
          <option class="valuo20" value="20">"YES : $20.00”</option>
          <option class="valuo0" value="0">NO : FREE"</option>
        </select>
        </div>`
    }
    let item1=document.querySelector(".valuo10").value;
    let item2=document.querySelector(".valuo15").value;
    let item3=document.querySelector(".valuo20").value;
    let item4=document.querySelector(".valuo0").value;
    item1= parseInt(item1);
    item2= parseInt(item2);
    item3= parseInt(item3);
    item4= parseInt(item4);
    
    
    if (item1 ==10 &&item3==20){
        productContainer.innerHTML += `
            <div class="basketTotalContainer">
                <h4 class="basketTotalTitle">TAX </h4>
                <h4 class="basketTotal">15%</h4>
            </div>`
            totalOfItems=cart*0.015*100+item1+item3;
        productContainer.innerHTML += `
            <div class="basketTotalContainer">
                <h4 class="basketTotalTitle">Basket Total</h4>
                <h4 class="basketTotal">$${totalOfItems.toFixed(2)}</h4>
            </div>`
    }else if (item1==10 && item4==0) {
        productContainer.innerHTML += `
        <div class="basketTotalContainer">
            <h4 class="basketTotalTitle">TAX </h4>
            <h4 class="basketTotal">15%</h4>
        </div>`
        totalOfItems=cart*0.015*100+item1+item4;
    productContainer.innerHTML += `
        <div class="basketTotalContainer">
            <h4 class="basketTotalTitle">Basket Total</h4>
            <h4 class="basketTotal">$${totalOfItems.toFixed(2)}</h4>
        </div>`
        
    } else if(item2==15 && item3==20)  {
        productContainer.innerHTML += `
        <div class="basketTotalContainer">
            <h4 class="basketTotalTitle">TAX </h4>
            <h4 class="basketTotal">15%</h4>
        </div>`
        totalOfItems=cart*0.015*100+item2+item3;
    productContainer.innerHTML += `
        <div class="basketTotalContainer">
            <h4 class="basketTotalTitle">Basket Total</h4>
            <h4 class="basketTotal">$${totalOfItems.toFixed(2)}</h4>
        </div>`
        
    }else{
        productContainer.innerHTML += `
        <div class="basketTotalContainer">
            <h4 class="basketTotalTitle">TAX </h4>
            <h4 class="basketTotal">15%</h4>
        </div>`
        totalOfItems=cart*0.015*100+item2+item4;
    productContainer.innerHTML += `
        <div class="basketTotalContainer">
            <h4 class="basketTotalTitle">Basket Total</h4>
            <h4 class="basketTotal">$${totalOfItems.toFixed(2)}</h4>
        </div>`
    
    }
}
onLoadCartNumbers();
displayCart();
