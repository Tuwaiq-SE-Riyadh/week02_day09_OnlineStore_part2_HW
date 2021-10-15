
var coupon = 0;
var totalPrice = parseInt(document.getElementById("t-price").innerText);
if(!localStorage.getItem("generate"))
	localStorage.setItem("generate", 0);

function AddToCart(item, price){

	var objItem = localStorage.getItem(item)
	var currentItem = 1;

	if(objItem){
		jsonItem = JSON.parse(objItem);
		currentItem = jsonItem.count + 1;
		jsonItem = {item_name: item, count: currentItem, item_price: price };
		localStorage.removeItem(item);
	}
	else{
		jsonItem = {item_name: item, count: 1, item_price: price };
	}
	
	update_store(item, JSON.stringify(jsonItem));

	alert(currentItem+" "+item+" added, Total: "+ (localStorage.length-1)+".");
}


function update_store(key, item){
	//use local storage
	localStorage.setItem(key, item);
}

function clearCart(){
	var generate = localStorage.getItem("localStorage");
	localStorage.clear();
	localStorage.setItem("generate", generate);
	alert("The cart has been emptied");
	location.reload();
}

function applyCoupon(){
	if(coupon == 0){
		var totalPriceSpan = document.getElementById("t-price");
		totalPrice = totalPrice - ((totalPrice * 5 ) / 100);
		totalPriceSpan.innerText = totalPrice;
		coupon = 1;
		changeOption();
		alert("Coupon applied successfully.");
	}
	else{
		alert("The coupon has already been applied.");
	}
}

function changeOption(){
	var deliveryOption = document.getElementById("delivery-option");
	var totalPriceSpan = document.getElementById("t-price");

	if(deliveryOption.selectedIndex == 1)
		totalPriceSpan.innerText = totalPrice + ((totalPrice * 5 ) / 100);
	if(deliveryOption.selectedIndex == 2)
		totalPriceSpan.innerText = totalPrice + ((totalPrice * 10 ) / 100);
	if(deliveryOption.selectedIndex == 3)
		totalPriceSpan.innerText = totalPrice + ((totalPrice * 20 ) / 100);
}

function confirmOrder(){
	
	// var generate = parseInt(localStorage.getItem("generate"));
	localStorage.clear();
	// localStorage.setItem("generate", generate+1);
	alert("Your order has been successfully confirmed, Reference Number: "+(Math.ceil(Math.random()*100000)));
	location.reload();
}
