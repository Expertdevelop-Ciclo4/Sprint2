
import '../styles/ListaProductos.css'
import React from "react";
import producto from '../PRODUCTO.png';

const Lista = () => {
    return (
        <div>
            <h1 className='title'>Lista productos</h1>

            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card-header">
                        <img src={producto} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">An item</li>
                            <li class="list-group-item">A second item</li>
                            <li class="list-group-item">A third item</li>
                        </ul>
                        <div class="card-body">
                        <div class="d-grid gap-2 col-6 mx-auto">
                                <button class="btn btn-primary" type="button">Comprar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={producto} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">An item</li>
                            <li class="list-group-item">A second item</li>
                            <li class="list-group-item">A third item</li>
                        </ul>
                        <div class="card-body">
                        <div class="d-grid gap-2 col-6 mx-auto">
                                <button class="btn btn-primary" type="button">Comprar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={producto} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">An item</li>
                            <li class="list-group-item">A second item</li>
                            <li class="list-group-item">A third item</li>
                        </ul>
                        <div class="card-body">
                        <div class="d-grid gap-2 col-6 mx-auto">
                                <button class="btn btn-primary" type="button">Comprar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={producto} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">An item</li>
                            <li class="list-group-item">A second item</li>
                            <li class="list-group-item">A third item</li>
                        </ul>
                        <div class="card-body">
                        <div class="d-grid gap-2 col-6 mx-auto">
                                <button class="btn btn-primary" type="button">Comprar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={producto} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">An item</li>
                            <li class="list-group-item">A second item</li>
                            <li class="list-group-item">A third item</li>
                        </ul>
                        <div class="card-body">
                        <div class="d-grid gap-2 col-6 mx-auto">
                                <button class="btn btn-primary" type="button">Comprar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={producto} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">An item</li>
                            <li class="list-group-item">A second item</li>
                            <li class="list-group-item">A third item</li>
                        </ul>
                        <div class="card-body">
                            <div class="d-grid gap-2 col-6 mx-auto">
                                <button class="btn btn-primary" type="button">Comprar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Lista;
