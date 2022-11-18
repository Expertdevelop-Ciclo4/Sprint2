import '../styles/AdministracionProductos.css'

function AdministracionProductos() {

    return (
        <div>
            <h1 className='title'>Administracion Productos</h1>
            <div class="card">
                <div class="card-header">
                    <h2>Crear nuevo producto</h2>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col">
                            <label for="exampleFormControlInput1" class="form-label">Nombre</label>
                            <input type="text" class="form-control" placeholder="First name" aria-label="First name" />
                        </div>
                        <div class="col">
                            <label for="exampleFormControlInput1" class="form-label">Descripcion</label>
                            <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <label for="exampleFormControlInput1" class="form-label">Precio</label>
                            <input type="text" class="form-control" placeholder="First name" aria-label="First name" />
                        </div>
                        <div class="col">
                            <label for="exampleFormControlInput1" class="form-label">Cantidad</label>
                            <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <label for="exampleFormControlInput1" class="form-label">Imagen</label>
                            <input type="text" class="form-control" placeholder="First name" aria-label="First name" />
                        </div>
                        <div class="col">
                            <label for="exampleFormControlInput1" class="form-label">Serial</label>
                            <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" />
                        </div>
                    </div>
                    <div className="w-50 p-3">
                        <a href="/" class="btn btn-primary">Guardar</a>
                        <a href="/" class="btn btn-danger">Limpiar</a>
                    </div>
                    
                    
                </div>
            </div>

        </div>
    )
}
export default AdministracionProductos;