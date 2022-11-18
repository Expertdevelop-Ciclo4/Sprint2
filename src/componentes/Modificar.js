import React from "react";
import '../styles/Modificar.css'
import producto from '../PRODUCTO.png'

function Modificar() {
    return (
        <div>
            <h1 className="title">Modificar producto</h1>
            <div className="productoGeneral">
                <div>
                    <nav className="navbar" style={{backgroundColor:'#256D85'}}>
                        <div class="container-fluid">
                            <a className="titlenavbar"  href="/">Productos</a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNav">
                                <ul class="navbar-nav">
                                    <li class="nav-item">
                                        <a class="nav-link active" style={{color:"white"}} aria-current="page" href="/">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" style={{color:"white"}} href="/">Features</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" style={{color:"white"}} href="/">Pricing</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link disabled" style={{color:"white"}} href="/">Disabled</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            <div className="imagenProducto">
                <img src={producto} alt=""/>
                
            </div>
        </div>
    )
}

export default Modificar;