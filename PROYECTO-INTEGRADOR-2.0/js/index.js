//Saludo desde login
let email = localStorage.email
console.log(email)
document.querySelector('.saludo').innerHTML += email

if (localStorage.getItem('email') !== 'undefined' && localStorage.getItem('email') !== null) {
    let loginLink = document.querySelector('.login-link');
    loginLink.style.display = 'none';
} else {
    let saludo = document.querySelector('.saludo');
    let linkLogout = document.querySelector('.link-logout');
    saludo.style.display = 'none';
    linkLogout.style.display = 'none';
}

//Arranca la seccion de hombres
let hombres = document.querySelectorAll(".remera-hombre");

fetch('https://fakestoreapi.com/products/category/men%27s%20clothing')
    .then(function(res){
        return res.json()
    })
    .then(function(data){

        let resultados = data;
        console.log(resultados);
        
        for(let i = 0; i < resultados.length; i++) {
            if (i < hombres.length) { 
                let nombreProd = resultados[i].title;
                let descripcionProd = resultados[i].description;
                let precioProd = resultados[i].price;
                let imagenProd = resultados[i].image;
                let idProd = resultados[i].id;
                
                let nombre = hombres[i].querySelector(".nombre-producto");
                let descripcion = hombres[i].querySelector(".descripcion-producto");
                let precio = hombres[i].querySelector(".precio-producto");
                let imagen = hombres[i].querySelector(".producto-imagen");
                let enlaceImg = hombres[i].querySelector('.ver-mas-imagen');
                let enlaceBoton = hombres[i].querySelector('.ver-mas');
                
                nombre.innerText = nombreProd;
                descripcion.innerText = descripcionProd;
                precio.innerText = `$${precioProd}`;
                imagen.src = imagenProd;
                enlaceImg.href = `producto.html?id=${idProd}`
                enlaceBoton.href = `producto.html?id=${idProd}`
            }
        }

    })
    .catch(function(e){
        console.log(e);
        console.log("Lo sentimos, este item no se muestra correctamente, refresque la página e intente nuevamente.");
    });

//Arranca la seccion de mujeres
let mujeres = document.querySelectorAll(".remera-mujer");

fetch('https://fakestoreapi.com/products/category/women%27s%20clothing')
    .then(function(res){
        return res.json()
    })
    .then(function(data){

        let resultados = data;
        console.log(resultados);
        
        for(let i = 0; i < resultados.length; i++) {
            if (i < hombres.length) { 
                let nombreProd = resultados[i].title;
                let descripcionProd = resultados[i].description;
                let precioProd = resultados[i].price;
                let imagenProd = resultados[i].image;
                let idProd = resultados[i].id;
                
                let nombre = mujeres[i].querySelector(".nombre-producto");
                let descripcion = mujeres[i].querySelector(".descripcion-producto");
                let precio = mujeres[i].querySelector(".precio-producto");
                let imagen = mujeres[i].querySelector(".producto-imagen");
                let enlaceImg = mujeres[i].querySelector('.ver-mas-imagen');
                let enlaceBoton = mujeres[i].querySelector('.ver-mas');

                nombre.innerText = nombreProd;
                descripcion.innerText = descripcionProd;
                precio.innerText = `$${precioProd}`;
                imagen.src = imagenProd;
                enlaceImg.href = `producto.html?id=${idProd}`
                enlaceBoton.href = `producto.html?id=${idProd}`
            }
        }

    })
    .catch(function(e){
        console.log(e);
        console.log("Lo sentimos, este item no se muestra correctamente, refresque la página e intente nuevamente.");
    });

//Arranca la seccion accesorios
let accesorios = document.querySelectorAll(".accesorios");

fetch('https://fakestoreapi.com/products/category/jewelery')
    .then(function(res){
        return res.json()
    })
    .then(function(data){ 

        let resultados = data;
        console.log(resultados);

        for(let i = 0; i < resultados.length; i++) {
            if (i < accesorios.length) { 
                let nombreProd = resultados[i].title;
                let descripcionProd = resultados[i].description;
                let precioProd = resultados[i].price;
                let imagenProd = resultados[i].image;
                let idProd = resultados[i].id;
                
                let nombre = accesorios[i].querySelector(".nombre-producto");
                let descripcion = accesorios[i].querySelector(".descripcion-producto");
                let precio = accesorios[i].querySelector(".precio-producto");
                let imagen = accesorios[i].querySelector(".producto-imagen");
                let enlaceImg = accesorios[i].querySelector('.ver-mas-imagen');
                let enlaceBoton = accesorios[i].querySelector('.ver-mas');

                nombre.innerText = nombreProd;
                descripcion.innerText = descripcionProd;
                precio.innerText = `$${precioProd}`;
                imagen.src = imagenProd;
                enlaceImg.href = `producto.html?id=${idProd}`
                enlaceBoton.href = `producto.html?id=${idProd}`
            }
        }
    })
    .catch(function(e){
        console.log(e);
        console.log("Lo sentimos, este item no se muestra correctamente, refresque la página e intente nuevamente.");
    });