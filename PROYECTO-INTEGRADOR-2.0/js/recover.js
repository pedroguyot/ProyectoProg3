let email = document.querySelector("#email");
let email_info = document.querySelector(".email_info");
let form = document.querySelector("form");
let recuperar = document.querySelector("#terminos");
let recuperar_txt = document.querySelector(".recuperar_txt");
let msj_recuperar = document.querySelector(".msj_recuperar");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    let valido = true; // cree una variable que se siempre True para comprarla en los if

    if (recuperar.checked == "") {  
       recuperar_txt.innerHTML = "Por favor acepte el campo Quiero recuperar mi contraseña";
       valido = false;  
    } else {
        recuperar_txt.innerHTML = "";
    }

    if (email.value === "" ) {
        email_info.innerHTML = "Por favor escriba su email.";
        valido = false;
    } else {
        email_info.innerHTML = "";
    }

    if (valido) {
        msj_recuperar.innerHTML = "Recibirás un email con las instrucciones para recuperar tu contraseña";
        msj_recuperar.innerHTML += '<a href="login.html">Ir al login</a>';
    } else {
        msj_recuperar.innerHTML = "";
    }
});
