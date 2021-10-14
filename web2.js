
let Total=0;

const continer=document.querySelector("#am")

for(let i=1;i<localStorage.length;i++){
let g=localStorage.getItem("product"+i)
const p=document.createElement("p")
const a=document.createElement("a")
a.href="#"
a.innerText=JSON.parse(g)[0]
let sp=document.createElement("span")
sp.className="price";
sp.innerText=JSON.parse(g)[1]
Total=Total+parseFloat(JSON.parse(g)[1])
continer.append(p)
p.append(a)
p.append(sp)
console.log(Total)
}

let pp=document.createElement("p")
pp.innerText="Total with VAT 15%"
let spsp=document.createElement("span")
spsp.className="price";
spsp.style.color.bold;
spsp.style.color="black"
Total=Total+(Total*0.15)
spsp.innerText=Total;
continer.append(pp)
pp.append(spsp)
const continer2=document.querySelector("#am2")






document.querySelector("#bb").addEventListener("click", function(e){
    let p3=document.createElement("p")
    p3.innerText="Total after discount "
    let sp3=document.createElement("span")
    sp3.className="price";
    sp3.style.color="black"
    Total=Total-(Total*0.10)
    sp3.innerText=Total;
    continer2.append(p3)
    p3.append(sp3)

})
//collection way - 5%
document.querySelector("#r1").addEventListener("click", function(e){
    let p4=document.createElement("p")
    p4.innerText="collection way -5%"
    let sp4=document.createElement("span")
    sp4.className="price";
    sp4.style.color="black"
    sp4.innerText=Total-(Total*0.05)
    continer2.append(p4)
    p4.append(sp4)
   
})
// delevry way +10%
document.querySelector("#r2").addEventListener("click", function(e){

    let p4=document.createElement("p")
    p4.innerText="delevary way +5%"
    let sp4=document.createElement("span")
    sp4.className="price";
    sp4.style.color="black"
    sp4.innerText=Total+(Total*0.10)
    continer2.append(p4)
    p4.append(sp4)
   
 })

 document.querySelector("#b3").addEventListener("click", function(e){

let ref=Math.floor(Math.random() * 10)+""+ Math.floor(Math.random() * 10) +""+Math.floor(Math.random() * 10) +""+Math.floor(Math.random() * 10) 
   alert("Your order successful ,  reference number:"+ref)
   
 })

 
 






