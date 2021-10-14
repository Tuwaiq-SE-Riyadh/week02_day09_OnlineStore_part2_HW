// data 
function machdata(name) {
    const characters = [
         {
            id : 1,
            name : "Iphone",
            price : 4999
        },
        {
            id : 2,
            name : "OPPO",
            price : 999
        },
        {
            id : 3,
            name : "Huawei",
            price : 3999
        },
        {
            id : 4,
            name : "Samsung",
            price : 2699
        },
        {
            id : 5,
            name : "SamsungTV",
            price : 5399
        },
        {
            id : 6,
            name : "haier",
            price : 2399
        },
        {
            id : 7,
            name : "asus",
            price : 3683
        },
        {
            id : 8,
            name : "Ipad",
            price : 3499
        }

    ];

    for (let i = 0; i < characters.length; i++) {
        if(name == characters[i].name){
            return characters[i]
        }


    }
}


const cartbtn = document.querySelectorAll("#cart");
let price = 0;
let count = 1;
cartbtn.forEach(function(elem) {
    elem.addEventListener("click", function(){
        let selectedProduct = machdata(this.value);
        console.log(selectedProduct);
        let array = JSON.stringify(selectedProduct)
        localStorage.setItem(count, array);
        price += selectedProduct.price;
        alert("The Total is: SAR "+price);
        count++;
        });
});

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

const payment = document.querySelector(".proced_payment");
payment.addEventListener("click", function() {
    
    alert("The Order was successful and the Reference number is " +parseInt(Math.random()*10000));
    
});


