function addToCart(ItmeName,price,image)
{
    // make itme at the best format  
    var theTotalData = [[{"ItmeName":ItmeName},{"price":price},{"image":image}]]

    
    // get the localstorage data if any!
    if(localStorage.getItem('index'))
    {   
        // there are pervoues data

        // get the arrayDate form localstorage and push the new itme into it
        var theDataFromLocalStorage = localStorage.getItem('index')
        DataAfterParse = JSON.parse(theDataFromLocalStorage)

        // theTotalData.push([{"ItmeName":DataFromStorage[0][0]['ItmeName']},{"price":66},{"image":99}])
        DataAfterParse.push([{"ItmeName":ItmeName},{"price":price},{"image":image}])

        // theTotalData.push([{"ItmeName":ItmeName},{"price":price},{"image":image}])
        localStorage.setItem("index",JSON.stringify(DataAfterParse))
    }
    else
    { 
        // there are no itmes , the first add 
        localStorage.setItem("index",JSON.stringify(theTotalData))
    }

    // When an item is added, an alert should tell the user what the current total is.
    showAlart();

// let hh = localStorage.getItem('index')
// console.log(JSON.parse(hh))

}

function showAlart()
{
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
    alert("The total is :" + total +"💸" )
}