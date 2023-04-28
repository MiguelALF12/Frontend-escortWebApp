const signInTabButton = document.getElementById("signIn-tab-button");
const signUpTabButton = document.getElementById("signUp-tab-button");
const signInForm = document.getElementById("signIn-form");
const signUpForm = document.getElementById("signUp-form");
const background = document.getElementById("background");
const formFields = document.getElementById("form-fields");

signInTabButton.addEventListener("click", function () {
    signUpForm.style.display = "none";
    signInForm.style.display = "block";
    signUpTabButton.classList.remove("signInUp-active-tabs-buttons");
    if (!signInTabButton.classList.contains("signInUp-active-tabs-buttons")) {
        signInTabButton.classList.add("signInUp-active-tabs-buttons");
    }
    background.style.height = "440px";
    formFields.style.top = "-410px"
});

signUpTabButton.addEventListener("click", function () {
    signInForm.style.display = "none";
    signUpForm.style.display = "block";
    signInTabButton.classList.remove("signInUp-active-tabs-buttons");
    if (!signUpTabButton.classList.contains("signInUp-active-tabs-buttons")) {
        signUpTabButton.classList.add("signInUp-active-tabs-buttons");
    }
    background.style.height = "720px";
    formFields.style.top = "-700px"
});
