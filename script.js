let myIndex = 0;
function addImages() {}
carousel();

function carousel() {
  let i;
  let x = document.getElementsByClassName("slides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 5000); // Change image every 2 seconds
}
