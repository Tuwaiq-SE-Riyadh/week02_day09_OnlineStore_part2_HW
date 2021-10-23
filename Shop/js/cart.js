let storge = JSON.parse(localStorage.getItem("array"));

if (JSON.parse(localStorage.getItem("array")) != null) {
  let storageItems = JSON.parse(localStorage.getItem("array"));
  for (let i = 0; i < storageItems.length; i++) {
    if (typeof storageItems[i] == "object") {
      let img = storageItems[i].img;
      let quantitiy = storageItems[i].quantitiy;
      let price = +storageItems[i].price * quantitiy;

      let imgs = document.createElement("img");
      imgs.src = img;

      let td1 = document.createElement("td");
      td1.className = "tdProdct";
      td1.appendChild(imgs);

      let input = document.createElement("input");
      input.value = quantitiy;

      let td2 = document.createElement("td");
      td2.classList.add("trQuantity");
      td2.appendChild(input);

      let td3 = document.createElement("td");
      td3.appendChild(document.createTextNode(price));

      let tr = document.createElement("tr");
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);

      let tobady = document.getElementById("tableBody");

      tobady.appendChild(tr);
      let Total = document.querySelector("#Total");
      Total.textContent = +price - (+price * (6 / 100)).toFixed(2) + 30;
    }
  }
}

document.getElementById("chou").onclick = () => {
  localStorage.clear();
  alert("done")
};
