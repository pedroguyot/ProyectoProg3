let form = document.querySelector("form")
let email = document.querySelector(".email_class")
let password = document.querySelector(".password_class")

form.addEventListener("submit", function(e){
    e.preventDefault();

    if(email.value == "" ){
        alert("Por favor complete el campo email.");
    }else if(password.value == "" ){
        alert("Por favor complete el campo password.");
       
    }else if(password.value.length < 6){
        alert("La contraseña debe tener al menos 6 caracteres.");
    }else{
        alert("Login exitoso!")
        localStorage.setItem('email', email.value);
        location.href = "index.html";
    }

});

console.log(localStorage)