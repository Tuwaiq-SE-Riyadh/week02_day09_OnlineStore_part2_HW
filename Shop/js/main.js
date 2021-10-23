let storge = JSON.parse(localStorage.getItem("array"));

let arraycart =
  JSON.parse(localStorage.getItem("array")) != null
    ? JSON.parse(localStorage.getItem("array"))
    : [];
let totel = 0;
const quantitiy = 1;

let bart = document.querySelectorAll(".card.card-1");

bart.forEach(function (element) {
  let img1 = element.querySelector("img").src;

  let title = element.querySelector("p").innerText;

  let price = element.querySelector("h5").innerText;

  let boton = element.querySelector("#cont");
  // addEventListener bouuton {
  boton.addEventListener("click", function () {
    let check = false;
    if (storge != null) {
      for (let i = 0; i < arraycart.length; i++) {
        if (arraycart[i].title === title) {
          check = true;

          arraycart[i].quantitiy += 1;

          break;
        } else if (storge.length === i) {
          check = false;
        }
      }
    }

    if (check === false) {
      let obiet = {
        title: title,
        price: price,
        img: img1,
        quantitiy: 1,
      };

      arraycart.push(obiet);
    }
    arraycart.push((totel = totel + +price));

    localStorage.setItem("array", JSON.stringify(arraycart));
    console.log(JSON.parse(localStorage.getItem("array")));
    window.location.reload();
  });
});
