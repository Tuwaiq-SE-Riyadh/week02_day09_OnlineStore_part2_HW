// Your online store is required to implement the following:
// * Within the entirety of your site, you should have the following JavaScript functionality:
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


const productArr = [
    {
        name:"Croton",
        img:"plant/plant1.jpg",
        price:50
    },
    {
        name:"Sansevieria Cylindrica",
        img:"plant/plant2.jpg",
        price:135
    },
    {
        name:"Bonsai",
        img:"plant/plant3.jpg",
        price:52
    },
    {
        name:"Lucky Bamboo",
        img:"plant/plant4.jpg",
        price:165
    },
    {
        name:"Epipremnum aureum",
        img:"plant/plant5.jpg",
        price:122
    },
    {
        name:"Hoya kerrii",
        img:"plant/plant6.jpg",
        price:18
    },
    {
        name:"Peperomia magnoliifolia",
        img:"plant/plant7.jpg",
        price:52
    },
    {
        name:"Cactus",
        img:"plant/plant8.jpg",
        price:30
    },
    {
        name:"Aglaonema Silver Bay",
        img:"plant/plant9.jpg",
        price:90
    },
    {
        name:"Ceropegia woodii",
        img:"plant/plant10.jpg",
        price:65
    },
    {
        name:"Ficus Benjamina",
        img:"plant/plant11.jpg",
        price:270
    },
    {
        name:"Monstera",
        img:"plant/plant12.jpg",
        price:85
    },
]
var addToCartButtons = document.getElementsByClassName('addToCard')
// localStorage.clear();
// localStorage.setItem('CardCount',0)
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
        priceP.innerText = temp +" "
        console.log("4927y56lkdfmnvk "+temp);
    }else{
        localStorage.setItem("totalCost", product.price)
        priceP.innerText = product.price
    }
    // localStorage.setItem("totalCost", product.price)
    // const priceP = document.querySelector('.totalPrice')
    // let cartCost = localStorage.getItem('totalCost')
    
    // if(!cartCost){
    //     cartCost = parseInt(cartCost)
    //     console.log("lksdnjliasjdsabdknjasl/kkdmklsajndk "+cartCost+product.price);
    //     localStorage.setItem("totalCost", cartCost+product.price)
    //     console.log("total incresed "+totalPrice);
    // } else{
    //     localStorage.setItem("totalPrice",product.price)
    //     }
    // // if (totalPrice) {
    // //     // priceP.innerText =totalPrice+product.price
    // //     localStorage.setItem("totalPrice",totalPrice+product.price)
    // //     console.log("total incresed", totalPrice+product.price);
    // // }else{
    // //     localStorage.setItem("totalPrice",totalPrice)
    // //     // priceP.innerText = totalPrice
    // //     console.log("total incresed for first time");
    // // }
}


function addProductToCart(product) {
    let cardProduct = localStorage.getItem('CardProduct')
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
OnloadSaveCardCount();
// 1- from catalogue page allow quick add                                                           DONE

// 2- each Element page have add to card 
// 3-  if user click add to card button alert show the total amount in card
// 4- crete card page which have:                                                                   in progress
//      -item 
//      -price of each item
//      -total cost with Vat 
// 5- Create a form for:
//      -“discount coupons”.
//      -select “collection” or “delivery”.
//      -Create forms for different delivery options.
// 6- the total change based on:
//      -delivery option
//      -coupon is applied
// 7- Create a “conﬁrm order” button =====> alerts the order successful 
//                                   =====> generates them a reference number (keyword: generate)

const body = document.querySelector('body')




// save all the obj in local storage
// for (let i = 0; i < products.length; i++) {
//     // must stringify arrays and objects before saving to local storage
//     let js = JSON.stringify(products[i])
//     key = 'product' +(i+1)
//     localStorage.setItem(key,js)
//     const users = localStorage.getItem(key)
//     // parse the value to turn it back to its original state (array in this case) 
//     let cartValue = localStorage.getItem(key)
//     let cartObj = JSON.parse( cartValue );
//     //console.log(cartObj)
// }


// var addToCartButtons = document.getElementsByClassName('addToCard')
//     for (let i = 0; i < addToCartButtons.length; i++) {
//         // console.log("kkkkkkkkk"+addToCartButtons[i]);
//         let button = addToCartButtons[i]
//         button.addEventListener('click', addToCart)
        
//     }


// create Product Page for each product
//onclick = "createProductPage()"
function createProductPage(id) {
    // const body = document.querySelector("body");
    id.innerText("bgtlkfmlb")
    // showImage()

}
// //Create image 
// showImage(Animals[0].image, Animals[0])

// Heelper Function
function showImage(id) {
    const img = document.createElement("img");
    img.src = id.image
    console.log(id);
    // // img.style.width = "300px"
    // const p1 = document.createElement("p");
    // // p1.style.background ="pink"
    // img.addEventListener("click", function() {
    //     console.log("clicked");
    //     p1.innerText=animal.print()
    //   })
    // document.body.appendChild(img);
    // document.body.append(p1);
}


// click QUIC add to card
// add item to card
// go to card page 
// card page include all items in card and total price

function alert(id) {
    // id.addEventListener("click", function (e) {
    //     console.log("Added to card");
        alert('Added to card')
    // });
}



// var addToCartButtons = document.getElementsByClassName('addToCard')
//     for (let i = 0; i < addToCartButtons.length; i++) {
//         // console.log("kkkkkkkkk"+addToCartButtons[i]);
//         let button = addToCartButtons[i]
//         button.addEventListener('click', addToCart)
        
//     }
// function addToCart(event) {
//     const tag = event.target
//     console.log("cooooooooooooooooooooome");  
//     const product = tag.parentElement.parentElement
//     console.log("shopitem.img.src");   
    
//     // set image, name, price
//     let imageSrc = product.getElementsByClassName('product-image')[0].src
//     console.log(imageSrc);
//     let name = product.getElementsByClassName('name')[0].innerText
//     console.log(name);
//     let price = product.getElementsByClassName('price')[0].innerText
//     addProductToCart(imageSrc, name, price)
//     // updateCartTotal()
// }

// function addProductToCart(imageSrc, name, price) {
//         const cartRow= document.querySelector(".productInCard");
//         const div = document.createElement('div');

//         // cartRow.classList.add(cartRow)
//         var cartItems = document.getElementsByClassName('product-image')[0]
//         var cartItemNames = cartItems.getElementsByClassName('name')
//         for (var i = 0; i < cartItemNames.length; i++) {
//             if (cartItemNames[i].innerText == name) {
//                 alert('This item is already added to the cart')
//                 return
//             }
//         }
//         // console.log("imageSrc>>>>>>>>>>>>>>>" +price); 
//         const img = document.createElement('img')
//         const nameP = document.createElement('p')
//         const priceP = document.createElement('p')
//         img.src = imageSrc
//         console.log("imageSrc>>>>>>>>>>>>>>>"+imageSrc);
//         nameP.innerText = name
//         priceP.innerText = price
        
//         div.appendChild(img)
//         div.appendChild(nameP)
//         div.appendChild(priceP)
//         body.append(div)
        
//         // cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
//         // cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
//     }
// // function goToProduct(event) {
     
// //     const button = event.target
// //     console.log("cooooooooooooooooooooome");  
// //     const shopItem = button.parentElement
// //     console.log("shopitem.img.src" +shopitem.img.src);   

// //     const imageSrc = shopitem.img.src
// //     console.log("cooooooooooooooooooooome");    
// // }
