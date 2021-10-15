
// Create a new html page for the cart section which allows the user to see what is in their cart, each item’s price, and the total cost (remember to add VAT!).

    // getItmesFromLocalStorage
        let alldata = localStorage.getItem('index')
        let afterParse = JSON.parse(alldata)

        console.log(afterParse)

        for(let i = 0 ; i <= afterParse.length-1 ;i++ )
        {
            appendElemnt(afterParse[i][0]['ItmeName'], afterParse[i][1]['price'], afterParse[i][2]['image'])
        }

        
function appendElemnt(ItmeName,price,image)
{
    const tbodyTag = document.querySelector('tbody')

    const TrTag = document.createElement("tr")
    tbodyTag.append(TrTag);

    const image_td = document.createElement("td")
    const name_td = document.createElement("td")
            name_td.classList.add("text-center")
    const price_td = document.createElement("td")
            price_td.classList.add("text-center")

    const imageElement = document.createElement("img");
            imageElement.classList.add("bg-light")
            imageElement.classList.add("rounded")
            imageElement.classList.add("mx-auto")
            imageElement.classList.add("d-block")
            imageElement.style.width="50px"
            imageElement.style.height="50px"
        image_td.append(imageElement);


        imageElement.src=image;
        name_td.innerHTML=ItmeName;
        price_td.innerHTML=price;

        TrTag.append(image_td)
        TrTag.append(name_td)
        TrTag.append(price_td)

}

         // The total cost (remember to add VAT!).
         // Create a form which allows for “discount coupons”.

//  #####################  Get total Price  & set the total price to local storage (totalPrice)#####################
    set_and_caluculateTotalPrice();

    // Create forms to allow a user to select “collection” or “delivery”.
    selectCollectionOrDelivery()

    // Create forms for different delivery options.
    let valueOfDelivery =  selectDifferentDeliveryOptions()

    //  #####################  Show Price Before VAT #####################
    showTotalPriceBeforeVAT(valueOfDelivery);

//  ##################### set & Show VAT #####################
    setVAT(valueOfDelivery)

    showVAT(); 

//  #####################  Discount coupons #####################
    discountCoupons()
//  #####################  Show Price After VAT #####################
    showTotalPriceAfterVAT();
