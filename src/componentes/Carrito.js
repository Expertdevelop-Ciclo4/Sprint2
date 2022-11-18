import React from "react";
import producto from '../PRODUCTO.png';
import '../styles/Carrito.css';

const Lista = () => {
    return (
        <div>
            <h1 className="title">Carrito</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Imagen</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Producto</th>
                        <th scope="col">Valor</th>
                        <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th ><img className="img-carrito" src={producto} alt="..."/></th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>50.000</td>
                    </tr>
                    <tr>
                    <th ><img src={producto} className="img-carrito" alt="..."/></th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>50.000</td>
                    </tr>
                    <tr>
                    <th ><img src={producto} className="img-carrito" alt="..."/></th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                        <td>50.000</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Lista;