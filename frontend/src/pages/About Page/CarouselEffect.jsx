import TomCruise from '../../Images/Carousel Pic 1.png';
import EmmaWatson from '../../Images/Carousel Pic 2.png';
import WillSmith from '../../Images/Carousel Pic 3.png';
import { CiTwitter } from 'react-icons/ci';
import { FaInstagram } from 'react-icons/fa';
import { CiLinkedin } from 'react-icons/ci';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function CarouselEffect() {
  const CarouselData = [
    { id: 0, image: TomCruise, title: 'Tom Cruise', designation: 'Founder & Chairman' },
    { id: 1, image: EmmaWatson, title: 'Emma Watson', designation: 'Managing Director' },
    { id: 2, image: WillSmith, title: 'Will Smith', designation: 'Product Designer' },
    { id: 3, image: TomCruise, title: 'Tom Cruise', designation: 'Founder & Chairman' },
    { id: 4, image: EmmaWatson, title: 'Emma Watson', designation: 'Managing Director' },
    { id: 5, image: WillSmith, title: 'Will Smith', designation: 'Product Designer' },
  ];

  return (
    <div className="w-4/5 mx-auto px-10 my-20">
      <Swiper
        className="mySwiper"
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={50}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 2000 }}
        pagination={{ clickable: true }}
        navigation={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {CarouselData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex flex-col rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gray-200 w-full flex justify-center items-center h-66 pt-6">
                <img src={item.image} alt={item.title} className="h-full object-contain" />
              </div>

              <div className="flex flex-col items-left gap-1 p-4">
                <h1 className="text-lg font-semibold">{item.title}</h1>
                <p className="text-gray-500 text-sm">{item.designation}</p>
                <div className="flex  gap-4 mt-2">
                  <CiTwitter className="text-2xl cursor-pointer hover:text-blue-500 transition" />
                  <FaInstagram className="text-2xl cursor-pointer hover:text-pink-500 transition" />
                  <CiLinkedin className="text-2xl cursor-pointer hover:text-blue-700 transition" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CarouselEffect;
