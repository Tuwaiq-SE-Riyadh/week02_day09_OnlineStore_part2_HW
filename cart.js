// Shopping Cart -------------------------------
//products array to simulate DB
const products=[
    {
        'productId':1,
        'title':'product 1',
        'description':'some data',
        'price':100,
    },
        {
        'productId':2,
        'title':'product 2',
        'description':'some data',
        'price':200,
    },
    {
        'productId':3,
        'title':'product 3',
        'description':'some data',
        'price':300,
    },
    {
        'productId':4,
        'title':'product 4',
        'description':'some data',
        'price':400,
    },
    {
        'productId':5,
        'title':'product 5',
        'description':'some data',
        'price':400,
    },
    {
        'productId':6,
        'title':'product 6',
        'description':'some data',
        'price':500,
    },
]
const addToCartButtons=document.querySelectorAll('.addToCart');
addToCartButtons.forEach(btn=>{
    btn.addEventListener('click',function(e){
        e.preventDefault();
        let product=e.currentTarget.parentNode;
        saveProduct(product);
    });
})
function saveProduct(product){
    let productId=product.querySelector('.product-number').dataset.id;
    let price;
    products.forEach(el=>{
        if(el.productId==productId){
            price=el.price;
        }
    });
    // add in localStorage {productId,count,priceOfStock}
    //check if product is already exists, then increase its count
    let storedProducts=localStorage.getItem('products');
    if(storedProducts){
        storedProducts=JSON.parse(storedProducts);
        let isExists=false;
        for(let i=0;i<storedProducts.length;i++){
            if(storedProducts[i].productId == productId) {
                //increase count
                let currentProduct=storedProducts[i];
                //delete item
                storedProducts.splice(i,1);
                //store item with new count
                storedProducts.push({'productId':currentProduct.productId,'count':(currentProduct.count+1),'priceOfStock':currentProduct.priceOfStock});
                localStorage.setItem('products',JSON.stringify(storedProducts));
                isExists=true;
                break
            }
        }
        //check if count updated
        if(!isExists){
            //add product to localStorage
            storedProducts.push({'productId':productId,'count':1,'priceOfStock':price});
            localStorage.setItem('products',JSON.stringify(storedProducts));

        }
    }else{
        //no products saved before
        storedProducts=[];
        storedProducts.push({'productId':productId,'count':1,'priceOfStock':price});
        localStorage.setItem('products',JSON.stringify(storedProducts));
    }
    // alert with new price
    alert("Your current total price is:"+calculateNewPrice());
    updateCartIcon();
}

function calculateNewPrice(){
    let storedProducts=localStorage.getItem('products');
    let price=0;
    if(storedProducts){
        storedProducts=JSON.parse(storedProducts);
        storedProducts.forEach(pr=>{
            price+=(pr.count*pr.priceOfStock);
        });
    }
    //check if coupon applied
    let coupon=localStorage.getItem('couponApplied');
    if(coupon){
        price=price-(price*0.1);
    }
    localStorage.setItem('price',price);

    return price;
}
function updateCartIcon(){
    let storedProducts=localStorage.getItem('products');
    let count=0;
    if(storedProducts){
        storedProducts=JSON.parse(storedProducts);
        storedProducts.forEach(pr=>{
            count+=pr.count;
        });
    }
    //set count in icon
    localStorage.setItem('productCount',count);
    document.getElementById('numberOfProducts').innerHTML=count
}
(function(){
    //set count of products
    let count=localStorage.getItem('productCount');
    document.getElementById('numberOfProducts').innerHTML=count
})();

