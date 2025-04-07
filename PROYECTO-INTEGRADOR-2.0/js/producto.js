document.addEventListener("DOMContentLoaded", function() { //Aseguro que se haya cargado todo antes de mostrarse
    let queryString = location.search;
    console.log(queryString)
    let urlParams =  new URLSearchParams(queryString);
    console.log(urlParams)
    let productoId = urlParams.get('id');
    console.log(productoId)
    let url = `https://fakestoreapi.com/products/${productoId}` //Agarro el Id del producto y despues busco en el navegador el mismo link pero solo con ese Id

    fetch(url)
        .then(function(res) {
            return res.json();
        })
        .then(function(data) { 
            console.log(data)
            document.querySelector(".titulo-producto").innerText = data.title;
            document.querySelector(".detalle-producto").innerText = data.description;
            document.querySelector(".precio").innerText = data.price;
            document.querySelector(".foto-producto img").src = data.image; //Cambio directamente la src en HTML de la imagen del producto, que esta vacia.

            //Agregoe  el link para volver a la categoria, tuve que buscar en google herramientas para desarmar el nombre de la categoria y poder conectarlo con los links del repo
            let categoriaLink = document.querySelector('.categoria-producto');
            categoriaLink.innerText = data.category; //Data category es: 'men's category', y para que funcione independientemente para cualquier categoria, tengo que quedarme con la palabra exacta hasta que aparece el '
            let categoriaCompleta = data.category;
            let indexApostrofe = categoriaCompleta.indexOf("'"); //Selecciono la posicion del '
            let categoria = categoriaCompleta.substring(0, indexApostrofe);
            categoriaLink.href = `category.html?category=${categoria}`;

            //Evento para interaccion con el boton del carrito
            document.querySelector('#boton-agregar-carrito').addEventListener('click', function() {
                let carrito = JSON.parse(localStorage.getItem('cart')) || []; //Si no existe la variable cart le pido que cree un array vacio y que sean validos los datos
                carrito.push(productoId); //Agrego ID del producto al carrito
                localStorage.setItem('cart', JSON.stringify(carrito));
                alert('Producto agregado al carrito');
                console.log(carrito)

            })
        })
        .catch(function(e) {
            console.error('Error al seleccionar el producto:', e)
        })
})