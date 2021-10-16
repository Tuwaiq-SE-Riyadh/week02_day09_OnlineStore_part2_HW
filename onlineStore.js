
let products=[{

    name: "Chanel Black Bag",
    image: "https://www.worldsbest.com/uploads/35/13121/1442607638.jpg",
    price: 66
},
{
    name: "Chanel White Bag",
    image: "https://www.jolicloset.com/imgr/full/2017/04/38563-1/chanel-beige-leather-coco-handle-handbags.jpg",
    price: 70   
},
{
    name: "Chanel Green Bag",
    image: "https://www.dogsanddresses.com/wp-content/uploads/2018/06/Chanel-Flap-Bag-with-Top-Handle-Green-5100.jpg",
    price: 70
},
{
    name: "Prada Pink Bag",
    image: "https://s.yimg.com/aah/movadobaby/prada-handbag-bn2823-2a4a-f060m-66.jpg",
    price: 90
},
{
    name: "Prada Blue Bag",
    image: "https://s.yimg.com/aah/movadobaby/prada-saffiano-cuir-double-large-tote-bag-137.jpg",
    price: 90
}];

 /*   let cart= {
    hPdt: null, //refer to product list
    hItems: null, //refer to current cart
    items: {}, //refer to the current items 
    iURL: "images/",
};*/

let body = document.querySelector("body");

let cart=load();

for (let i = 0; i < products.length; i++) {

        let div2 = document.createElement("div");
        let li = document.createElement("img");
        li.width="300";
        let pn = document.createElement("p");
        let pr = document.createElement("p");
        let b = document.createElement("button");
        b.addEventListener("click", function(){

            cart.push(products[i]);
            save()
            console.log(cart)

        })
        li.src = products[i].image;
        li.p = products[i].name;
        li.p = products[i].price;

        div2.appendChild(pn);
        div2.appendChild(li);
        console.log(div2)
        console.log(products[i].image);
        pn.innerText = products[i].name;
        pr.innerText = products[i].price;
        div2.appendChild(pr);
        div2.appendChild(b);
        
        let div = document.querySelector(".grid-container");
        div.appendChild(div2);
        console.log(div);

}

//Local Storage
//To save products in local storage
     function save(){
        localStorage.setItem("cart", JSON.stringify(cart));}


//To restore products from local storage
     function load(){
        let cart = localStorage.getItem("cart");
        if (cart == null){cart=[];}
        else {cart = JSON.parse(cart);}
        return cart;
     }

//To empty cart
     function nuke(){
        if (confirm("Empty cart?")){
            cart.items={};
            localStorage.removeItem("cart");
            cart.list();
        }
     }
  