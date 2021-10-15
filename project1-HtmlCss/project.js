class items{
constructor(id, name,image, color, price,description,page){

    this.id = id
    this.name= name;
    this.color= color;
    this.image = image;
    this.price = price; 
    this.description = description;
    this.page =page;
}
};

const arrayOfItems = [new items(1 , "bubble candel", "https://assets.bigcartel.com/product_images/efd6a2d6-70e1-4f0c-a1d5-0f7576764176/candles.jpg?auto=format&fit=max&w=1000", "white", 32, "candel shaped as bubble and has one wick", "productPage.html"),
new items(2 , "heart candel", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcdFXipq62Z3R05b0vzSs3sJHU2dQZoyE5QQ&usqp=CAU", "red", 22, "candel shaped as heart and has one wick", "#"),
new items(3 , "long candel", "https://cdn1.bigcommerce.com/server600/eqcqd/products/3926/images/7008/CR_180_large_42163__30133.1418312997.1280.1280.jpg?c=2", "white", 35, "long candel that has one wick", "#"),
 ];

let arrayOfCart =[];
const coupons =[["dis20",0.20],["code15",0.15]];
window.localStorage.setItem('coupon', JSON.stringify(coupons));
let total = 0;
let productID =0;
let coAllPrice=0;
let Users = [];

 // catalogue page

 function catalogue(){
 const cata = document.getElementById("catalogue");

 for(let i=0; i<arrayOfItems.length;i++){

     const div = document.createElement("div");
     div.className = "child";
     const image = document.createElement("img");
     const name = document.createElement("h4");
     const para = document.createElement("p");
     const bu = document.createElement("button");

     image.src = arrayOfItems[i].image;
    

     name.innerText = arrayOfItems[i].name;
    

     para.innerText = arrayOfItems[i].description;
     

     bu.innerText ="Add to Cart";
     bu.className = "cart";
     bu.addEventListener("click", function(){

        arrayOfCart = JSON.parse(window.localStorage.getItem('cart'));
        arrayOfCart.push(arrayOfItems[i]);
        window.localStorage.setItem('cart', JSON.stringify(arrayOfCart));

        total = JSON.parse(window.localStorage.getItem('total'));
        total += arrayOfItems[i].price;
        window.localStorage.setItem('total', JSON.stringify(total));
        alert("The total price is "+total);


     });

     image.addEventListener("click", function(){

        
        productID = arrayOfItems[i].id;
        window.localStorage.setItem('productID', JSON.stringify(productID));
        document.location.href = arrayOfItems[i].page;


     });

     div.append(image);
     div.append(name);
     div.append(para);
     div.append(bu);

     cata.append(div);
 }
 const cartIcon = document.getElementById("cartIcon");
 cartIcon.addEventListener("click",function(){
    document.location.href = "cartPage.html";
});
 };

 // Product Page

 function productPage(){

     productID = JSON.parse(window.localStorage.getItem('productID'));
     console.log(productID);

    for(let i=0; i<arrayOfItems.length; i++){

        if (productID == arrayOfItems[i].id){
 

    arrayOfCart = JSON.parse(window.localStorage.getItem('cart'));
    arrayOfCart.push(arrayOfItems[i]);
    window.localStorage.setItem('cart', JSON.stringify(arrayOfCart));

    total = JSON.parse(window.localStorage.getItem('total'));
    total += arrayOfItems[i].price;
    window.localStorage.setItem('total', JSON.stringify(total));
    alert("The total price is "+total);
        }
    };
};

function cartIcon(){
    document.location.href = "cartPage.html";
}


// cart page

function cartPage(){

   const numItems= document.getElementById("numItems");
   const itemsfainalnum= document.getElementById("itemsfainalnum");
   arrayOfCart = JSON.parse(window.localStorage.getItem('cart'));
    if (arrayOfCart.length === 1){
        numItems.innerText = "1 item";
        itemsfainalnum.innerText = "ITEMS 1";
    }
    else if (arrayOfCart.length > 1){
        numItems.innerText = arrayOfCart.length+" items";
        itemsfainalnum.innerText = "ITEMS "+arrayOfCart.length;
    }
    else {
        numItems.innerText = "0 items";
        itemsfainalnum.innerText = "ITEMS 0";
    }


const parent = document.getElementById("parent");
    for(let i=0; i<arrayOfItems.length; i++){

        let num =0;
        for (let j=0; j<arrayOfCart.length; j++){

            if (arrayOfItems[i].id === arrayOfCart[j].id){
                num ++;
            }
        }
        if (num>0){

            const divBig =document.createElement("div");
            divBig.classList.add("row","main","align-items-center");
            const div1 =document.createElement("div");
            div1.className= "col-2";
            const image = document.createElement("img");
            image.className="img-fluid";
            image.src = arrayOfItems[i].image;
            div1.append(image);
            const div2 =document.createElement("div");
            div2.className = "col";
            const div21 =document.createElement("div");
            div21.classList.add("row","text-muted");
            div21.innerText = arrayOfItems[i].name;
            const div22 =document.createElement("div");
            div22.className ="row";
            div22.innerText = arrayOfItems[i].description;
            const div3 =document.createElement("div");
            div3.className = "col";
            const a1 = document.createElement("a");
            a1.href= "#";
            a1.innerText ="-";
            a1.addEventListener("click",function(){
                let index = arrayOfCart.indexOf(arrayOfItems[i]);
                arrayOfCart.splice(index,1);
                window.localStorage.setItem('cart', JSON.stringify(arrayOfCart));
                window.location.reload();  
            });
            div3.append(a1);
            const a2 = document.createElement("a");
            a2.href= "#";
            a2.className="border";
            a2.innerText=num;
            div3.append(a2);
            const a3 = document.createElement("a");
            a3.href= "#";
            a3.innerText ="+";
            a3.addEventListener("click",function(){
                arrayOfCart.push(arrayOfItems[i]);
                window.localStorage.setItem('cart', JSON.stringify(arrayOfCart));
                window.location.reload();
            });
            div3.append(a3);
            const div4 =document.createElement("div");
            div4.className = "col";
            div4.innerText = (arrayOfItems[i].price)*num+"$";

            divBig.append(div1);
            div2.append(div21);
            div2.append(div22);
            divBig.append(div2);
            divBig.append(div3);
            divBig.append(div4);
            parent.append(divBig);

        }

    }

    Alltotal();
};

function Alltotal() {
    const total = document.getElementById("TOTAL");
    total.innerText = (JSON.parse(window.localStorage.getItem('total')))+"$";

    const vat =document.getElementById("vat");
    vat.innerText= "VAT "+((JSON.parse(window.localStorage.getItem('total')))*0.15)+"$";

    const AllPrice =document.getElementById("AllPrice");
    let shipingFee = 0;

    const se = document.getElementById("se").value;
    if(se == "op222"){
    const select = document.getElementById("selectShipping").value;
    //---------------
    
        if(select == "Op1"){
        shipingFee = 5;
    }
    else {
        shipingFee = 12;
      } }
    //-------------------------
        AllPrice.innerText = (JSON.parse(window.localStorage.getItem('total')))+((JSON.parse(window.localStorage.getItem('total')))*0.15)+shipingFee;
      
      
        let h = (JSON.parse(window.localStorage.getItem('total')))+((JSON.parse(window.localStorage.getItem('total')))*0.15)+shipingFee;
        const cupon = document.getElementById("code").value;
        let x=0;

        for(let i=0; i < coupons.length;i++){
            
            if(cupon == coupons[i][0]){

                AllPrice.innerText = h-(h*coupons[i][1]);
                x=1
                break;
            }
        }
       /* if(x==0){
            document.getElementById("cuponvalidtion").innerText = ("please enter valid cupon");
        }*/
    }
 

function deliveryop(){
    const select = document.getElementById("se");
    if(select.value == "op222"){
        document.getElementById("selectShipping").disabled = false;
    }else{
        document.getElementById("selectShipping").disabled = true;
    }
};


function cupons(){
    const cupon = document.getElementById("code").value;
    let x=0;
    console.log(x);
    const AllPrice =document.getElementById("AllPrice");
    console.log(AllPrice.innertext);
    for(let i=0; i < coupons.length;i++){
        
        if(cupon == coupons[i][0]){
           
            let z =JSON.parse(window.localStorage.getItem('All')); 
            AllPrice.innertext = z*coupons[i][1];
            x=1
            break;
        }
    }
    if(x==0){
        console.log("please enter invalid cupon");
    }

};


function uniqueN(){
    let userNum = Math.floor(Math.random() * 100);
    arrayOfCart = JSON.parse(window.localStorage.getItem('cart'));
    Users.push([userNum,arrayOfCart]);
}

 