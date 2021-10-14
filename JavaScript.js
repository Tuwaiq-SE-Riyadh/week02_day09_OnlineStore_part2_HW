function addItem(id){
    let items = [
        { id:1,  name:"ROLEX Watches", price: 3000 },
        { id:2,  name:"VERSACE Eyeglasses", price: 2500},
        { id:3,  name:"NIKE Shirt",price: 100 },
        { id:4,  name:"Yeezy Shoes",price: 2000 },
        { id:5,  name:"ADIDAS hat", price: 300 },
        { id:6,  name:"TOMMY HILFIGER", price: 350},
        { id:7,  name:"Swarovski Necklace", price: 600 },
        { id:8,  name:"VERSACE Ring", price: 40 },
        { id:9,  name:"NIKE", price: 34},
        { id:10, name:"NIKE Shirt", price: 304},
        { id:11, name:"CALVIN KLEIN Belt", price: 1900},
        { id:12, name:"NIKE Bag", price: 450}];

    for(let i = 0 ; i < items.length ; i++){
        if(items[i].id == id){
         localStorage.setItem(localStorage.length, JSON.stringify(items[i]));
         break;}}

    let total = 0;
    for(let i = 0 ; i < localStorage.length ; i++){
        if(JSON.parse(localStorage.getItem(i)) === null){continue;} 
        let temp = JSON.parse(localStorage.getItem(i));
         total += temp.price;
    }
    setTotal2(total);
    setTotal3(total);
    localStorage.setItem("coupon" , "false");
    alert("Total price :"+total);}






// ----------------------------------------------------------------------------------





function setTotal2(total) {

    localStorage.setItem("total_1",total);
}





// ----------------------------------------------------------------------------------




function setTotal3(total) {

    localStorage.setItem("total_2",total);
}



// -----------------------------------------------------------------------------------


function cartPage(){




    if(localStorage.length == 0){
        let x = document.createElement("p");
        x.className = "p0"
        x.innerText = "Your cart is empty";
        document.querySelector("#empty").append(x);
        document.querySelector("#f0").innerHTML = "";
        document.querySelector("#f1").innerHTML = "";
        document.querySelector("#sub").innerHTML = "";
        return;}

        localStorage.setItem("coupon", "false");
        localStorage.setItem("total_2", localStorage.getItem("total_1"));

    for(let i = 0 ; i < localStorage.length ; i++){

        if(JSON.parse(localStorage.getItem(i)) === null){continue;} 

        let temp1 = document.createElement("p");
        temp1.className = "p0";
        temp1.innerText ="Product name: " +JSON.parse(localStorage.getItem(i)).name +
        "   |  Price : " + JSON.parse(localStorage.getItem(i)).price;
        temp1.style ="margin: 0%; font-size: 16pt; font-weight: bold;"

        let temp2 = document.createElement("hr");
        temp2.style="border: 8px solid #343a40;";
        document.querySelector("#cartDiv").append(temp1);
        document.querySelector("#cartDiv").append(temp2);
   
        }


    let total = getTotal();

    let temp1 = document.createElement("h3");
    temp1.className = "p0";
    temp1.innerText ="Total :"+ total;
    document.querySelector("#t").append(temp1);

    temp1 = document.createElement("h3");
    temp1.className = "p0";
    temp1.innerText ="After add VAT 15% :"+ (parseInt(total) * 0.15 + parseInt(total));
    document.querySelector("#t").append(temp1);

}




// ---------------------------------------------------------------------------------------------------




function coupon(){
    
    const coupon = ["Tameem15","A15","T15"];

    for(let i =0; i < coupon.length ; i++){

        if(document.querySelector("#c0").value == coupon[i])
        
        {   
            let total = localStorage.getItem("total_2");


            total = parseInt(total) - (parseInt(total) * 0.15);
            
            let temp12 = document.querySelector("#p_1");
            temp12.style.color="green";
            temp12.innerText ="Discounted 15%";

            if(localStorage.getItem("coupon") == "true"){return;}

            localStorage.setItem("total_2", total);
            localStorage.setItem("coupon","true");
            if(localStorage.getItem("delivery") == "true"){

                let x = document.querySelector("#s0").value;
                if(x == 1){total=parseInt(total)+8;}
                if(x == 2){total=parseInt(total)+12;}
                if(x == 3){total=parseInt(total)+18;}

            }
            setTotal(total);
            return;
        }
        
    }
            let temp1 = document.querySelector("#p_1");
            temp1.style.color="red";
            temp1.innerText ="The coupon is invalid !";

}




// --------------------------------------------------------------------------------------------






function setTotal(total) {


    let temp1 = document.createElement("h3");
    temp1.className = "p0";
    temp1.innerText ="Total :"+ total;
    document.querySelector("#t").innerHTML = "";
    document.querySelector("#t").append(temp1);
    
    temp1 = document.createElement("h3");
    temp1.className = "p0";
    temp1.innerText ="After add VAT 15% :"+ (parseInt(total) * 0.15+parseInt(total));
    document.querySelector("#t").append(temp1);
    localStorage.setItem("total",total);
    }




// ------------------------------------------------------------------------------------------------




function getTotal(total) {
   return localStorage.getItem("total_1",total);
}


// --------------------------------------------------------------------------------------------------

function delivery() {
    localStorage.setItem("delivery","true");

    let x = document.querySelector("#s0").value;
    let total = parseInt(localStorage.getItem("total_2"));
    if(x == 1){setTotal(total+8);}
    if(x == 2){setTotal(total+12);}
    if(x == 3){setTotal(total+18);}
}


// -------------------------------------------------------------------------------------------------
function order() {
    localStorage.clear();
    const L = ["A","B","C","D","E","F","G","H","I","G","K","L","M","N","Q","R","S","T","U","0","1","2","3","4","5","6","7","8","9"];
    let s = "";
    for(let i = 0 ; i < 12 ; i++){
        let x = Math.floor(Math.random() * L.length);
        s += L[x];}
    alert("Order Number #"+ s);

}