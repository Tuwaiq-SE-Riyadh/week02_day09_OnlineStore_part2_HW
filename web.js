let Total=0;



// localStorage.clear();
let c=1;

document.querySelector("#button1").addEventListener("click", function(e){

    const price=document.querySelector("#price1")
    const priceValue1=price.innerText
    const priceValue=parseFloat(priceValue1)
    localStorage.setItem("product"+(c++),priceValue)
     Total+=priceValue;
     alert("Your total naw : "+Total)
    
})

document.querySelector("#button2").addEventListener("click", function(e){

    const price=document.querySelector("#price2")
    const priceValue1=price.innerText
    const priceValue=parseFloat(priceValue1)
    localStorage.setItem("product"+(c++),priceValue)
     Total+=priceValue;
     alert("Your total naw : "+Total)
    
})

document.querySelector("#button3").addEventListener("click", function(e){

    const price=document.querySelector("#price3")
    const priceValue1=price.innerText
    const priceValue=parseFloat(priceValue1)
    localStorage.setItem("product"+(c++),priceValue)
     Total+=priceValue;
     alert("Your total naw : "+Total)
    
})

document.querySelector("#button4").addEventListener("click", function(e){

    const price=document.querySelector("#price4")
    const priceValue1=price.innerText
    const priceValue=parseFloat(priceValue1)
    localStorage.setItem("product"+(c++),priceValue)
     Total+=priceValue;
     alert("Your total naw : "+Total)
    
})


document.querySelector("#button5").addEventListener("click", function(e){

    const price=document.querySelector("#price5")
    const priceValue1=price.innerText
    const priceValue=parseFloat(priceValue1)
    localStorage.setItem("product"+(c++),priceValue)
     Total+=priceValue;
     alert("Your total naw : "+Total)
    
})

document.querySelector("#button6").addEventListener("click", function(e){

    const price=document.querySelector("#price6")
    const priceValue1=price.innerText
    const priceValue=parseFloat(priceValue1)
    localStorage.setItem("product"+(c++),priceValue)
     Total+=priceValue;
     alert("Your total naw : "+Total)
    
})

document.querySelector("#button7").addEventListener("click", function(e){

    const price=document.querySelector("#price7")
    const priceValue1=price.innerText
    const priceValue=parseFloat(priceValue1)
    localStorage.setItem("product"+(c++),priceValue)
     Total+=priceValue;
     alert("Your total naw : "+Total)
    
})

document.querySelector("#button8").addEventListener("click", function(e){

    const price=document.querySelector("#price8")
    const priceValue1=price.innerText
    const priceValue=parseFloat(priceValue1)
    localStorage.setItem("product"+(c++),priceValue)
     Total+=priceValue;
     alert("Your total naw : "+Total)
    
})










console.log(localStorage.length)


