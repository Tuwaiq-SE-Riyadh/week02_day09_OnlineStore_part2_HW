//function add(){
    //document.getElementsByClassName('btn btn-primary')[0] = addRow()
  //  r= JSON.parse(window.localStorage.getItem('thing'));
     //  return r[0].itemName
  //  }
   // let r= JSON.parse(window.localStorage.getItem('thing'));
     function pr(){
         r= JSON.parse(window.localStorage.getItem('thing'));
        console.log(r)
     }

function addRow() {
    let table = document.getElementById("myTable");
    let row = table.insertRow(1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    cell1.innerHTML = "d";
    cell2.innerHTML = "5";
    cell3.innerHTML = "k";
    
}
