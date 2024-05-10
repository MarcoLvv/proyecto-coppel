import axios from 'axios'

export const obtenerProductos() = async () => {
    return (
        axios.get("http://127.0.0.1:8000/productos/api/v1/productos/")

    )




}