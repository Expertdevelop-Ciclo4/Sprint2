import React from "react";


const Ventas = ()=>{
    return (
        <div class="venta">
            <h1 className="title">Lista de ventas</h1>
            <div className="col-auto bg-body p-5 text-center">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Item</th>
                            <th scope="col">Fecha</th>
                            <th scope="col">IdVenta</th>
                            <th scope="col">Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Ventas;