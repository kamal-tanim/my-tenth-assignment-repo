import { Swiper, SwiperSlide } from "swiper/react";
import bg1 from "../assets/images/bg-1.png";
import bg3 from "../assets/images/bg-3.png";
import "swiper/css";
import { Autoplay } from "swiper/modules";

import homeNavImg1 from "../assets/images/homeNav-1.png"
import homeNavImg2 from "../assets/images/homeNav-2.png"
import homeNavImg3 from "../assets/images/homeNav-3.png"
import homeNavImg5 from "../assets/images/homeNav-5.png"
import homeNavImg6 from "../assets/images/homeNav-6.png"

const ImageCarousel = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      className="rounded-4xl w-auto "
      style={{
        backgroundImage: `url(${bg3})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <SwiperSlide className="p-5" >
        <div className="flex gap-5 p-5">
          <img src={homeNavImg1} className="rounded-lg h-120" />
          <div className="text-center flex flex-col items-center justify-center text-white">
            <h1 className="text-6xl ">Lorem ipsum dolor sit amet.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente iure eveniet fugit itaque doloremque atque magnam corporis in. Vitae veritatis a quod ratione totam cupiditate minima ducimus! Magnam, aliquid aperiam.</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="p-5" >
        <div className="flex gap-5 p-5 ">
          <img src={homeNavImg2} className="rounded-lg h-120" />
          <div className="text-center flex flex-col items-center justify-center text-white">
            <h1 className="text-6xl ">Lorem ipsum dolor sit amet.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente iure eveniet fugit itaque doloremque atque magnam corporis in. Vitae veritatis a quod ratione totam cupiditate minima ducimus! Magnam, aliquid aperiam.</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="p-5" >
        <div className="flex gap-5 p-5 ">

          <div className="text-center flex flex-col items-center justify-center text-white">
            <h1 className="text-6xl ">Lorem ipsum dolor sit amet.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente iure eveniet fugit itaque doloremque atque magnam corporis in. Vitae veritatis a quod ratione totam cupiditate minima ducimus! Magnam, aliquid aperiam.</p>
          </div>
          <img src={homeNavImg3} className="rounded-lg h-120" />
        </div>
      </SwiperSlide>
      <SwiperSlide className="p-5 " >
        <div className="flex gap-5 p-5 ">
          <img src={homeNavImg5} className="rounded-lg h-120" />
          <div className="text-center flex flex-col items-center justify-center text-white">
            <h1 className="text-6xl ">Lorem ipsum dolor sit amet.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente iure eveniet fugit itaque doloremque atque magnam corporis in. Vitae veritatis a quod ratione totam cupiditate minima ducimus! Magnam, aliquid aperiam.</p>
          </div>
        </div>
      </SwiperSlide>

    </Swiper>
  );
};

export default ImageCarousel;
