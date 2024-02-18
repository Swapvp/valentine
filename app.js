let yesBtn = document.querySelector("#yes-btn");
let noBtn = document.querySelector("#no-btn");
let h1 = document.querySelector("h1");
let imageContainer = document.getElementById("imageContainer");

function noBtnClick() {
  var currentSize = window.getComputedStyle(yesBtn).fontSize;
  var newSize = parseInt(currentSize) + 10;
  yesBtn.style.fontSize = newSize + "px";
}

function yesBtnClick() {
  imageContainer.style.display = "block";

  noBtn.style.display = "none";
  yesBtn.style.display = "none";
  h1.style.display = "none";
}
