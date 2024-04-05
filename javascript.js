// When the user clicks on <div>, open the popup

// function myFunction() {
//   const popup = document.getElementById("myPopup");
//   popup.classList.toggle("show");
// }

const popUp = document.querySelector(".pop-up");

// Note, I was getting the error: Cannot read properties of null (reading 'addEventListener'). Adding "defer" to the html head here: "<script src="javascript.js" defer></script>" fixed this null issue. KEEP THIS COMMENT FOR FUTURE REFERENCE.

popUp.addEventListener("click", myPopUpFunc);
const popUpSpan = document.querySelector("#my-pop-up");

function myPopUpFunc() {
  popUpSpan.classList.toggle("pop-up-show");
}
