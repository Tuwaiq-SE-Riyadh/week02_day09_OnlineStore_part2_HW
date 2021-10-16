const pruducts = [
  {
    Name: "Mountain Morning",
    Price: 15,
    img: "images/pic2.jpg",
    id: 1,
  },
  {
    Name: "Wildwood",
    Price: 19,
    img: "images/pic3.jpg",
    id: 2,
  },
  {
    Name: "Love Moi",
    Price: 18,
    img: "images/pic4.jpg",
    id: 3,
  },
  {
    Name: "Peacock Transition I",
    Price: 15,
    img: "images/pic5.jpg",
    id: 4,
  },
  {
    Name: "Mountain Morning",
    Price: 15,
    img: "images/pic2.jpg",
    id: 5,
  },
  {
    Name: "Wildwood",
    Price: 19,
    img: "images/pic3.jpg",
    id: 6,
  },
  {
    Name: "Love Moi",
    Price: 18,
    img: "images/pic3.jpg",
    id: 7,
  },
  {
    Name: "Peacock Transition I",
    Price: 15,
    img: "images/pic5.jpg",
    id: 8,
  },
];

// add to cart by push object to localstorage
// function addToCart(value) {
//   for (let index = 0; index < pruducts.length; index++) {
//     if (value == pruducts[index].id) {
//       let id = pruducts[index].id;
//       if (JSON.parse(localStorage.getItem(`Item id ${index}`))) {
//         // let sn = localStorage.getItem(`Item id ${index}`)
//         // var arr = [];
//         // arr =JSON.parse(sn)
//         let arr$index = [];
//         arr$index.push(pruducts[index]);
//         // arr$index.push(arr)
//         alert("You added new item to cart");
//         localStorage.setItem(`Item id ${index}`, JSON.stringify(arr$index));
//       } else {
//         localStorage.setItem(
//           `Item id ${index}`,
//           JSON.stringify(pruducts[index])
//         );
//         alert("You added new item to cart: " + pruducts[index].Name);

//         // Total price
//         //         const totalPrice = []
//         //         const oldtotalPrice = []
//         //         if (JSON.parse(localStorage.getItem(`Total price`))){
//         //             const a = JSON.parse(localStorage.getItem(`Total price`))
//         //             console.log("a :" + a);
//         //             console.log("typeof(a) " + typeof(a));

//         // a.push(pruducts[index].Price)
//         // console.log("a :" + a);

//         //         // oldtotalPrice.push(a)
//         //         // totalPrice.push(oldtotalPrice)
//         //         // console.log(oldtotalPrice);

//         //         // totalPrice.push()
//         //         localStorage.setItem(
//         //             `Total price`,
//         //             JSON.stringify(a)
//         //           );
//         //           console.log("a :" + a);

