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

password.addEventListener("blur", checkPasswordCreateMsg);
confirmPassword.addEventListener("blur", checkPasswordCreateMsg);

function checkPasswordCreateMsg() {
  const passwordCheckedMsg = document.querySelector("#password-check-msg"); 

  if (password.value === confirmPassword.value) {
    passwordCheckedMsg.innerText = "Both passwords match.";
    confirmPassword.style.cssText = "border: 2px solid var(--my-white)";
  }
  else if (password.value !== confirmPassword.value) {
    passwordCheckedMsg.innerText = "Passwords do not match!";
    confirmPassword.style.cssText = "border: 5px double var(--my-red)";
     } 
  else if (password.value === "" || confirmPassword.value === "") {
    passwordCheckedText.innerText = "";
    confirmPassword.style.cssText = "border: 5px double var(--my-red)";
  }
}

// Stop submit if password fields are not identical

const formSubmit = document.querySelector("form");
formSubmit.addEventListener("submit", submitChecker);

function submitChecker(event) {
  if (password.value !== confirmPassword.value || password.value === "" || confirmPassword.value === "") {
    event.preventDefault();
  } else {
    return;
  }
}