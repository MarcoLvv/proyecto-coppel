import Slider from "react-slick";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
};
export function OfertasDia(){
    return(
        <>
        <div className="mt-8 " >
            <h2 className="text-2xl font-bold mb-4 text-center pb-10 ">¡Ofertas del día!</h2>
            <Slider {...settings}>
     
                    <div className=" text-center card  ">
                        <div className="text-center card ">
                            <img src="src/assets/ofertas-dia/llanta.avif" alt="Image of a Rueda" className="mb-2 card " />
                            <p className="text-sm card">Llanta Goodride 185 70 Rin 14</p>
                            <p className="font-bold card">$999</p>
                        </div>
                    </div>


                <div className="text-center card ">
                    <div className="text-center card">
                        <img src="src/assets/ofertas-dia/scooter.avif" alt="Image of a hoverboard with a black background and white text" className="mb-2 card" />
                        <p className="text-sm cardPrecio card">Hoverboard Smart Scooter</p>
                        <p className="font-bold cardPrecio card">$4,999</p>
                    </div>
                </div>
                <div className="text-center card">
                    <div className="text-center card">  
                        <img src="src/assets/ofertas-dia/reloj.avif" alt="Image of a reloj" className="mb-2 card" />
                        <p className="text-sm card">Reloj Fossil FS5714 Café</p>
                        <p className="font-bold card">$9,199</p>
                    </div>
                </div>
                <div className="text-center card">
                    <div className="text-center card">
                        <img src="src/assets/ofertas-dia/librero.avif" alt="Image of a librero" className="mb-2 card" />
                        <p className="text-sm card">Librero Mobi Boston Chocolate</p>
                        <p className="font-bold card">$399</p>                       
                    </div>
                </div>
                <div className="text-center card">
                    <div className="text-center card"> 
                        <img src="src/assets/ofertas-dia/pantalla-led.avif" alt="Image of a camera with a blue background and white text" className="mb-2 card" />
                        <p className="text-sm card">Pantalla LED Hisense 55" Ultra HD 4K Smart TV 55A6H</p>
                        <p className="font-bold card">$7,999</p>
                    </div>
                </div>
            </Slider>
        </div>
        </>
    )
}