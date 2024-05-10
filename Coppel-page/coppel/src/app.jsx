import { useState } from 'react'
import { BarraNavegacion } from '@/components/navegador'
import {CarruselProductos} from '@/components/productos-carrusel'
import {ProductosInteres} from '@/components/productos-interes'
import {MejoresMarcas} from '@/components/mejores-marcas'
import {OfertasDia} from '@/components/ofertas-dia'
import {ProductoFavoritos} from '@/components/productos-favorito'
import {MasBuscados} from '@/components/mas-buscados'
import {Footer} from '@/components/footer'
import {ListaProductos} from '@/components/productos'


import '@/output.css'
import '@/assets/estilos/slick.css'
import '@/assets/estilos/slick-theme.css'
import '@/assets/estilos/carrusel.css'

export function App() {
  return (
    <>
    <BarraNavegacion />
    <CarruselProductos /> 
    <ListaProductos/>
    <ProductosInteres />
    <MejoresMarcas/>
    <OfertasDia/>
    <ProductoFavoritos/>
    <MasBuscados/> 
    <Footer/>
    </>
  )
}