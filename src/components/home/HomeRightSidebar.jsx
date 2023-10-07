import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import WorkingModal from "../shared/WorkingModal";


const HomeRightSidebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <aside className="bg-white shadow h-screen myContainer pt-10 fixed w-full">
    {
      isOpen && <WorkingModal  isOpen={isOpen} setIsOpen={setIsOpen}/>
    }
      {/* What's going on */}
      <div onClick={()=>setIsOpen(true)}>
      <div  className="p-3 flex flex-col capitalize">
        <h4 className="font-semibold">What's going on</h4>
        <div className="flex flex-col space-y-1 ml-2 border-l-2 border-gray-300 pl-2">
          <h5 className="text-sm underline">
            Coronal mass emission just happened!
          </h5>
          <h5 className="text-sm underline">Asteroid near earth-orbit!</h5>
          <h5 className="text-sm underline">Space news roundup</h5>
        </div>
      </div>
      {/* Did you know? */}
      <div className="p-3 flex flex-col capitalize">
        <h4 className="font-semibold">Did you know?</h4>
        <div className="flex flex-col space-y-1 ml-2 border-l-2 border-gray-300 pl-2">
          <h5 className="text-sm underline">Exoplanet habitability</h5>
          <h5 className="text-sm underline">Dark matter and dark energy</h5>
          <h5 className="text-sm underline">Tidal Locking</h5>
        </div>
      </div>
      {/* Inside Nasa  */}
      <div className="p-3 flex flex-col capitalize">
        <h4 className="font-semibold">Inside Nasa</h4>
        <div className="flex flex-col space-y-1 ml-2 border-l-2 border-gray-300 pl-2">
          <h5 className="text-sm underline">Astronomy events calendar</h5>
          <h5 className="text-sm underline">Women in space </h5>
          <h5 className="text-sm underline">Nasa's future mission</h5>
        </div>
      </div>
      </div>

      {/* astronomy pictures */}
      <div className="border-t-2 border-gray-100 py-2 mt-7">
        <div className="flex justify-between items-center">
          <div>
            <h4 className="capitalize font-bold">astronomy pictures</h4>
            <h6 className="text-xs font-medium">Only the best till now.</h6>
          </div>
          <button className="bg-neutral-200 font-medium px-4 py-2 rounded-full text-xs">
            See All
          </button>
        </div>
      </div>

      <div>
      <Swiper
        spaceBetween={30}
        effect="fade"
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide >
        <img
          src="https://cdn.discordapp.com/attachments/1147637810308857969/1147855756331331646/shutterstock-1041249343.png"
          className="rounded-xl max-w-[400px] min-w-[430px] max-h-[300px] min-h-[300px] object-cover"
          alt=""
        />
        </SwiperSlide>
        <SwiperSlide >
        <img
          src="https://images.pexels.com/photos/1275413/pexels-photo-1275413.jpeg"
          className="rounded-xl max-w-[400px] min-w-[430px] max-h-[300px] min-h-[300px] object-cover"
          alt=""
        />
        </SwiperSlide>
        <SwiperSlide >
        <img
          src="https://images.pexels.com/photos/360912/pexels-photo-360912.jpeg"
          className="rounded-xl max-w-[400px] min-w-[430px] max-h-[300px] min-h-[300px] object-cover"
          alt=""
        />
        </SwiperSlide>
        
      </Swiper>
      
      </div>
    </aside>
  );
};

export default HomeRightSidebar;
