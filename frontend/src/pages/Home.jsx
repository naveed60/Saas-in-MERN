import React from 'react'
import Slider from '../sections/Slider'
import ProductGrid from '../sections/ProductGrid'
export default function Home(){
  return (
    <div className="container">
      <header className="header">Shop Now</header>
      <main>
        <section className="hero">
          <div style={{flex:1}}>
            <h1>Modern MERN Store</h1>
            <p>Fast, beautiful and modular e-commerce starter</p>
          </div>
          <div style={{width:480}}>
            <img src="/assets/hero.png" alt="hero" style={{width:'100%'}} />
          </div>
        </section>
        <Slider />
        <ProductGrid />
      </main>
    </div>
  )
}
