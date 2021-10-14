// data 
const characters = [
    {
        id : 1,
        name : "Iphone",
        description: "Apple iPhone 12 Pro Max 256 GB, Pacific Blue, 5G",
        price : 4999,
        image : "/images/iphone.jpg"
    },
    {
        id : 2,
        name : "OPPO",
        price : 999,
        description : "128 GB, Navy Black, 5G",
        image : "/images/OPPO.jpg"
    },
    {
        id : 3,
        name : "Huawei",
        price : 3999,
        description : "Intel Core i5-1135G7 (11th Gen), Intel Iris Xe Graphics, 512 GB SSD",
        image : "/images/huawei.jpg"
    },
    {
        id : 4,
        name : "Samsung",
        price : 2699,
        description : "256 GB, 12 GB RAM, 5G, Green",
        image : "/images/samsung.jpg"
    },
    {
        id : 5,
        name : "SamsungTV",
        price : 5399,
        description : "Samsung Q60A Ultra HD QLED (Quantum-dot) Smart TV ",
        image : "/images/samsungtv.jpg"
    },
    {
        id : 6,
        name : "haier",
        price : 2399,
        description : "Haier H75S5UG 75, 4K Ultra HD DLED Android TV",
        image : "/images/haier.jpg"
    },
    {
        id : 7,
        name : "asus",
        price : 3683,
        description : "'15.6', AMD Ryzen 7-4800H, NVIDIA GeForce GTX 1650 (4 GB), 512 GB PCIe NVMe M.2 SSD",
        image : "/images/asus.jpg"
    },
    {
        id : 8,
        name : "Ipad",
        price : 3499,
        description : "Apple iPad mini 6 Tablet PC - 5G Support 8.3', 64 GB, Purple",
        image : "/images/ipad.jpg"
    }
];

// display Product list
if (window.location.href.match('Products.html') != null) {
    for (let i = 0; i < characters.length; i++) {
        const Chname = characters[i].name;
        const Chaimg = characters[i].image;
        const Chades = characters[i].description;
        const Chaprice = characters[i].price;

        const superdiv = document.querySelector("#Prodects");
        const child = document.createElement("div");
        child.className = "child";

        const img =document.createElement("img");
        const childContent = document.createElement("div");
        childContent.className = "child-content";

        const headingName =document.createElement("h3");
        const desc =document.createElement("p");
        desc.className = "description";
        const paraghprice =document.createElement("p");
        const btn = document.createElement("button");
        btn.id = "cart";
        btn.value = Chname;
        btn.innerText = "Add to Cart";

  
        img.src = Chaimg;
        headingName.innerText = Chname;
        desc.innerText = Chades;
        paraghprice.innerText = Chaprice + " SR";


        childContent.append(headingName);
        childContent.append(desc);
        childContent.append(paraghprice);
        childContent.append(btn);
        

        child.append(img);
        child.append(childContent);
        superdiv.append(child);
    }
}

// onClick button 'add to Cart'
const cartbtn = document.querySelectorAll("#cart");
let price = 0;
let count = 1;
cartbtn.forEach(function(elem) {
    elem.addEventListener("click", function(){
        let selectedProduct = matchdata(this.value);
        console.log(selectedProduct);
        let array = JSON.stringify(selectedProduct)
        localStorage.setItem(count, array);
        price += selectedProduct.price;
        alert("The Total is: SAR "+price);
        count++;
        });
});

// get mathced data from array
function matchdata(name) {
    for (let i = 0; i < characters.length; i++) {
        if(name == characters[i].name){
            return characters[i]
        }
    }
}

// calculating total price
let result = 0;
const total = document.querySelector("#total");
const VAT = document.querySelector("#VAT");

for (let i = 1; i <= localStorage.length; i++) {

        const div = document.querySelector(".prod");
        const supdiv = document.createElement("div");
        supdiv.className = "card_item";
        const p =document.createElement("p");
        const price =document.createElement("h4");

        let x = localStorage.getItem(i)
        let y = JSON.parse(x);

        result += parseInt(y.price);
        p.innerText = y.name;
        price.innerText = "SAR " + y.price;

        supdiv.append(p);
        supdiv.append(price);
        div.append(supdiv);
        
}
total.innerText = "SAR " + result;
result =((result*0.15)+result);
VAT.innerText = "SAR " + result;

// calculating Cupon
const InsertCupon = document.querySelector("#InsertCupon")
InsertCupon.addEventListener("change" ,function() {
    if(InsertCupon.value === "100"){
    const cupon = document.querySelector("#cupon")
    result = (result-100)
    cupon.innerText = "SAR " + result;
    }
    else{
        cupon.innerText = "Not valied !";

    }
} );

// calculating DeliveryOption
let contact = document.querySelectorAll('input[name="DeliveryOption"]');
const LastPrice = document.querySelector("#LastPrice");
for (let i = 0; i < contact.length; i++) {
  contact[i].addEventListener("change", function() {
    let val = this.value;
    if(val === "delivery"){
        result +=30;
        LastPrice.innerText = "SAR " + result;
        const comment =document.createElement("p");
        comment.innerText = "SAR 30 for delivery";
        LastPrice.append(comment);

    }else{
        LastPrice.innerText = "SAR " + result;
    }
  
  });
}

// Payment button
const payment = document.querySelector(".proced_payment");
payment.addEventListener("click", function() {
    alert("The Order was successful and the Reference number is " +parseInt(Math.random()*10000));
});


