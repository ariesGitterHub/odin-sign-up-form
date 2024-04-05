// When the user clicks on <div>, open the popup

// function myFunction() {
//   const popup = document.getElementById("myPopup");
//   popup.classList.toggle("show");
// }

const ldPopUp = document.querySelector(".ld-click");

// Note, I was getting the error: Cannot read properties of null (reading 'addEventListener'). Adding "defer" to the html head here: "<script src="javascript.js" defer></script>" fixed this null issue. KEEP THIS COMMENT FOR FUTURE REFERENCE.

ldPopUp.addEventListener("click", ldPopUpFunc);
const ldPopUpSpan = document.querySelector("#ld-pop-up");

function ldPopUpFunc() {
  ldPopUpSpan.classList.toggle("pop-up-show");
}


// const wpPopUpSpan = document.querySelector("#wp-pop-up-text");
// wpPopUpSpan.addEventListener("onchange", wpPopUpFunc);

// function wpPopUpFunc() {
//   const password = document.querySelector("#create-password").value;
//   const confirmPassword = document.querySelector("#confirm-password").value;

//   if (password !== confirmPassword) {
//     wpPopUpSpan.classList.toggle("pop-up-show");
//   }

// }


