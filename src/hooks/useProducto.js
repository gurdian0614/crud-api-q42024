import { useState } from "react"
import axios from "axios"
import { alertaSuccess, alertaError, alertaWarning } from "../alertas"
import Swal from "sweetalert2"

const useProducto = () => {
    const [products, setProducts] = useState([])
    const [id, setId] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [titleModal, setTitleModal] = useState('')
    const [operation, setOperation] = useState(1)

    const url = 'https://api.escuelajs.co/api/v1/products'

    const getProductos = async () => {
        const response = await axios.get(url)
        setProducts(response.data)
    }

    return {
        products,
        getProductos,
    }
}

export default useProducto