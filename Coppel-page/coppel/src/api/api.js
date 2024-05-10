import axios from 'axios'

export const obtenerProductos = async () => {
    try {
        const productos = await axios.get('http://localhost:8000/productos/api/v1/productos/');
        // console.log(productos.data); // Verifica la estructura de los datos de respuesta
        return productos.data; // Devuelve los datos de respuesta
    } catch (error) {
        console.error('Error al obtener los productos:', error);
        throw error; // Lanza el error para que pueda ser manejado por el código que llama a esta función
    }
}