//         //         }else
//         //         totalPrice.push(pruducts[index].Price)
//         //         localStorage.setItem(
//         //             `Total price`,
//         //             JSON.stringify(totalPrice)
//         //           );
//         //           //end
//       }
//     }
//   }
// }
let totalamount = 0;
// add to cart function
function addToCart(Name, price, image) {
  totalamount += price;
  const cart = [];
  let cart2 = [];
  let index = 0;
  // if there object in local storage
  if (localStorage.getItem("cart")) {
    //get item from LS and parse it the assighnt to cart2
    cart2 = JSON.parse(localStorage.getItem("cart"));
    cart2.push({
      Name: Name,
      Price: price,
      img: image,
    });
    //Set item to LS
    localStorage.setItem("cart", JSON.stringify(cart2));
    //slert that display total price
    alert("There is: " + totalamount + "$ in your cart");
    //if there no item in LS
  } else {
    cart.push({
      Name: "Mountain Morning",
      Price: 15,
      img: "images/pic2.jpg",
      id: 1,
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("There is: " + totalamount + "$ in your cart");
  }
}

//         }
// else if(index<9){
//         localStorage.setItem(
//             `Item id ${index}`,
//             JSON.stringify(pruducts[index])
//           );
//           localStorage.setItem(
//             `index `,
//             JSON.stringify(index)
//           );
//             }
//         }
//     }

//Display item in cart page
function displayItem() {
  let totalPrice = 0;
  const items = JSON.parse(localStorage.getItem("cart"));

  // for loop to cover all item
  for (let index = 0; index < items.length; index++) {
    // if there item in LS continue
    if (items) {
      // vairables for each key
      const name = items[index].Name;
      const price = items[index].Price;
      const img = items[index].img;

      totalPrice += price;
      console.log("totla price is: " + totalPrice);
      //select parents from html
      const parent = document.querySelector(".items");
      console.log(parent);
      //creat all elements
      let container = document.createElement("div");
      container.className = "row";
      let nameOfItem = document.createElement("h3");
      let priceOfItem = document.createElement("h3");
      let imgeOfItem = document.createElement("img");

      nameOfItem.innerText = "Name is:" + name;
      priceOfItem.innerText = "The price is : " + price + "$";
      imgeOfItem.src = img;
      //append
      container.append(imgeOfItem);
      container.append(nameOfItem);
      container.append(priceOfItem);
      parent.append(container);
    } //enf of if
  } //end of loop

  //declaration of element, id and class
  let container = document.createElement("div");
  container.className = "row";
  const parent = document.querySelector(".total-price");
  const displayPrice = document.createElement("h3");
  let VAT = document.createElement("h3");
  let VAT_and_price = document.createElement("h3");
  let VAT_and_price_DEP = document.createElement("h3");
  VAT_and_price_DEP.id = "#VAT-AND_PRICE_DEP";
  VAT_and_price_DEP.style.display="none"
  let displayPriceDEP = document.createElement("h3");
  displayPriceDEP.id = "#totalPriceDEP";
  displayPriceDEP.style.display="none"


  //assiging values
  VAT.innerText = 15 + "% VAT";
  VAT_and_price.innerText = 0.15 * totalPrice + totalPrice;
  VAT_and_price_DEP.innerText = 0.15 * totalPrice + totalPrice;
  displayPrice.innerText = totalPrice;
  displayPrice.id = "#totalPrice";
  VAT_and_price.id = "#totalPriceWithVAT";

  //append
  container.append(displayPrice);
  container.append(VAT_and_price_DEP);
  container.append(displayPriceDEP);
  container.append(VAT);
  container.append(VAT_and_price);
  parent.append(container);
  console.log("VAT_and_price_DEP: "+ VAT_and_price_DEP.textContent, displayPriceDEP.textContent);

}
displayItem();

//discount funcion
function discount() {
  const discount = document.getElementById("discount");
  console.log(discount.value);
  let price = document.getElementById("#totalPrice");
  let par = price.textContent;
  let TotalPrice = parseInt(par);
  console.log(TotalPrice);
  let priceAfterDis = TotalPrice;
  const coupons = ["ABC", "123"];
  for (let index = 0; index < coupons.length; index++) {
    console.log("coupons[index] == discount " + coupons[index] + discount);

    if (coupons[index] == discount.value) {
      priceAfterDis = TotalPrice - TotalPrice * 0.1;
    }
  }
  console.log(priceAfterDis);

  price.innerText = priceAfterDis;
}

function deliveryOptions() {
  let option = document.getElementById("d").value;
  console.log(option);
  let price = document.getElementById("#totalPrice");
  let VAT_and_price = document.getElementById("#totalPriceWithVAT");
  let VAT_and_price_DEP = document.getElementById("#VAT-AND_PRICE_DEP");

  let VAT = VAT_and_price.textContent;
  VAT_and_price_DEP = VAT_and_price_DEP.textContent;

  price = price.textContent;
  price = parseInt(price);
  let TotalPrice = price
  VAT = parseInt(VAT)
  VAT_and_price_DEP = parseInt(VAT_and_price_DEP)
  console.log("VAT_and_price_DEP",VAT_and_price_DEP);
  if (option == "Express Delivery" && VAT_and_price_DEP === VAT ) {
    console.log("inside" + TotalPrice);
    TotalPrice = TotalPrice + 10;
    VAT = VAT + 10;
  } else if (option == "Aramxs" && VAT_and_price_DEP === VAT) {
    TotalPrice += 5;
    VAT = VAT + 5;
  }

  price.innerText = TotalPrice;
  VAT_and_price.innerText = VAT;
}
// TESTING
// const pruduct = document.querySelector("#btn-cart");
// console.log(pruduct);
// console.log(pruduct.value);

// const obj = {
//   abs: 123,
//   abs2: 212,
// };
// const usersArray = ["John", "Jane"]
// console.log(obj);
// localStorage.setItem("item 1",JSON.stringify(obj));
// localStorage.setItem("user 1",JSON.stringify(usersArray));
// console.log(JSON.stringify(obj));
// console.log(obj);

function addToCatlouge(Name, image, Price) {
  //querySelector and create elements
  const parent = document.querySelector(".container");
  const div = document.createElement("div");
  const h1 = document.createElement("h1");
  const img = document.createElement("img");
  const p = document.createElement("p");
  const btn = document.createElement("button");

  div.className = "box black";
  h1.className = "title-item blue-clr";
  img.className = "card-img";
  btn.className = "button button1 end";
  btn.id = "btn-cart1";
  btn.onclick = function () {
    addToCart(Name, Price, image);
  };

  //Assighn
  h1.innerText = Name;
  img.src = image;
  p.innerText = "Price: " + Price + "#";
  btn.innerText = "Add to cart";

  div.append(h1);
  div.append(img);
  div.append(p);
  div.append(btn);
  parent.append(div);
  console.log(parent, h1, img, btn);
}

function adding() {
  for (let index = 0; index < pruducts.length; index++) {
    addToCatlouge(
      pruducts[index].Name,
      pruducts[index].img,
      pruducts[index].Price
    );
  }
}

adding();


function  confirm() {
  
  let generate=  Math.random().toString(36).substr(2, 4) + '-' + Math.random().toString(36).substr(2, 4) + '-' + Math.random().toString(36).substr(2, 4)

    alert(generate) 
  }
/* <div class="box black"> 
<h1 class="title-item blue-clr">Mountain Morning</h1> 
<img class="card-img" src="images/pic2.jpg" alt=" alt" style=" filter: grayscale(100%);">
<p class="desc-item">Why settle for blank walls, when you can transform them into stunning vista points. </p>
<p>Price: 15$</p>
<button id="btn-cart1" class="button button1 end"  onclick="addToCart('Mountain Morning',15,'images/pic2.jpg')" data-value3="Mountain Morning" data-value2="images/pic2.jpg" value="15"> Add to cart</button>
</div> */
