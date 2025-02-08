import React from 'react';
import { Navigation, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import LinkButton from './LinkButton';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Carousel = ({title, items}) => {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className='section-wrapper'>
      <h2 className="header-black">{title}</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item.image} alt={item.name} className="d-block w-100 h-100"/>
            <h2 className='text-black text-left text-uppercase '>
              {item.name}
            </h2>
            <LinkButton link={'/page/1'} text="shop now" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
