
const items = [
  {
   itemName: 'Android Phone',
    price: 400,
  },
  {
    itemName: "Watch",
    price: 100,
  },
  {
    itemName: "Apple pie",
    price: 20,
  },
  {
    itemName: "Iphone",
    price: 1000,
  },
  {
    itemName: "Perfume",
    price: 50,
  },
  {
    itemName: "Ice cream",
    price: 12,
  },
];


/*class Products  {
  constructor(itemName, price) {
    
    this.itemName = itemName;
    this.price=price;
  }

  greeting() {
    console.log(`Hi! I'm ${this.name.first}`);
  };

  farewell() {
    console.log(`${this.name.first} has left the building. Bye for now!`);
  };

   addRow() {
    let table = document.getElementById("myTable");
    let row = table.insertRow(1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    cell1.innerHTML = "j";
    cell2.innerHTML = "5";
    cell3.innerHTML = "k";
    return "h"
}

}*/
shoppingCart=['hehe']
let total=0




//window.localStorage.setItem('cart', JSON.stringify(shoppingCart));
// was not sure how to coneect multipe buttons to one action listner but found help at https://flaviocopes.com/how-to-add-event-listener-multiple-elements-javascript/
//I add the name of the class and it worked with all the buttons. 
//document.querySelectorAll('.card-body').forEach(item => {
   // item.addEventListener('click', event => {
     // alert("The total price is :")
    //})
  //})

  
  
  function addRow( a=shoppingCart[0]) {
  
    let table = document.getElementById("myTable");
    let row = table.insertRow(1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    cell1.innerHTML = a
    cell2.innerHTML = "1" 
    cell3.innerHTML = "h"
    
  }
  
  
/*const Item1 = new Products("Android Phone", 400)
const Item2 = new Products("Watch", 100)
const Item3 = new Products("Apple pie", 20)
const Item4 = new Products("Iphone", 1000)
const Item5 = new Products("Perfume", 50)
const Item6 = new Products("Ice cream", 12)
*/

let btn1=document.getElementsByClassName('btn btn-primary')[0]
let btn2=document.getElementsByClassName('btn btn-primary')[1]
let btn3=document.getElementsByClassName('btn btn-primary')[2]
let btn4=document.getElementsByClassName('btn btn-primary')[3]
let btn5=document.getElementsByClassName('btn btn-primary')[4]
let btn6=document.getElementsByClassName('btn btn-primary')[5]



  function ar(){
  window.localStorage.setItem('thing', JSON.stringify(shoppingCart));
   r= JSON.parse(window.localStorage.getItem('thing'));
   return r[0].itemName
   
  }
  
  
  
  btn1.addEventListener('click', event =>  {
    total= total + items[0].price
        alert("The total: "+ total)
        shoppingCart.push(items[0].itemName)
        
        
  });

    btn2.addEventListener('click', event => {
      total= total + items[1].price
      alert("The total: "+ total)
      shoppingCart.push(items[1])
      
      
      
  })

    btn3.addEventListener('click', event => {
      total= total + items[2].price
      alert("The total: "+ total)
      shoppingCart.push(items[2])
      
  })

  btn4.addEventListener('click', event => {
    total= total + items[3].price
    alert("The total: "+ total)
    shoppingCart.push(items[3])
    
})
  
btn5.addEventListener('click', event => {
  total= total + items[4].price 
  alert("The total: "+ total)
  shoppingCart.push(items[4])
  
})

btn6.addEventListener('click', event => {
  total= total + items[5].price 
  alert("The total: "+ total)
  shoppingCart.push(items[5])
  
})


//btn1.addEventListener('click', function() {
  //total= total + items[0].price
    //  alert("The total: "+ total)
      //shoppingCart.push(items[0])
      
//});




  