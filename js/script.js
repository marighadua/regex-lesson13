 let emailValue = document.getElementById('emailField');
 let errorText = document.getElementById ('erorEmail');


 function validationEmail () {
    let emailValueUser = emailValue.value;
    let patternEmail =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    if (emailValueUser.match(patternEmail)) {
      errorText.innerText = 'your email is valid';
      errorText.style.color = 'green';
    } else {
      errorText.innerText = 'your email is Invalid';
      errorText.style.color = 'red';
    }

    if (emailValueUser == "") {
      errorText.innerHTML = "";
    }
 }   

   emailValue.addEventListener('keyup', validationEmail);

   let formLogin = document.getElementById ('LOGIN');
   formLogin.addEventListener('submit', function (x) {
    x.preventDefault ();
    let checkBox = document.getElementById ('savedInfo');
    if (checkBox.checked) {
      let usernameValue = document.getElementById ('usernamefield').value;
      Cookies.set ('savedUsername',usernameValue);
    } else {
      Cookies.remove ('savedUsername');
    }
    this.submit ();
   })


   let savedusernameInfo = Cookies.get ('savedUsername');
    
   if (savedusernameInfo) {
    document.getElementById ('usernamefield').value = savedusernameInfo;
    document.getElementById ('savedInfo').checked = true;
   }



    
























//  formis validacia

const formEL = document.getElementById("form-el");

formEL.addEventListener("submit", function (e) {
  e.preventDefault();

  let errors = {};

  //
  let usernameFieldValue = document.getElementById("username").value;

  if (usernameFieldValue == "") {
    errors.usernamefield = "username field can not be empty";
  }
  //
  let passswordValue = document.getElementById("password").value;
  let passswordValue2 = document.getElementById("password2").value;

  if (passswordValue == "") {
    errors.passwordfield = "Password field can not be empty";
  }

  if (passswordValue != passswordValue2) {
    errors.passwordfield2 = "Password do not match";
  }

  //

  let gender = false;

  let info = this.querySelectorAll('[name ="gender"]');
  info.forEach((item) => {
    if (item.checked) {
      gender = true;
    }
  });

  if (!gender) {
    errors.gender = "Please select Your Gender";
  }

  //
  let checkbox = document.getElementById("check").checked;
  if (!checkbox) {
    errors.agree = "You must agree our terms and conditons";
  }

  console.log(errors);

  this.querySelectorAll(".error-text").forEach((el) => {
    el.textContent = " ";
  });
  //   ციკლი ობიექტზე
  for (let item in errors) {
    console.log(item); //key

    let errorText = document.getElementById("error_" + item);
    console.log(errorText);

    if (errorText) {
      errorText.textContent = errors[item];
    }
  }

  if (Object.keys(errors).length === 0) {
    this.submit();
  }
});


const icon = document.getElementById("icon-passw");
const passwField = document.getElementById("password");

function showHidePassw() {
  if (passwField.type === "password") {
    passwField.setAttribute("type", "text");
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  } else {
    passwField.setAttribute("type", "password");
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  }
}
icon.addEventListener("click", showHidePassw);