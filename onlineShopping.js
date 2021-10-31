// Your online store is required to implement the following:
//     * Within the entirety of your site, you should have the following JavaScript functionality:
//     * Create a functional shopping cart for your online store.
//     * Allow a “quick add to cart” from the catalogue page.
//     * Each product’s page must also have the option to “add to cart”.

//     * When an item is added, an alert should tell the user what the current total is.
//     * Create a new html page for the cart section which allows the user to see what is in their cart, 
//         each item’s price, and the total cost (remember to add VAT!).
//     * Create a form which allows for “discount coupons”.
//     * Create forms to allow a user to select “collection” or “delivery”.
//     * Create forms for different delivery options.
//     * Your total should change based on what delivery option is chosen and if a certain coupon is applied.
//     * Create a “conﬁrm order” button which alerts the user that their order was successful and generates them a reference number (keyword: generate)


// DONE: >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

class Product{
    constructor(name, image, price, count){
        this.name = name
        this.image = image
        this.price = price
        this.count = 0
    }
    showInfo(){
        return this.name,this.price;
    }
}


const product1 = new Product("Croton","plant/plant1.jpg",50);
const product2 = new Product("Sansevieria Cylindrica","plant/plant2.jpg",135);
const product3 = new Product("Bonsai","plant/plant3.jpg",52);
const product4 = new Product("Lucky Bamboo","plant/plant4.jpg",165);
const product5 = new Product("Epipremnum aureum","plant/plant5.jpg",122);
const product6 = new Product("Hoya kerrii","plant/plant6.jpg",18);
const product7 = new Product("Peperomia magnoliifolia","plant/plant7.jpg",52);
const product8 = new Product("Cactus","plant/plant8.jpg",90);
const product9 = new Product("Aglaonema Silver Bay","plant/plant9.jpg",90);
const product10 = new Product("Ceropegia woodii","plant/plant10.jpg",65);
const product11 = new Product("Ficus Benjamina","plant/plant11.jpg",270);
const product12 = new Product("Monstera","plant/plant12.jpg",85);
const products = [product1,product2,product3,product4,product5, product6, product7, product8, product9
,product10 , product11, product12]


var addToCartButtons = document.getElementsByClassName('addToCard')
for (let i = 0; i < addToCartButtons.length; i++) {
    let button = addToCartButtons[i]
    button.addEventListener("click", function() {
        cardCount(products[i])
        totalPrice(products[i])
    })
}

function cardCount(product) {
    const countP = document.querySelector('.count')
    let cardCount = localStorage.getItem('CardCount')
    //convert into int to count the products in card
    cardCount = parseInt(cardCount)
    // if Card is not empty increse count in card button by 1 then save it into local storage
    // else if the card empty add first product with count 1
    if (cardCount) {
        countP.innerText =cardCount+1
        localStorage.setItem("CardCount",cardCount+1)
        console.log("product added to card");
    }else{
        localStorage.setItem("CardCount",1)
        countP.innerText = 1
        console.log("first product added to card");
    }
    // call addProductToCart() to add product into card
    addProductToCart(product)
}


function totalPrice(product) {
    let cartCost = localStorage.getItem('totalCost')
    const priceP = document.querySelector('.totalPrice')
    console.log("total incresed "+cartCost);
    
    console.log("total incresed "+cartCost);
    let temp = 0;
    if(cartCost!=null){
        cartCost = parseInt(cartCost)
        temp = cartCost + product.price
        localStorage.setItem("totalCost", temp)
        console.log("kjnfdknok"+temp);
        console.log("4927y56lkdfmnvk "+temp);
    }else{
        localStorage.setItem("totalCost", product.price)
    }
}


function addProductToCart(product) {
    let cardProduct = localStorage.getItem('CardProduct')
    let totalCost = localStorage.getItem('totalCost')
    cardProduct = JSON.parse(cardProduct)
    // if CardProduct in local storage is not empty >> same product in card then add one more
    // else CardProduct is empty then add product for first time 
    if(cardProduct != null){
        // if it is not same product add new
        if(cardProduct[product.name] == undefined){
            cardProduct = {
                ...cardProduct,
                [product.name]:product
            }
            
            console.log("second ittteeeeem");
        }
        cardProduct[product.name].count +=1
        
    }else{
        product.count =1
        cardProduct = {
            [product.name]:product
        }
        console.log("first ittteeeeem");
    }
    // convet to json string
    let productJSON = JSON.stringify(cardProduct)
    localStorage.setItem("CardProduct",productJSON)
    
}
function OnloadSaveCardCount() {
    let cardCount = localStorage.getItem('CardCount')
    const countP = document.querySelector('.count')
    if (cardCount) {
        countP.innerText = cardCount
        console.log("load and card numbers is saved!");
    }
}

const body = document.querySelector('body')

function createProductPage(id) {
    id.innerText("bgtlkfmlb")
    
}

// Heelper Function
function showImage(id) {
    const img = document.createElement("img");
    img.src = id.image
    console.log(id);
}
    
    
    
function alert(id) {
    alert('Added to card')
}

function displayCart(){
    //CardProduct
    let item = JSON.parse(localStorage.getItem("CardProduct"))
    let totalCost = JSON.parse(localStorage.getItem("totalCost"))
    let CartContainer = document.querySelector(".Products")
    if(item && CartContainer){
        CartContainer.innerHTML = ''
        Object.values(item).map(e=>{
        console.log("e "+e.price);
        CartContainer.innerHTML+= `
        <div class="product">
            <div class="productInfo">
                <p>${e.name}</p>
                <img id="imgInCart" src="${e.image}">
            </div>
                <p id="priceP">${e.price},00RS</p>
                <p>${e.count}</p>
                <p>${e.count* e.price*0.15}RS</p>
            </div>
        <hr>
        `
    })
    CartContainer.innerHTML += `
    <div class="TotalContainer">
        <h5 class="totalH">Total price</h5>
        <p>${totalCost},00RS</p>
        <p>With VAT! ${totalCost+(totalCost*0.15)}RS</p>
    </div>`
    }
}
displayCart()
OnloadSaveCardCount();

// * When an item is added, an alert should tell the user what the current total is.