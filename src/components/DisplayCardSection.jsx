import React from 'react';
import './DisplayCardSection.css';
import DisplayCard from './DisplayCard.jsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const DisplayCardSection = ({ datas }) => {
    return (
        <div className="recomended-section">
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                navigation
                modules={[Navigation]}
                className="mySwiper"
            >
                {datas.map((data, index) => (
                    <SwiperSlide key={index} className="rcard">
                        <div className="dcard">
                        <DisplayCard data={data} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default DisplayCardSection;
