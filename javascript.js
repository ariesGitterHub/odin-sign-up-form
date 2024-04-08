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


// Show password

const password = document.querySelector("#create-password");
const confirmPassword = document.querySelector("#confirm-password"); 


document.querySelector("#show-password").addEventListener("click", showPassword);

function showPassword() {
  if (password.type === "password" && confirmPassword.type === "password") {
    password.type = "text";
    confirmPassword.type = "text"
  } else {
    password.type = "password";
    confirmPassword.type = "password";
  }
}

//  Wrong password

password.addEventListener("blur", passwordChecker);
confirmPassword.addEventListener("blur", passwordChecker);

function passwordChecker() {
  const passwordCheckedText = document
  .querySelector("#wrong-password"); 

  if (password.value !== confirmPassword.value) {
  passwordCheckedText.innerText = "Passwords do not match!";
  } else if (password.value === confirmPassword.value) {
   passwordCheckedText.innerText = "Both passwords match.";
  } else if (password.value === "" && confirmPassword.value === "") {
  passwordCheckedText.innerText = "";
  }
}


