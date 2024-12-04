import { useEffect } from "react"
import Campo from "./Campo"
import useProducto from "../hooks/useProducto"

const Producto = () => {
    const { products, getProductos } = useProducto()
    
    useEffect(() => {
        getProductos()
        console.log(products)
    }, [])

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
                            <input type="hidden" id='id' />
                            <Campo idCampo='title' iconName='fa-solid fa-gift' placeholderName="Nombre del producto" tipoCampo="text" />
                            <Campo idCampo='description' iconName='fa-solid fa-comment' placeholderName="Descripción" tipoCampo="text" />
                            <Campo idCampo='price' iconName='fa-solid fa-dollar-sign' placeholderName="Precio" tipoCampo="number" />
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