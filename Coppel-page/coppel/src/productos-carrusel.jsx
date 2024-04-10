export function CarruselProductos(){
    return(
    <>
    <div className="flex justify-between">
        <div className="w-3/4 mr-4">
            <img src="https://placehold.co/800x400/blue/white?text=Main+Banner+Image" alt="Main banner image showing a blue background with white text 'Main Banner Image'" className="w-full" />
            <div className="bg-blue-700 text-white py-4 px-6 mt-4">
                <h2 className="text-2xl font-bold mb-2">Hasta 20% de descuento </h2>
                <p className="mb-4"> en camas, colchones y más para tu recámara </p>
                <a href="#" className="bg-white text-blue-700 py-2 px-4 rounded-full">Ver más</a>
            </div>
        </div>
        <div className="w-1/4">
                <img src="https://placehold.co/300x200/green/white?text=50%+Off+Shoes+Banner" alt="Banner showing 50% off on shoes with a green background and white text" className="mb-4" />
                <img src="https://placehold.co/300x200/yellow/black?text=25%+Off+Mattresses+Banner" alt="Banner showing 25% off on mattresses with a yellow background and black text" />
        </div>
    </div>
    </>
    )
}