//  #####################  check For Coupons #####################
checkForCoupons()











    function setVAT(valueOfDelivery)
    {
        let pr = localStorage.getItem("totalPrice")
        let pr_after_parse = JSON.parse(pr) 

        let value_of_vat = (pr_after_parse + valueOfDelivery) * 0.15
        localStorage.setItem("VAT",value_of_vat);
        return value_of_vat;
    }








    function set_and_caluculateTotalPrice()
    {
        // get the totalPraice
        let alldata = localStorage.getItem('index')
        let afterParse = JSON.parse(alldata)

        // see the length of array data on the localStorage
            // console.log(afterParse.length)
            // console.log(afterParse)

        // calculate total
        let total = 0 ;
        for(let i = 0 ; i <= afterParse.length-1 ;i++ )
        {
            total += afterParse[i][1]['price'];
        }

        localStorage.setItem("totalPrice" , total)
        
    }

    function selectCollectionOrDelivery()
    {
        const tbodyTag = document.querySelector('tbody')

        const brbrbr = document.createElement("br")
        tbodyTag.append(brbrbr);
    
        const TrTag = document.createElement("tr")
        tbodyTag.append(TrTag);
    
        const CollectionOrDelivery_td_paragraf = document.createElement("td")
                CollectionOrDelivery_td_paragraf.innerHTML="Select Delivery or Collection"
                CollectionOrDelivery_td_paragraf.classList.add("text-center")


        const CollectionOrDelivery_td_value = document.createElement("td")
                const selectTag = document.createElement("select")
                        selectTag.setAttribute("onchange","setCollectionOrDeliveryOnLocalStorage(this)")
                                CollectionOrDelivery_td_value.append(selectTag)
                                    const op1 = document.createElement("option")
                                            op1.innerHTML="delivery"
                                            op1.value="delivery"
                                    const op2 = document.createElement("option")
                                            op2.innerHTML="collection"
                                            op2.value="collection"

                                    selectTag.append(op1)
                                    selectTag.append(op2)


        const CollectionOrDelivery_td_selected = document.createElement("td")
                CollectionOrDelivery_td_selected.setAttribute("id","C_or_D")
                CollectionOrDelivery_td_selected.classList.add("text-center")
                let getCollectionOrDelivery_From_LocalStorage = localStorage.getItem('CollectionOrDelivery')
                CollectionOrDelivery_td_selected.innerHTML=getCollectionOrDelivery_From_LocalStorage



    
        TrTag.append(CollectionOrDelivery_td_paragraf)
        TrTag.append(CollectionOrDelivery_td_value)
        TrTag.append(CollectionOrDelivery_td_selected)
    }


    function selectDifferentDeliveryOptions()
    {
        const tbodyTag = document.querySelector('tbody')

    
        const TrTag = document.createElement("tr")
            tbodyTag.append(TrTag);
    
        const Delivery_td_paragraf = document.createElement("td")
                Delivery_td_paragraf.innerHTML="selectDifferentDeliveryOptions"
                Delivery_td_paragraf.classList.add("text-center")


        const Delivery_td_value = document.createElement("td")
                const selectTag = document.createElement("select")
                            selectTag.setAttribute("id","DeliveryOptions")
                            selectTag.setAttribute("onchange","setDeliveryOnLocalStorage(this)")
                                Delivery_td_value.append(selectTag)
                                    const op1 = document.createElement("option")
                                            op1.innerHTML="Aramex for 10$"
                                            op1.value=10
                                    const op2 = document.createElement("option")
                                            op2.innerHTML="DHL for 20$"
                                            op2.value=20
                                    const op3 = document.createElement("option")
                                            op3.innerHTML="FedEx for 5$"
                                            op3.value=5

                                    selectTag.append(op1)
                                    selectTag.append(op2)
                                    selectTag.append(op3)


        const Delivery_td_selected = document.createElement("td")
                Delivery_td_selected.setAttribute("id","D_options")
                Delivery_td_selected.classList.add("text-center")
                let Delivery_From_LocalStorage = localStorage.getItem('Delivery')
                Delivery_td_selected.innerHTML=Delivery_From_LocalStorage



    
        TrTag.append(Delivery_td_paragraf)
        TrTag.append(Delivery_td_value)
        TrTag.append(Delivery_td_selected)

        return JSON.parse(Delivery_From_LocalStorage)
    }














function showTotalPriceBeforeVAT( valueOfDelivery)
{
    const tbodyTag = document.querySelector('tbody')


    const TrTag = document.createElement("tr")
    tbodyTag.append(TrTag);

    const vat_td = document.createElement("td")
        vat_td.setAttribute("colspan",2)
        vat_td.classList.add("text-center")
        vat_td.innerHTML=" Total Price ";

        const vat_value = document.createElement("td")
        vat_value.setAttribute("id","Total_Price_id")
        vat_value.classList.add("text-center")
        let pr = localStorage.getItem("totalPrice")
        let pr_after_parse = JSON.parse(pr) 
        vat_value.innerHTML= pr_after_parse+ valueOfDelivery 

    TrTag.append(vat_td)
    TrTag.append(vat_value)
}






function showVAT()
{
    const tbodyTag = document.querySelector('tbody')

    const TrTag = document.createElement("tr")
    tbodyTag.append(TrTag);

    const vat_td = document.createElement("td")
        vat_td.setAttribute("colspan",2)
        vat_td.classList.add("text-center")
        vat_td.innerHTML=" 15% VAT";

        const vat_value = document.createElement("td")
        vat_value.classList.add("text-center")

        let vatVal = localStorage.getItem("VAT")
        vat_value.innerHTML=vatVal

    TrTag.append(vat_td)
    TrTag.append(vat_value)

    return vatVal;
}


