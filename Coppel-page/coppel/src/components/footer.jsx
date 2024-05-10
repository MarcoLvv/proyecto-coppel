export function Footer(){
    return(
    <footer className="bg-blue-900 text-white font-sans">
        {/* <div className="bg-blue-900 text-white font-sans"> */}
            <div className="container mx-auto px-4 py-8">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <img src="https://placehold.co/200x50/ffffff/000000?text=Coppel+Logo" alt="Coppel logo, a white text on a black background" className="h-12" />
                    </div>
                    <div className="flex items-center">
                        <div className="mr-4">
                            <img src="https://placehold.co/50x30/ffffff/000000?text=Accertify" alt="Accertify logo, a white text on a black background" className="h-6" />
                            <img src="https://placehold.co/50x30/ffffff/000000?text=Secure" alt="Secure logo, a white text on a black background" className="h-6" />
                        </div>
                        <div className="flex">
                            <img src="https://placehold.co/30x30/ffffff/000000?text=Google+Play" alt="Google Play logo, a white icon on a black background" className="h-6 mr-2" />
                            <img src="https://placehold.co/30x30/ffffff/000000?text=App+Store" alt="App Store logo, a white icon on a black background" className="h-6 mr-2" />
                            <img src="https://placehold.co/30x30/ffffff/000000?text=AppGallery" alt="AppGallery logo, a white icon on a black background" className="h-6" />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-5 gap-4 mb-8">
                    <div>
                        <h3 className="text-lg font-bold mb-2">ACERCA DE COPPEL</h3>
                        <ul className="text-sm">
                            <li>Acerca de nosotros</li>
                            <li>Trabaja con nosotros</li>
                            <li>Proveedores</li>
                            <li>Coppel Pay</li>
                            <li>Vende con nosotros</li>
                            <li>BanCoppel</li>
                            <li>Afore Coppel</li>
                            <li>Sala de prensa</li>
                            <li>Fundación Coppel</li>
                            <li>App Coppel</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-2">ATENCIÓN A CLIENTES</h3>
                        <ul className="text-sm">
                            <li>Coppel Soluciones</li>
                            <li>Cómo comprar</li>
                            <li>Beneficios Coppel</li>
                            <li>Métodos de pago</li>
                            <li>Devoluciones y Garantías</li>
                            <li>Centro de ayuda</li>
                            <li>Quejas y sugerencias</li>
                            <li>Factura electrónica</li>
                            <li>Ventas Corporativas</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-2">PUBLICACIONES COPPEL</h3>
                        <ul className="text-sm">
                            <li>Blog Mejora Tu vida</li>
                            <li>Coppel Max</li>
                            <li>Cumplimiento Grupo Coppel</li>
                            <li>Revista Coppel</li>
                            <li>Periódicos y Revistas Coppel</li>
                            <li>Revista Coppel Motos</li>
                            <li>Fashion Market</li>
                            <li>Mejora tus finanzas</li>
                            <li>Notas de interés</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-2">DESTACADOS</h3>
                        <ul className="text-sm">
                            <li>Ropa deportiva</li>
                            <li>Mi look PV</li>
                            <li>Semana Santa</li>
                            <li>Celulares</li>
                            <li>Laptops</li>
                            <li>Consolas de Videojuegos</li>
                            <li>Tablets</li>
                            <li>Tenis Deportivos</li>
                            <li>Tenis Deportivos para Mujeres</li>
                            <li>Celulares desbloqueados</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-2">REDES SOCIALES</h3>
                        <ul className="text-sm">
                            <li><i className="fab fa-facebook mr-2"></i>Facebook</li>
                            <li><i className="fab fa-instagram mr-2"></i>Instagram</li>
                            <li><i className="fab fa-youtube mr-2"></i>YouTube</li>
                            <li><i className="fab fa-tiktok mr-2"></i>TikTok</li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-between items-center mb-4">
                    <div className="flex">
                        <a href="#" className="mr-4">Aviso de privacidad</a>
                        <a href="#" className="mr-4">Términos y condiciones</a>
                        <a href="#" className="mr-4">Aviso de no discriminación</a>
                        <a href="#" className="mr-4">Seguridad en Coppel.com</a>
                        <a href="#" className="mr-4">Mapa del sitio</a>
                        <a href="#" className="bg-yellow-500 text-blue-900 px-4 py-2 rounded-full">Coppel Argentina</a>
                    </div>
                </div>
                <div className="text-sm mb-4">
                    Todos los precios en Coppel.com son en pesos mexicanos e incluyen impuestos. Los precios y promociones de nuestro sitio web son exclusivos de Coppel.com. Los abonos quincenales, el plazo o el pago inicial pueden variar según el margen de crédito y el historial de pago de cada cliente. Los quincenales contemplan: 24, 36, 48, 60 o 72 quincenas para muebles y 24 quincenas para ropa. Los productos de Marketplace que lleves con tu crédito Coppel, cuentan con un plazo de 24 quincenas y son financiados con Coppel Pay.
                </div>
                <div className="text-sm">
                    2024 © Coppel todos los derechos reservados
                </div>
            </div>
            <div className="fixed bottom-0 right-0 mb-4 mr-4">
                <button className="bg-yellow-500 text-blue-900 px-4 py-2 rounded-full">
                    <i className="fas fa-plus mr-2"></i>
                    oferta del día
                </button>
            </div>
        {/* </div> */}
    </footer>
    )
}