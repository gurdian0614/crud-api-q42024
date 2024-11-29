
const Producto = () => {
    return (
        <div className="container-fluid">
            <div className="row mt-3">
                <div className="col-md-4 offset-md-4">
                    <div className="d-grid mx-auto">
                        <button className="btn btn-success" data-bs-toggle="modal" data-bs-target="#modalProducto">
                            <i className="fa solid fa-circle-plus" /> Crear Producto
                        </button>
                    </div>
                </div>
            </div>

            <div className="row mt-3">
                <div className="col-12 col-lg-8 offset-0 offset-lg-2">
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Producto</th>
                                    <th>Descripción</th>
                                    <th>Categoría</th>
                                    <th>Precio</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody className="table-group-divider"></tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div id='modalProducto' className="modal fade" aria-hidden='true'>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <label className="h5">Modal Producto</label>
                            <button className="btn-close" data-bs-dismiss="modal" aria-label="close" />
                        </div>
                        <div className="modal-body">
                            <input type='hidden' id='id' />
                            <div className="input-group mb-3">
                                <span className="input-group-text"><i className="fa-solid fa-gift" /></span>
                                <input type='text' id='title' className="form-control" placeholder="Nombre del producto" />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text"><i className="fa-solid fa-comment" /></span>
                                <input type='text' id='description' className="form-control" placeholder="Descripción" />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text"><i className="fa-solid fa-dollar-sign" /></span>
                                <input type='number' id='price' className="form-control" placeholder="Precio" />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-success">
                                <i className="fa-solid fa-floppy-disk" /> Guardar
                            </button>
                            <button id="btnCerrarModal" className="btn btn-danger" data-bs-dismiss='modal'>Cerrar</button>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Producto