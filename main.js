function open1(){
    window.open("watches.html")
}

function openCart(){
    window.open("cart.html")
}

function openFootballs(){
    window.open("footballs.html")
}

function openCoffes(){
    window.open("coffes.html")
}

function openTea(){
    window.open("tea.html")
}

function test(){
  const  tst = document.querySelector("#del")
    console.log(tst.value);
}


let i = 0
function addToCart(item, price){
    i =i+1
    let total = 0 

    const items = [item,price]
    localStorage.setItem(i, JSON.stringify(items))
    

    // const users = localStorage.getItem(i)
    // console.log(JSON.parse(users)[1])
    

     for( j=0; j<localStorage.length ;j++){
        //  console.log(j);
         const userf = localStorage.key(j)
         
             
        console.log(JSON.parse(localStorage.getItem(userf))[1]);
        console.log(userf[0]);
        if (isNaN(userf[0])){
            console.log(userf[0]);
        }
        else{
            const parsUs = JSON.parse(localStorage.getItem(userf))[1];
            total = parseInt( total ) + parsUs
        }
}
alert("Your total is "+ total)

let total2 = total
localStorage.setItem("Total", JSON.stringify(total2))

// alert("Your total is "+ total)
//    total = parseInt( total )+ price
//     alert("The Current Total is " +total)
    
}

function clearCart(){
    window.localStorage.clear()
}