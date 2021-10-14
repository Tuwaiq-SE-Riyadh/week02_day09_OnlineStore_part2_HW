
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

         // the total cost (remember to add VAT!).

//  #####################  Get total Price #####################
    let totalPrice = getTotalPrice()
//  #####################  Show Price Before VAT #####################
    showTotalPriceBeforeVAT(totalPrice)
//  #####################  Show VAT #####################
    let vatValue =  showVAT(totalPrice)
//  #####################  Show Price After VAT #####################
    showTotalPriceAfterVAT(totalPrice,vatValue)


function showTotalPriceBeforeVAT(totalPrice)
{
    const tbodyTag = document.querySelector('tbody')

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