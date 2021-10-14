
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

//  #####################  Get total Price #####################
    let totalPrice = getTotalPrice();

//  #####################  Show Price Before VAT #####################
    showTotalPriceBeforeVAT(totalPrice);

    // Create forms to allow a user to select “collection” or “delivery”.
    selectCollectionOrDelivery()

    // Create forms for different delivery options.
  //  selectDifferentDeliveryOptions()

//  #####################  Show VAT #####################
    let vatValue =  showVAT(totalPrice);
//  #####################  Show Price After VAT #####################
    showTotalPriceAfterVAT(totalPrice,vatValue);
//  #####################  Discount coupons #####################
    discountCoupons()











    function getTotalPrice()
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

        return total;
    }

    function selectCollectionOrDelivery()
    {
        const tbodyTag = document.querySelector('tbody')

    
        const TrTag = document.createElement("tr")
        tbodyTag.append(TrTag);
    
        const CollectionOrDelivery_td_paragraf = document.createElement("td")
                CollectionOrDelivery_td_paragraf.innerHTML="Select Collection Or Delivery"
                CollectionOrDelivery_td_paragraf.classList.add("text-center")


        const CollectionOrDelivery_td_value = document.createElement("td")
                const selectTag = document.createElement("select")
                        selectTag.setAttribute("onchange","setCollectionOrDeliveryOnLocalStorage(this)")
                                CollectionOrDelivery_td_value.append(selectTag)
                                    const op1 = document.createElement("option")
                                            op1.innerHTML="collection"
                                            op1.value="collection"
                                    const op2 = document.createElement("option")
                                            op2.innerHTML="delivery"
                                            op2.value="delivery"

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

















function showTotalPriceBeforeVAT(totalPrice)
{
    const tbodyTag = document.querySelector('tbody')

    const brbrbr = document.createElement("br")
    tbodyTag.append(brbrbr);

    const TrTag = document.createElement("tr")
    tbodyTag.append(TrTag);

    const vat_td = document.createElement("td")
        vat_td.setAttribute("colspan",2)
        vat_td.classList.add("text-center")
        vat_td.innerHTML=" Total Price ";

        const vat_value = document.createElement("td")
        vat_value.classList.add("text-center")
        vat_value.innerHTML=totalPrice

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
        let vatVal = totalPrice*0.15;
        vat_value.innerHTML=vatVal

    TrTag.append(vat_td)
    TrTag.append(vat_value)

    return vatVal;
}


function showTotalPriceAfterVAT(totalPrice,vatValue)
{

    const tbodyTag = document.querySelector('tbody')

    const TrTag = document.createElement("tr")
    tbodyTag.append(TrTag);

    const total_td = document.createElement("td")
    total_td.setAttribute("colspan",2)
    total_td.classList.add("text-center")
    total_td.innerHTML=" Total Price After 15% VAT ";

        const total_value = document.createElement("td")
        total_value.classList.add("text-center")
        total_value.innerHTML= totalPrice - vatValue

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
                const coupon_button = document.createElement("button")
                        coupon_button.innerHTML="Apply"

        const coupon_td_value = document.createElement("td")
                coupon_td_value.classList.add("text-center")
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


        if(value == "collection")
        {
            console.log("cc")
        }
        else{
            console.log("ddd")
        }
    
}