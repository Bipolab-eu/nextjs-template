'use client'

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../../styles/swiper.css';

// import required modules
import { Pagination } from 'swiper/modules';
import Image from 'next/image';

interface Props {
  data: any;
}

export const Slider: React.FC<Props> = ({ data }) => {

  console.log('Slider data:', data);

  return (
    <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
      {
        data.files.map((file: any) => (
          <SwiperSlide key={file.id}>
            <Image
              src={`http://localhost:1337${file.url}`}
              alt={file.name}
              height={500}
              width={500}
              priority
            />
          </SwiperSlide>
        ))
      }
    </Swiper>
  );
}
