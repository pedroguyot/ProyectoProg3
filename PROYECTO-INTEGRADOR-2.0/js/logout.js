let saludo = document.querySelector('.saludo');
let linkLogout = document.querySelector('.link-logout');

linkLogout.addEventListener('click', function(event) {
    //event.preventDefault();
    localStorage.removeItem('email');
    alert('Cerraste sesión');
})