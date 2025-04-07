let email = localStorage.email
console.log(email)

if (localStorage.getItem('email') !== 'undefined' && localStorage.getItem('email') !== null) {
    let loginLink = document.querySelector('.login-link');
    loginLink.style.display = 'none';
}

let queryString = location.search;
let urlParams = new URLSearchParams(queryString);
let categoria = urlParams.get('category');


let menu = document.querySelectorAll("#menu a");
console.log(menu);

  
let titulo = document.querySelector(".ult_nov")
        titulo.innerText = categoria

        if (categoria == "electronics" || categoria == "jewelery"){
            
      
            fetch(`https://fakestoreapi.com/products/category/${categoria}`)
                
            .then(function(res) {
                return res.json();
            })
            
            .then(function(data) {
                    let resultados = data;
                    console.log("resultados: ",resultados);

                    let caja = document.querySelector(".productos");

                    let caracteristicas = "";

                    for(let i = 0; i < resultados.length; i++) {
                        caracteristicas += 
                        `<div class="producto_category">
                            <div class="remera-img">
                                <a href=producto.html?id=${resultados[i].id}><img class="producto-imagen" src=${resultados[i].image} alt=${resultados[i].title}></a>
                                <div class="info">
                                    <p class="nombre-producto">${resultados[i].title}</p>
                                    <p class="descripcion-producto">${resultados[i].description}</p>
                                    <p class="precio-producto">$${resultados[i].price}</p>
                                </div>
                            </div>
                        </div>` 
                    }
                    caja.innerHTML = caracteristicas;


                })
            
            .catch(function(e) {
                    console.log(e);
                    console.log("Lo sentimos, esta categoria no se muestra correctamente, refresque la página e intente nuevamente.");
                });

        } else if (categoria == "men" || categoria == "women"){

            fetch(`https://fakestoreapi.com/products/category/${categoria}%27s%20clothing`)
                
            .then(function(res) {
                    return res.json();
                })
            
            .then(function(data) {
             let resultados = data;
             console.log("resultados: ",resultados);

             let caja = document.querySelector(".productos");

             let caracteristicas = "";

             for(let i = 0; i < resultados.length; i++) {
                caracteristicas += 
                `<div class="remera-hombre">
                    <div class="remera-img">
                        <a href=producto.html?id=${resultados[i].id}><img class="producto-imagen" src=${resultados[i].image} alt=${resultados[i].title}></a>
                        <div class="info">
                              <p class="nombre-producto">${resultados[i].title}</p>
                              <p class="descripcion-producto">${resultados[i].description}</p>
                              <p class="precio-producto">$${resultados[i].price}</p>
                        </div>
                    </div>
                   </div>` 
              }
              caja.innerHTML = caracteristicas;


                })
            
            .catch(function(e) {
             console.log(e);
            console.log("Lo sentimos, esta categoria no se muestra correctamente, refresque la página e intente nuevamente.");
            });
        }

