// part1
const arr = [
    {
        img: 'coffee1.png',
        name: 'ORIGIN COFFEE',
        price: 13.99,
        des: 'Brazil ceerrado dark ground single orign coffee',
        
    },
    
    {
        img: 'coffee1.png',
        name: 'ORIGIN COFFEE',
        price: 13.99,
        des: 'Brazil ceerrado dark ground single orign coffee',
        
    },
    
    
    {
        img: 'coffee2.png',
        name: 'COLOMBIA',
        price: 9.99,
        des: 'Colombia narino single origin mudiume roast coffee',
        
    },
    {
        img: 'coffee3.png',
        name: 'BALI',
        price: 19.99,
        des: 'Colombia narino single origin mudiume roast coffee',
    },
    {
        img: 'coffee4.png',
        name: 'COSTA RICA',
        price: 13.5,
        des: 'Costa rica la cascada tarrazu medium roast single origin coffee',
    },
    {
        img: 'coffee5.png',
        name: 'ESPRESSO',
        price: 15.99,
        des: 'Decaf espreso roast coffee',
    },
    {
        img: 'coffee6.png',
        name: 'HOUSE BLEND',
        price: 19.6,
        des: 'Decaf house blend coffee',
    },
    {
        img: 'coffee7.png',
        name: 'COLD BREW',
        price: 12.99,
        des: 'Cold brew corase ground coffee blend',
    },
    {
        img: 'coffee8.png',
        name: 'ETHIOPIA',
        price: 13.59,
        des: 'Ethiopia yirgacchffe light roast single coffee',
    },

];

console.log(arr)


const row1=document.querySelector("#row1")
for(let i=1;i<=4 ;i++){
    const div1=document.createElement("div")
    div1.className="column"

    const div2=document.createElement("div")
    div2.className="card"

    const img=document.createElement("img")
    img.src=arr[i].img;
    img.style.height="380px"
    

    const h2=document.createElement("h2")
    h2.id="h"+i
    h2.innerText=arr[i].name

    const p=document.createElement("p")
    p.className="price"
    p.id="price"+i
    p.innerText=arr[i].price;

    const p2=document.createElement("p")
    p2.innerText=arr[i].des


    const p3=document.createElement("p")

    const button1=document.createElement("button")
    button1.id="button"+i
    button1.innerText="Add to Cart"

    row1.append(div1)
    div1.append(div2)
    div2.append(img)
    div2.append(h2)
    div2.append(p)
    div2.append(p2)
    div2.append(p3)
    p3.append(button1)

}

const row2=document.querySelector("#row2")

for(let i=5;i<=arr.length-1 ;i++){
    const div1=document.createElement("div")
    div1.className="column"

    const div2=document.createElement("div")
    div2.className="card"

    const img=document.createElement("img")
    img.src=arr[i].img
    img.style.height="380px"
    

    const h2=document.createElement("h2")
    h2.id="h"+i
    h2.innerText=arr[i].name

    const p=document.createElement("p")
    p.className="price"
    p.id="price"+i
    p.innerText=arr[i].price;

    const p2=document.createElement("p")
    p2.innerText=arr[i].des


    const p3=document.createElement("p")

    const button1=document.createElement("button")
    button1.id="button"+i
    button1.innerText="Add to Cart"

    row2.append(div1)
    div1.append(div2)
    div2.append(img)
    div2.append(h2)
    div2.append(p)
    div2.append(p2)
    div2.append(p3)
    p3.append(button1)
}



// part 2 
let Total=0;



// localStorage.clear();
let c=1;

document.querySelector("#button1").addEventListener("click", function(e){

    const price=document.querySelector("#price1")
    const priceValue1=price.innerText
    const priceValue=parseFloat(priceValue1)
    const name=document.querySelector("#h1")
    const namepro=name.innerText
    const arr=[namepro,priceValue]
    localStorage.setItem("product"+(c++),JSON.stringify(arr))
     Total+=priceValue;
     alert("Your total naw : "+Total)
    
})

document.querySelector("#button2").addEventListener("click", function(e){


    const price=document.querySelector("#price2")
    const priceValue1=price.innerText
    const priceValue=parseFloat(priceValue1)
    const name=document.querySelector("#h2")
    const namepro=name.innerText
    const arr=[namepro,priceValue]
    localStorage.setItem("product"+(c++),JSON.stringify(arr))
     Total+=priceValue;
     alert("Your total naw : "+Total)
    
})

