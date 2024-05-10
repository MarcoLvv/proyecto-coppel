
export function EvaluacionProductos({producto}){
    return(
        <>
        <div className="mt-8 bg-white">
            <img src={producto.imagen} alt="" />
            <p className="text-sm">{producto.nombre}</p>
            <p className="font-bold">${producto.precio}</p>
        </div>
        </>

    )


}