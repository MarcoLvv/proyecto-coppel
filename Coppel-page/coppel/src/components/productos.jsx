import {obtenerProductos} from '@/api/api'
import { useEffect, useState } from 'react';
import {EvaluacionProductos} from '@/components/evaluacion'


export function ListaProductos(){
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        async function cargarProductos() {
            try {
                const products = await obtenerProductos();
                
                if (products && Array.isArray(products) && products.length > 0){
                setProductos(products); // Establece los productos en el estado
                console.log(products); // Muestra los datos de productos recibidos en la consola
                } 
                else{
                    console.error('Respuesta no válida o datos de productos vacíos:', products);
            }
            } catch (error) {
                console.error('Error al obtener los productos:', error);
            }
        };

        cargarProductos(); // Llama a la función para cargar los productos
    }, []); // El segundo argumento del useEffect es un array vacío para que el efecto se ejecute solo una vez al montar el componente

    return(
        <>
        <div className="container mx-auto px-4 py-8 bg-black">
            {productos.length > 0 ? (
                productos.map(producto => (
                    <EvaluacionProductos key={producto.id} producto={producto} />
                ))
            ) : (
                <p>No hay productos disponibles</p>
            )}
        </div>
        </>
    )
    }