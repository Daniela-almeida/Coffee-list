function btnDisponível() {
  let btn = document.getElementById("btn-available");
  btn.addEventListener("click", function () {
    let img = document.getElementById("valentine-special");
    img.style.display = "none";
  });
  let btn2 = document.getElementById("btn-all");
  btn2.addEventListener("click", function () {
    let img = document.getElementById("valentine-special");
    img.style.display = "block";
  });
}

btnDisponível();
