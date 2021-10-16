

let div = document.querySelector(".item");

const products = JSON.parse(localStorage.getItem("cart"))
console.log(products);

console.log(div)

let total = 0 , subtotal = 0;

for (let i = 0; i < products.length; i++) {

        let pn = document.createElement("p");
        let pr = document.createElement("p");

        pn.innerText=products[i].name;

        pr.innerText=products[i].price;
       
       subtotal=products[i].price;
       total+=subtotal;

        let div2 = document.createElement("div");

        div2.appendChild(pn);
        div2.appendChild(pr);

        div.appendChild(div2);
        
}

     item = document.createElement("div");
     item.className = "c-total";
     item.innerHTML = "TOTAL: $"+total;

     div.appendChild(item);


     function add(){

        if(cart[this.dataset.id] == undefined){
            cart[this.dataset.id] = 1;
        }
        else{cart[this.dataset.id]++;}

        cart.save();

    }
    
     function remove(){
        delete cart[this.dataset.id];
        cart.save();
    }
    let b = document.createElement("button");
    b.addEventListener("click", function(){

            

    })

