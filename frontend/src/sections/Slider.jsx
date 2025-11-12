import React from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

const slides = [
  {
    tag: 'Bank Partner Offer',
    title: 'Easypaisa 10% Off',
    subtitle: 'Save up to Rs. 1,000 on every purchase',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1600&q=80'
  },
  {
    tag: 'Seasonal Sale',
    title: '11.11 Extravaganza',
    subtitle: 'Up to 30% off on Galaxy smartphones',
    image: 'https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1600&q=80'
  },
  {
    tag: 'New Arrivals',
    title: 'Wearables that Inspire',
    subtitle: 'Track fitness, calls, and productivity on the go',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1600&q=80'
  }
]

export default function Slider(){
  return (
    <div className="slider-shell">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        loop
        slidesPerView={1}
        className="slider-swiper"
      >
        {slides.map(slide => (
          <SwiperSlide key={slide.title}>
            <article className="slide-card">
              <img src={slide.image} alt={slide.title} className="slide-card__img" />
              <div className="slide-card__overlay">
                <p className="slide-card__tag">{slide.tag}</p>
                <h2>{slide.title}</h2>
                <p>{slide.subtitle}</p>
                <button className="primary-btn">Shop now</button>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
