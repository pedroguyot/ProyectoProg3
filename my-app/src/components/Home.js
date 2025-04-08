import React, { Component } from "react";
import FiltroPelicula from './FiltroPelicula'

class Home extends Component {

    constructor(props){
        super(props)
        this.state = {
            personajes: []
        }
    }

    //componentDidMount() TRAER DATA DE LA API

    


    render() {
        return(
            <main>
            <div>
                <h3 class="saludo">Bienvenido</h3>
            </div>
            <FiltroPelicula />
            {/*
            <div class="link-logout">
                <a href=''>Logout</a>
            </div>
            */}
            <div>
                <h2 class="ult_nov">EDITAR TITULO DE SEC DESTACADAS</h2>
            </div>
            <div id="secciones">
                <h3 class="secc">PELICULAS</h3>
                <article class="productos">

                    <div class="remera-hombre">
                        <div class="remera-img">
                            <a href="" class="ver-mas-imagen">
                                <img class="producto-imagen" src="" alt="Imagen de producto" />
                            </a>
                            <div class="info">
                                <p class="nombre-producto"> </p>
                                <p class="descripcion-producto"> </p>
                                <p class="precio-producto"></p>
                            </div>
                            <div id="botones">
                                <a href="" class="ver-mas"><button id="boton">Ver más</button></a>
                            </div>
                        </div>
                    </div>

                    <div class="remera-hombre">
                        <div class="remera-img">
                            <a href="" class="ver-mas-imagen"><img class="producto-imagen" src="" alt="Imagen de producto" /></a>
                            <div class="info">
                                <p class="nombre-producto"> </p>
                                <p class="descripcion-producto"> </p>
                                <p class="precio-producto"></p>
                            </div>
                            <div id="botones">
                                <a href="" class="ver-mas"><button id="boton">Ver más</button></a>
                            </div>
                        </div>
                    </div>


                    <div class="remera-hombre">
                        <div class="remera-img">
                            <a href="" class="ver-mas-imagen"><img class="producto-imagen" src="" alt="Imagen de producto" /></a>
                            <div class="info">
                                <p class="nombre-producto"> </p>
                                <p class="descripcion-producto"> </p>
                                <p class="precio-producto"></p>
                            </div>
                            <div id="botones">
                                <a href="" class="ver-mas"><button id="boton">Ver más</button></a>
                            </div>
                        </div>
                    </div>

                    <div class="remera-hombre">
                        <div class="remera-img">
                            <a href="" class="ver-mas-imagen"><img class="producto-imagen" src="" alt="Imagen de producto" /></a>
                            <div class="info">
                                <p class="nombre-producto"> </p>
                                <p class="descripcion-producto"> </p>
                                <p class="precio-producto"></p>
                            </div>
                            <div id="botones">
                                <a href="" class="ver-mas"><button id="boton">Ver más</button></a>
                            </div>
                        </div>
                    </div>

                </article>





                <h3 class="secc">Ropa Mujeres</h3>
                <article class="productos">


                    <div class="remera-mujer">
                        <div class="remera-img">
                            <a href="" class="ver-mas-imagen"><img class="producto-imagen" src="" alt="Imagen de producto" /></a>
                            <div class="info">
                                <p class="nombre-producto"> </p>
                                <p class="descripcion-producto"> </p>
                                <p class="precio-producto"></p>
                            </div>
                            <div id="botones">
                                <a href="" class="ver-mas"><button id="boton">Ver más</button></a>      </div>
                        </div>
                    </div>

                    <div class="remera-mujer">
                        <div class="remera-img">
                            <a href="" class="ver-mas-imagen"><img class="producto-imagen" src="" alt="Imagen de producto" /></a>
                            <div class="info">
                                <p class="nombre-producto"> </p>
                                <p class="descripcion-producto"> </p>
                                <p class="precio-producto"></p>
                            </div>
                            <div id="botones">
                                <a href="" class="ver-mas"><button id="boton">Ver más</button></a>      </div>
                        </div>
                    </div>

                    <div class="remera-mujer">
                        <div class="remera-img">
                            <a href="" class="ver-mas-imagen"><img class="producto-imagen" src="" alt="Imagen de producto" /></a>
                            <div class="info">
                                <p class="nombre-producto"> </p>
                                <p class="descripcion-producto"> </p>
                                <p class="precio-producto"></p>
                            </div>
                            <div id="botones">
                                <a href="" class="ver-mas"><button id="boton">Ver más</button></a>      </div>
                        </div>
                    </div>

                    <div class="remera-mujer">
                        <div class="remera-img">
                            <a href="" class="ver-mas-imagen"><img class="producto-imagen" src="" alt="Imagen de producto" /></a>
                            <div class="info">
                                <p class="nombre-producto"> </p>
                                <p class="descripcion-producto"> </p>
                                <p class="precio-producto"></p>
                            </div>
                            <div id="botones">
                                <a href="" class="ver-mas"><button id="boton">Ver más</button></a>      </div>
                        </div>
                    </div>

                </article>



                <h3 class="secc">Accesorios</h3>
                <article class="productos">

                    <div class="accesorios">
                        <div class="remera-img">
                            <a href="" class="ver-mas-imagen"><img class="producto-imagen" src="" alt="Imagen de producto" /></a>
                            <div class="info">
                                <p class="nombre-producto"> </p>
                                <p class="descripcion-producto"> </p>
                                <p class="precio-producto"></p>
                            </div>
                            <div id="botones">
                                <a href="" class="ver-mas"><button id="boton">Ver más</button></a>      </div>
                        </div>
                    </div>



                    <div class="accesorios">
                        <div class="remera-img">
                            <a href="" class="ver-mas-imagen"><img class="producto-imagen" src="" alt="Imagen de producto" /></a>
                            <div class="info">
                                <p class="nombre-producto"></p>
                                <p class="descripcion-producto"></p>
                                <p class="precio-producto"></p>
                            </div>
                            <div id="botones">
                                <a href="" class="ver-mas"><button id="boton">Ver más</button></a>      </div>
                        </div>
                    </div>


                    <div class="accesorios">
                        <div class="remera-img">
                            <a href="" class="ver-mas-imagen"><img class="producto-imagen" src="" alt="Imagen de producto" /></a>
                            <div class="info">
                                <p class="nombre-producto"></p>
                                <p class="descripcion-producto"></p>
                                <p class="precio-producto"></p>
                            </div>
                            <div id="botones">
                                <a href="" class="ver-mas"><button id="boton">Ver más</button></a>      </div>
                        </div>
                    </div>

                    <div class="accesorios">
                        <div class="remera-img">
                            <a href="" class="ver-mas-imagen"><img class="producto-imagen" src="" alt="Imagen de producto" /></a>
                            <div class="info">
                                <p class="nombre-producto"></p>
                                <p class="descripcion-producto"></p>
                                <p class="precio-producto"></p>
                            </div>
                            <div id="botones">
                                <a href="" class="ver-mas"><button id="boton">Ver más</button></a>      </div>
                        </div>
                    </div>


                </article>
            </div>

        </main>
        )
    }
}

export default Home