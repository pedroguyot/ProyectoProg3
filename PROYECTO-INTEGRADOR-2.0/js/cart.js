let email = localStorage.email
console.log(email)

if (localStorage.getItem('email') !== 'undefined' && localStorage.getItem('email') !== null) {
    let loginLink = document.querySelector('.login-link');
}

document.addEventListener("DOMContentLoaded", function () {
    // convierto los productos del cart y los paso a una array. Si no hya nada en el cart va  aestar vacio
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    let contenedor = document.querySelector('.contenedor');

    // verifico si el cart esta vacio
    if (cartItems.length === 0) {
        document.querySelector('.detalle').innerHTML = "Su carrito está vacío";
    } else {
        let contenidoHTML = ''; // variable de contenido HTML

        for (let i = 0; i < cartItems.length; i++) {
            let id = cartItems[i];
            fetch(`https://fakestoreapi.com/products/${id}`)
                .then(function (res) {
                    return res.json();
                })
                .then(function(product) {
                    console.log(product)

                    contenidoHTML += `
                        <div class="producto">
                            <div class="foto-producto">
                                <img src="${product.image}" alt="${product.title}">
                            </div>
                            <div class="detalle">
                                <p>Nombre: ${product.title}</p>
                                <p>Precio: $${product.price}</p>
                            </div>
                        </div>
                    `;

                    //  boton de finalizar compra
                    if (i === cartItems.length - 1) {
                        contenidoHTML += `
                            <button class="finalizar-compra" onclick="finalizarCompra()">Finalizar Compra</button>
                        `;
                        contenedor.innerHTML = contenidoHTML; // Agrego todo el contenido HTML al contenedor
                    }
                })
                .catch(function(e) {
                    console.error('Error al seleccionar el producto:', e)
                });
        }
    }
});

// alerta de compra, y limpieza del localStorage
function finalizarCompra() {
    localStorage.removeItem('cart');
    alert('Gracias por su compra');
    location.href = 'index.html';
}
