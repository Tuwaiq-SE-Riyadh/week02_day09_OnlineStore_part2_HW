
document.addEventListener("DOMContentLoaded", function() {    

    const item1 = document.querySelector(".items")
   for (let i = 0; i < localStorage.length; i++) {
      const Br = document.createElement("br")
      Br.id = i

         const userf = localStorage.key(i)  
         if (isNaN(userf[0])){
            console.log(userf[0]);
        }
        else{
            const parsUs = JSON.parse(localStorage.getItem(userf))[1];
            total = parseInt( total ) + parsUs
            console.log(JSON.parse(localStorage.getItem(userf))[1]);
            // const parsUs = JSON.parse(localStorage.getItem(userf))[1];
         const creItem = document.createElement("label")
         creItem.id = i
         creItem.innerHTML = JSON.parse(localStorage.getItem(userf))+"$"
         item1.append(creItem)
         creItem.append(Br)
        }
        
   }

const creItem = document.createElement("label")
creItem.id = "Total" 
const lab = document.querySelector("#total")
      creItem.innerHTML = localStorage.getItem('Total')+"  $"
      lab.append(creItem)
   
 });
 const discountCoupons = {
   'tttt': 0.2,
   'aaaa': 0.15,
   'cccc': 0.1
}
 function disc(){
    const coup = document.querySelector("#copon")
   // console.log(coup.value); 
   for (const key in discountCoupons) {
      if(key === coup.value)

      localStorage.setItem("Total",JSON.stringify(JSON.parse(localStorage.getItem("Total")-(discountCoupons[key]*JSON.parse(localStorage.getItem("Total"))))));
  }
  
  
   // console.log(discountCoupons);
   // console.log(JSON.parse(localStorage.getItem("Total")));
}

function confirmDel(){
   const delcomp = document.querySelector("#del")
   // console.log(delcomp.value);
   const finalPrice = parseInt(localStorage.getItem('Total')) + parseInt(delcomp.value)
   localStorage.setItem("Total",finalPrice)
   // console.log(finalPrice);
   
   const btndel = document.querySelector("form")
   const creItem = document.createElement("h1")
   creItem.innerHTML = "Your Fainal total is " + localStorage.getItem('Total')
   btndel.append(creItem)
}


// const creItem = document.createElement("label")
// creItem.id = "Total" 
// const lab = document.querySelector("#total")
//       creItem.innerHTML = total+"$"
//       lab.append(creItem)


function lastButton(){
   const rand = +Math.floor(Math.random() * 1000000) + 1000001
   alert("Your Order was Successful and your Order Number is " + rand)
}