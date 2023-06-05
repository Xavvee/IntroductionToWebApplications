var togglePassword1 = document.getElementById('togglePassword1');
var password1 = document.getElementById('passwd');
var togglePassword2 = document.getElementById('togglePassword2');
var password2 = document.getElementById('rptpasswd');

  togglePassword1.addEventListener('click', function (e) {
    const type = password1.getAttribute('type') === 'password' ? 'text' : 'password';
    password1.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});

togglePassword2.addEventListener('click', function (e) {
    const type = password2.getAttribute('type') === 'password' ? 'text' : 'password';
    password2.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});
var submiter=document.getElementById('submit');
submit.addEventListener('click',allchecker);
function checkPassword() {
    if(password1.value!=password2.value){
        alert ("Passwords do not match. Try again.");
        return false;
    }

    return true;
}

var special = document.getElementById("special");
var capital = document.getElementById("capital");
var digits = document.getElementById("digits");
var length = document.getElementById("length");

function allchecker(){
    checkPassword();
    lengthChecker();
    capitalChecker();
    numbersChecker();
    symbolChecker();
    if(checkPassword()&&lengthChecker()&&capitalChecker()&&numbersChecker&&symbolChecker()){
        alert("Your password is eligible :)")
    }
}

var upperCaseLetters = /[A-Z]/g;
var numbers = /[0-9]/g;
var specials = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g;

function lengthChecker(){
    if(password1.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
        return true;
      } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
        return false;
      }
}

function numbersChecker(){
    if(password1.value.match(numbers)) {  
        digits.classList.remove("invalid");
        digits.classList.add("valid");
        return true;
      } else {
        digits.classList.remove("valid");
        digits.classList.add("invalid");
        return false;
      }
}

function capitalChecker(){
    if(password1.value.match(upperCaseLetters)) {  
        capital.classList.remove("invalid");
        capital.classList.add("valid");
        return true;
      } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
        return false;
      }
}

function symbolChecker(){
    if(password1.value.match(specials)) {  
        special.classList.remove("invalid");
        special.classList.add("valid");
        return true;
      } else {
        special.classList.remove("valid");
        special.classList.add("invalid");
        return false;
      }
}

