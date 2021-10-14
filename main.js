let total = 0
let localName =""
let buttDiscount = document.querySelector("#buttDiscount")
let buttDelivery = document.querySelector("#buttDelivery")
let totalPrice = document.querySelector("#totalPrice")
let cartItems = document.querySelector("#cartItems")
let op1 = document.querySelector("#op1").value
let op2 = document.querySelector("#op2").value
let op3 = document.querySelector("#op3").value
let a = localStorage.localName.split("  ")
buttoConfirmOrder = document.querySelector("#buttoConfirmOrder")
function item1(){
    let p1 =document.querySelector("#p1").innerHTML
    total = total + parseInt(p1)
    alert("total is : "+total)
    let name1=document.querySelector(".cardName1")
    localName =localName + name1.innerHTML + "  "
    localStorage.total=Number(total)
    localStorage.localName=localName+" "
    
}    

function item2(){
    let p2 =document.querySelector("#p2").innerHTML
    total = total + parseInt(p2)
    alert("total is : "+total)
    let name2=document.querySelector(".cardName2")
    localName =localName + name2.innerHTML + "  "
    localStorage.total=Number(total)
    localStorage.localName=localName +" "
   
}    

function item3(){
    let p3 =document.querySelector("#p3").innerHTML
    total = total + parseInt(p3)
    alert("total is : "+total)
    let name3=document.querySelector(".cardName3")
    localName =localName + name3.innerHTML + "  "
    localStorage.total=Number(total)
    localStorage.localName=localName+" "
}    

function item4(){
    let p4 =document.querySelector("#p4").innerHTML
    total = total + parseInt(p4)
    alert("total is : "+total)
    let name4=document.querySelector(".cardName4")
    localName =localName + name4.innerHTML + "  "
    localStorage.total=Number(total)
    localStorage.localName=localName+" "
}    

function item5(){
    let p5 =document.querySelector("#p5").innerHTML
    total = total + parseInt(p5)
    alert("total is : "+total)
    let name5=document.querySelector(".cardName5")
    localName =localName + name5.innerHTML + "  "
    localStorage.total=Number(total)
    localStorage.localName=localName+ " "
}    

//display the total in cart page
totalPrice.innerHTML="total is: "+localStorage.total

//display the items that added to cart 
for(let i=0;i<a.length;i++){
    let divCart = document.querySelector("#cart")
    let h1 = document.createElement("h1")
    if(a[i]==" "){}
    else{
    h1.innerHTML ="item "+ (i+1) + ": "+ a[i]
    divCart.appendChild(h1)
    }
}
//discount coupons
buttDiscount.addEventListener('click',function(){
    let inputDiscount = document.querySelector("#inputDiscount").value

    //if coupon is correct totel - 50
    if(inputDiscount==="free"){
        //if total = 0 
        if(parseInt(localStorage.total)<=0){
            alert("cant use it total is 0 or less than 0")
        }
        else{
        localStorage.total = localStorage.total - 50
        totalPrice.innerHTML="total is: "+localStorage.total
        alert("Discount 50 SAR")
        //make the button hidden after the user put the coupon and got the discount
        buttDiscount.style.display = "none"
        }
        
    }

    //else alert not a correct coupon
    else {
        alert("not a correct coupon")
    }
})

//button of Delivery Options
buttDelivery.addEventListener('click',function(){
    let selcetedOption=document.querySelector("#selcetedOption").value
    //if select == option 1
    if(selcetedOption==op1){
        localStorage.total = parseInt(localStorage.total) + parseInt(op1)
        totalPrice.innerHTML="total is: "+localStorage.total
        alert("Your Choice is Standard Shipping")
    }
    // if select == option 2
    else if(selcetedOption==op2){
        localStorage.total = parseInt(localStorage.total) + parseInt(op2)
        totalPrice.innerHTML="total is: "+localStorage.total
        alert("Your Choice is Priority Shipping")
    }
    //if select == option 3 
    else if(selcetedOption==op3){
        localStorage.total = parseInt(localStorage.total) + parseInt(op3)
        totalPrice.innerHTML="total is: "+localStorage.total
        alert("Your Choice is Express Shipping")
        
    }
    //make the button hidden after the user choice the Delivery Options
    buttDelivery.style.display = "none"
})


// button of Confirm Order
buttoConfirmOrder.addEventListener('click',function(){
    //random numer between 1 and 100
    alert("Your Order is confirm\n order number: "+Math.floor(Math.random() * 100))
})