document.querySelector("#button3").addEventListener("click", function(e){

    const price=document.querySelector("#price3")
    const priceValue1=price.innerText
    const priceValue=parseFloat(priceValue1)
    const name=document.querySelector("#h3")
    const namepro=name.innerText
    const arr=[namepro,priceValue]
    localStorage.setItem("product"+(c++),JSON.stringify(arr))
     Total+=priceValue;
     alert("Your total naw : "+Total)
    
})

document.querySelector("#button4").addEventListener("click", function(e){


    const price=document.querySelector("#price4")
    const priceValue1=price.innerText
    const priceValue=parseFloat(priceValue1)
    const name=document.querySelector("#h4")
    const namepro=name.innerText
    const arr=[namepro,priceValue]
    localStorage.setItem("product"+(c++),JSON.stringify(arr))
     Total+=priceValue;
     alert("Your total naw : "+Total)
    
})


document.querySelector("#button5").addEventListener("click", function(e){

    const price=document.querySelector("#price5")
    const priceValue1=price.innerText
    const priceValue=parseFloat(priceValue1)
    const name=document.querySelector("#h5")
    const namepro=name.innerText
    const arr=[namepro,priceValue]
    localStorage.setItem("product"+(c++),JSON.stringify(arr))
     Total+=priceValue;
     alert("Your total naw : "+Total)
    
})

document.querySelector("#button6").addEventListener("click", function(e){

    const price=document.querySelector("#price6")
    const priceValue1=price.innerText
    const priceValue=parseFloat(priceValue1)
    const name=document.querySelector("#h5")
    const namepro=name.innerText
    const arr=[namepro,priceValue]
    localStorage.setItem("product"+(c++),JSON.stringify(arr))
     Total+=priceValue;
     alert("Your total naw : "+Total)
    
})

document.querySelector("#button7").addEventListener("click", function(e){

    const price=document.querySelector("#price7")
    const priceValue1=price.innerText
    const priceValue=parseFloat(priceValue1)
    const name=document.querySelector("#h7")
    const namepro=name.innerText
    const arr=[namepro,priceValue]
    localStorage.setItem("product"+(c++),JSON.stringify(arr))
     Total+=priceValue;
     alert("Your total naw : "+Total)
    
})

document.querySelector("#button8").addEventListener("click", function(e){

    const price=document.querySelector("#price8")
    const priceValue1=price.innerText
    const priceValue=parseFloat(priceValue1)
    const name=document.querySelector("#h7")
    const namepro=name.innerText
    const arr=[namepro,priceValue]
    localStorage.setItem("product"+(c++),JSON.stringify(arr))
     Total+=priceValue;
     alert("Your total naw : "+Total)
    
})
const row3=document.querySelector("#row3")
let i=9;
document.querySelector("#add").addEventListener("click", function(e){

// create an opj
 let input1=window.prompt("Enter img in with extention")
 let input2=window.prompt("Enter name of coffee")
 let input3=window.prompt("Enter price of coffee")
 let input4=window.prompt("Enter simplified description ")


 
  
    const item = {
      img: input1,
      name: input2,
      price:input3,
      des :input4
    }

  arr.push(item)

 

 const div1=document.createElement("div")
 div1.className="column"

 const div2=document.createElement("div")
 div2.className="card"

 const img=document.createElement("img")
 img.src=input1
 img.style.height="380px"
 

 const h2=document.createElement("h2")
 h2.id="h"+i
 h2.innerText=input2

 const p=document.createElement("p")
 p.className="price"
 p.id="price"+i
 p.innerText=input3

 const p2=document.createElement("p")
 p2.innerText=input4


 const p3=document.createElement("p")

 const button1=document.createElement("button")
 button1.id="button"+i
 button1.innerText="Add to Cart"

 row3.append(div1)
 div1.append(div2)
 div2.append(img)
 div2.append(h2)
 div2.append(p)
 div2.append(p2)
 div2.append(p3)
 p3.append(button1)
 i++

    
})










// console.log(localStorage.length)


