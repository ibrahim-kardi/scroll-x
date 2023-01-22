function slideFront() {
  const doc = document.querySelector(".container");
  const doctwo = document.querySelector(".slide-two");
  doc.style.marginRight = "-1vw";
  doc.style.display = "none";
  doctwo.style.display = "flex";
  doctwo.style.right = "100%";
  doctwo.style.left = "0%";
}

function slideBack() {
  const doc = document.querySelector(".container");
  const doctwo = document.querySelector(".slide-two");

  doctwo.style.right = "-50%";
  doctwo.style.display = "none";
  doc.style.marginRight = "1vw";
  doc.style.display = "flex";
}
