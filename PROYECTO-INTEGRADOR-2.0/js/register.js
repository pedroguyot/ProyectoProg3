let form = document.querySelector("form");
let email = document.querySelector(".email_class");
let password = document.querySelector(".password_class");
let repetir_password = document.querySelector(".repetir_password_class");
let email_info = document.querySelector(".email_info");
let password_info = document.querySelector(".password_info");
let terminos = document.querySelector("#terminos");



form.addEventListener("submit", function(e){
    e.preventDefault();
  

    if(email.value === ""){
        email_info.innerHTML = "Por favor escriba su email.";
    } else if(password.value === ""){
        password_info.innerHTML = "Por favor complete el campo.";
    } else if(password.value.length < 6){
        password_info.innerHTML = "Debe ingresar al menos 6 caracteres.";
    } else if(password.value !== repetir_password.value){
        password_info.innerHTML = "Las contraseñas no coinciden.";
    } else{
        alert("Registro exitoso!");
        location.href = "index.html";
    }
});