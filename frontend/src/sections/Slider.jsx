import React from 'react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

const slides = [
  { title: 'Autumn Sale', subtitle: 'Up to 50% off', img: 'https://picsum.photos/1200/400?random=1' },
  { title: 'New Arrivals', subtitle: 'Trending now', img: 'https://picsum.photos/1200/400?random=2' },
  { title: 'Limited Edition', subtitle: 'Shop now', img: 'https://picsum.photos/1200/400?random=3' }
]

export default function Slider(){
  return (
    <div className="slider container" style={{marginTop:20}}>
      <Swiper modules={[Navigation]} navigation loop slidesPerView={1}>
        {slides.map((s,i)=> (
          <SwiperSlide key={i}>
            <div style={{position:'relative'}}>
              <img src={s.img} alt={s.title} style={{width:'100%',height:320,objectFit:'cover',borderRadius:12}} />
              <div style={{position:'absolute',left:20,top:20,color:'#fff'}}>
                <h2>{s.title}</h2>
                <p>{s.subtitle}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
