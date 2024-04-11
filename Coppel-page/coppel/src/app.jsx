import { useState } from 'react'
import { BarraNavegacion } from './navegador'
import {CarruselProductos} from './productos-carrusel'
import {ProductosInteres} from './productos-interes'
import {MejoresMarcas} from './mejores-marcas'
import {OfertasDia} from './ofertas-dia'
import {ProductoFavoritos} from './productos-favorito'
import {MasBuscados} from './mas-buscados'
import {Footer} from './footer'
import './output.css'
import './resources/estilos/slick.css'
import './resources/estilos/slick-theme.css'
import './resources/estilos/carrusel.css'

export function App() {
  return (
    // <div className="">sHola mundsso</div>
    <>
    <BarraNavegacion />
    <CarruselProductos /> 
    <ProductosInteres />
    <MejoresMarcas/>
    <OfertasDia/>
    <ProductoFavoritos/>
    <MasBuscados/> 
    <Footer/>
    </>
  )
}