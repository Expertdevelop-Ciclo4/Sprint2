import '../styles/ModificarProduct.css'

function ModificarProduct() {
    return (
        <div className="position-absolute top-50 start-50">
            <h1 >Propiedades</h1>
            <div className='propiedadesproduct'>
                <div class="row">
                    <label for="formGroupExampleInput" class="form-label">Example label</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input placeholder"/>
                </div>
                <div class="row">
                    <label for="formGroupExampleInput2" class="form-label">Another label</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder"/>
                </div>
                <div class="row">
                    <label for="formGroupExampleInput" class="form-label">Example label</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input placeholder"/>
                </div>
                <div class="row">
                    <label for="formGroupExampleInput" class="form-label">Example label</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input placeholder"/>
                </div>

            </div>
            <div className='row'>
            <button type="button" class="btn btn-primary">Primary</button>
            <button type="button" class="btn btn-dark">Dark</button>
            </div>

        </div>
    )
}
export default ModificarProduct;