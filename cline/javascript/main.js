
/*

const add = document.querySelector('#add')

add.addEventListener("click", function (e) {

   e.preventDefault()
   /*  let prise = document.querySelector(add)
    alert(" current total is ! : " + add)

    console.log("ksk")
    
})
*/
/*
let total =0

  document.querySelectorAll('.box3').forEach(item => {
    item.addEventListener('click', event => {

 
      console.log(item)

      let prise = (item.querySelector('#cost').innerHTML)
      total = total + prise.v

      console.log(prise)

    })
  })
*//*
document.querySelectorAll('.add').forEach(item => {
    item.addEventListener('click', event => {

 
      console.log(item)

      let prise = item.querySelector('.box')


      console.log(prise)

    })
  })*/


let allProduct = []
let i = -1

function Add(nameBox){


    let box = document.querySelector(nameBox)

    let image = box.querySelector('img')
        image = image.src
    let price = box.querySelector('p').innerHTML
    let name = box.querySelector('h3').innerHTML
  
  
    console.log(image)
    console.log(price)
    console.log(name)


    
    const product = {
        image: image,
        price: price,
        name: name,
    }

    allProduct.push(product)

    i = ++i
    localStorage.setItem(i,JSON.stringify(allProduct));
   

    console.log(allProduct)

    total(product)


    
  
//   let userData = document.querySelector('.Box1 img')
//   let acctData = document.querySelector('.Box1 p')
//     let formData = {
//       username: userData,
//       account: acctData
//     }; // create JS object
//     console.log(JSON.stringify(formData))
  /*  
   // all = [box]
   // استخم push 

   var html = box.outerHTML;       
//  This gives you a JSON object that you can send with jQuery.ajax's `data`
// option, you can rename the property to whatever you want.
var data = { html: html }; 

//  This gives you a string in JSON syntax of the object above that you can 
// send with XMLHttpRequest

var json = JSON.stringify(data);
let test = JSON.parse(json)


    console.log(box)
    console.log(test)
*/

}

let sum = 0
let j = 0
function total(product) {


    sum = sum + Number(product.price)
    alert("current total is : " + (sum).toFixed(2))
    
} 

window.onload = function shopping() {


        let shopp = document.querySelector('#shopp')
       


        for (let j = 0; j < localStorage.length ; j++) {
     
            let items = JSON.parse(window.localStorage.getItem(j))

            // console.log(" item : " + j + " info is : ")
            // console.log(test[j].name)
            // console.log(test[j].parse)
            // console.log(test[j].image)

            let div = document.createElement('div')
            div.className = "box"
            div.style.width = "300px"
            shopp.append(div)

            const img = document.createElement('img')
            const name = document.createElement('p')
            const parse = document.createElement('h4')
            img.src = items[j].image
            img.style.width = "200px"
            name.innerHTML =  items[j].name
            parse.innerHTML = items[j].price
            div.append(img)
            div.append(name)
            div.append(parse)

        }


      allInformtion()
     
    }


    function allInformtion() {
        

        let shopp = document.querySelector('#shopp')
        let div = document.createElement('div')
        div.className = "box"
        div.id = "box0"
        shopp.append(div)

//--------------------------------------discount coupons-------------------------------------

        let form = document.createElement('form')
        let label = document.createElement('label')
        let input = document.createElement('input')
        // let submit = document.createElement('input')

        label.innerHTML = "discount coupons"
        // submit.type = "submit"
        // submit.value = "Check Discount"
        input.type = "text"
        input.id = "Discount"
        input.style.width = "200px"

        div.append(form)
        form.append(label)
        form.append(input)
        // form.append(submit)


//--------------------------------------Choose a -------------------------------------

        let lable1 = document.createElement('lable')
        let select1 = document.createElement('select')
        let option1 = document.createElement('option')
        let option2 = document.createElement('option')

        lable1.innerHTML = "Choose a : "
        option1.innerHTML = "collection"
        option2.innerHTML = "delivery"
        div.append(lable1)
        div.append(select1)
        select1.append(option1)
        select1.append(option2)

//--------------------------------------Choose a delivery-------------------------------------

        let lable2 = document.createElement('lable')
        let choose = document.createElement('option')        
        let selectAA = document.createElement('select')
        let optionA = document.createElement('option')
        let optionB = document.createElement('option')
        let optionC = document.createElement('option')
        let optionD = document.createElement('option')

        selectAA.id = "option"
        lable2.style.display = "inline-block"
        lable2.innerHTML = "Choose a delivery : "
        choose.innerHTML = "Please choose an option"
        optionA.innerHTML = "DHL $10"
        optionA.value = "10"
        optionB.innerHTML = "UPS $15"
        optionB.value = "15"
        optionC.innerHTML = "aramex $20"
        optionC.value = "20"
        optionD.innerHTML = "FedEx $25"
        optionD.value = "25"
        //optionA.onclick = "delivery()"
    
        

        div.append(lable2)
        div.append(selectAA)
        selectAA.append(choose)
        selectAA.append(optionA)
        selectAA.append(optionB)
        selectAA.append(optionC)
        selectAA.append(optionD)

        console.log(optionA)


//--------------------------------------total Price-------------------------------------

    let totalP = 0

    for (let j = 0; j < localStorage.length ; j++) {
        
        let items = JSON.parse(window.localStorage.getItem(j))
        totalP = Number(items[j].price) + totalP  
    }
    console.log(totalP)

        let totalall = document.createElement('h3')
        let totalVAT = document.createElement('h3')
        let itemsPrice = document.createElement('h3')

        itemsPrice.innerHTML = "items Price : " + totalP.toFixed(2)       
        totalVAT.innerHTML = "VAT : "  + (((totalP*15) /100).toFixed(2))
        

        div.append(itemsPrice)
        div.append(totalVAT)
        


        
        let deliveryPrise = 0 
        let ok = document.querySelector('#option')
        ok.addEventListener("change", function () {
/*
            let options = ok.querySelector("option");*/
            deliveryPrise = ok.options[ok.selectedIndex].value;


            alert(" Discount " + (Discount.value == "ccc"))
            if(Discount.value == "ccc"){

            totalall.innerHTML = "total Price : " + (( (  totalP + ((totalP*15) /100)) + Number(deliveryPrise) - 20 ).toFixed(2)) 
            div.append(totalall)

            conﬁrmOrder()
            }
            else{
                totalall.innerHTML = "total Price : " + (((  totalP + ((totalP*15) /100)) + Number(deliveryPrise) ).toFixed(2)) 
                div.append(totalall)

                conﬁrmOrder()
            }
            
        })

      

       // conﬁrmOrder()
    }

    function conﬁrmOrder() {
    
     let box = document.querySelector('#box0')
     console.log(box)
     let sub = document.createElement('button')
     sub.innerHTML = "conﬁrm order"
     box.append(sub)

     sub.onclick = function(){
       
        alert(" Order successful " + "\r\n" + "reference number :" + Math.floor(Math.random() * 1000000))
        
        return false;
      };

       
    }