function showTotalPriceAfterVAT()
{

    const tbodyTag = document.querySelector('tbody')

    const TrTag = document.createElement("tr")
    tbodyTag.append(TrTag);

    const total_td = document.createElement("td")
    total_td.setAttribute("colspan",2)
    total_td.classList.add("text-center")
    total_td.innerHTML=" Total Price After 15% VAT ";

        const total_value = document.createElement("td")
                total_value.setAttribute("id","total_value")
                total_value.classList.add("text-center")

        let pr = localStorage.getItem("totalPrice")
        let pr_after_parse = JSON.parse(pr) 

        let vat = localStorage.getItem("VAT")
        let vat_after_parse = JSON.parse(vat) 

        let Delivery = localStorage.getItem("Delivery")
        let Delivery_after_parse = JSON.parse(Delivery) 

        total_value.innerHTML= pr_after_parse + vat_after_parse + Delivery_after_parse

    TrTag.append(total_td)
    TrTag.append(total_value)
}

function discountCoupons()
{
    const tbodyTag = document.querySelector('tbody')

    const TrTag = document.createElement("tr")
    tbodyTag.append(TrTag);

    const coupon_td_paragraf = document.createElement("td")
    coupon_td_paragraf.classList.add("text-center")
    coupon_td_paragraf.innerHTML=" Add Coupon : ";

        const coupon_td_input = document.createElement("td")
                const coupon_input = document.createElement("input")
                            coupon_input.setAttribute("id","coupon_input")
                const coupon_button = document.createElement("button")
                            coupon_button.setAttribute("id","coupon_button")
                        
                        coupon_button.innerHTML="Apply"

        const coupon_td_value = document.createElement("td")
                coupon_td_value.classList.add("text-center")
                coupon_td_value.setAttribute("id","coupon_td_value")
                coupon_td_value.innerHTML="No coupon applied";

                coupon_td_input.append(coupon_input)
                coupon_td_input.append(coupon_button)

    TrTag.append(coupon_td_paragraf)
    TrTag.append(coupon_td_input)
    TrTag.append(coupon_td_value)
}
























// -------------------------------

function setCollectionOrDeliveryOnLocalStorage(selectObject)
{
    // https://stackoverflow.com/questions/5024056/how-to-pass-parameters-on-onchange-of-html-select
    let value = selectObject.value; 
    localStorage.setItem("CollectionOrDelivery",value)

    // show the selected to id="C_or_D"
    let outputofC_or_D = document.querySelector("#C_or_D")
        outputofC_or_D.innerHTML=value


        let disable_DeliveryOptions_tr = document.querySelector("#DeliveryOptions")
        if(value == "collection")
        {
            // hidden
            disable_DeliveryOptions_tr.style.visibility="hidden";

                // set itme of Delivery 0 beques its collection
                localStorage.setItem("Delivery",0)
        }
        else{
            // visible
            disable_DeliveryOptions_tr.style.visibility="visible";
        }

}

function setDeliveryOnLocalStorage(selectObject)
{
    let value = selectObject.value; 
    localStorage.setItem("Delivery",value)

    // show the selected to id="D_options"
    let outputofD_options = document.querySelector("#D_options")
        outputofD_options.innerHTML=value

}




function checkForCoupons()
{
    // Only we have Coupons the discount for 10%
    const listOfCoupons = ["KSA10","S10","Z10"]
    let CouponsButton = document.querySelector("#coupon_button")
    CouponsButton.addEventListener("click", function(){

        let Couponsinput = document.querySelector("#coupon_input")
            let valueOfCouponsinput =  Couponsinput.value ;
            CouponsValidate(valueOfCouponsinput,listOfCoupons)
    });
}

function CouponsValidate(valueOfCouponsinput,listOfCoupons)
{
    const coupon_td_value = document.querySelector("#coupon_td_value")
    const total_value = document.querySelector("#total_value")

    let trueOrFalse =  listOfCoupons.includes(valueOfCouponsinput)
    if(trueOrFalse)
    {
        let showTotalAfterCoupon = parseInt(total_value.innerHTML)
        showTotalAfterCoupon = showTotalAfterCoupon - (showTotalAfterCoupon*.10)
        total_value.innerHTML= showTotalAfterCoupon
        coupon_td_value.innerHTML="10% Discount !!!"
    }
    else{
        coupon_td_value.innerHTML="Wrong coupon code"
    }
}



function conﬁrmOrder()
{
    let randomNumber = Math.floor(Math.random() * 99999);
    alert("Successful Order !! " + '\n'  +"Your Order Number is : #" + randomNumber)

}