import React, { useEffect, useRef, useState } from 'react'
import Slider from '../sections/Slider'
import ProductGrid from '../sections/ProductGrid'

const stripCategories = [
  { label: 'Mobiles', img: 'https://cdn-icons-png.flaticon.com/512/747/747376.png' },
  { label: 'Wireless Earbuds', img: 'https://cdn-icons-png.flaticon.com/512/3207/3207741.png' },
  { label: 'Smart Watches', img: 'https://cdn-icons-png.flaticon.com/512/1048/1048940.png' },
  { label: 'Trimmers', img: 'https://cdn-icons-png.flaticon.com/512/2904/2904896.png' },
  { label: 'Power Banks', img: 'https://cdn-icons-png.flaticon.com/512/1924/1924587.png' },
  { label: 'Wall Chargers', img: 'https://cdn-icons-png.flaticon.com/512/1048/1048949.png' },
  { label: 'Bluetooth Speakers', img: 'https://cdn-icons-png.flaticon.com/512/3626/3626956.png' },
  { label: 'Tablets', img: 'https://cdn-icons-png.flaticon.com/512/1049/1049968.png' }
]

const categoryApiMap = {
  Mobiles: 'Electronics',
  'Wireless Earbuds': 'Electronics',
  'Smart Watches': 'Electronics',
  Trimmers: 'Electronics',
  'Power Banks': 'Electronics',
  'Wall Chargers': 'Electronics',
  'Bluetooth Speakers': 'Electronics',
  Tablets: 'Electronics',
  'Air Purifiers': 'Electronics',
  'Personal Care': 'Electronics',
  'Mobile Accessories': 'Electronics',
  Laptops: 'Electronics',
  'TV & Home Appliances': 'Electronics',
  Auto: 'Electronics'
}

const sidebarSections = [
  {
    title: 'Categories',
    items: [
      'Mobiles',
      'Smart Watches',
      'Wireless Earbuds',
      'Air Purifiers',
      'Personal Care',
      'Mobile Accessories',
      'Bluetooth Speakers',
      'Power Banks',
      'Tablets',
      'Laptops',
      'TV & Home Appliances',
      'Auto'
    ]
  },
  {
    title: 'Popular Lists',
    items: [
      'Best Budget Phones',
      'Gaming Smartphones',
      'Top Camera Phones',
      'Wearables for Fitness',
      'Back to School'
    ]
  }
]

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="2" />
    <line x1="13.5" y1="13.5" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

const MicIcon = () => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="7" y="4" width="6" height="10" rx="3" stroke="currentColor" strokeWidth="2" />
    <path d="M10 15v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M6 11a4 4 0 0 0 8 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

const CloseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <line x1="5" y1="5" x2="15" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <line x1="15" y1="5" x2="5" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

export default function Home(){
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const stripRef = useRef(null)

  useEffect(()=>{
    function handleEsc(e){
      if(e.key === 'Escape') setSidebarOpen(false)
    }
    window.addEventListener('keydown', handleEsc)
    return ()=>window.removeEventListener('keydown', handleEsc)
  },[])

  useEffect(()=>{
    document.body.style.overflow = sidebarOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  },[sidebarOpen])

  const toggleSidebar = () => setSidebarOpen(prev => !prev)

  const handleCategoryClick = (label) => {
    setSelectedCategory(prev => prev === label ? '' : label)
  }

  const scrollStrip = (dir) => {
    stripRef.current?.scrollBy({ left: dir * 200, behavior: 'smooth' })
  }

  const activeCategory = selectedCategory
    ? { label: selectedCategory, apiValue: categoryApiMap[selectedCategory] || selectedCategory }
    : null

  return (
    <div className="home-page">
      <header className="home-hero">
        <div className="home-hero__primary">
          <button className="icon-button" aria-label="Open menu" onClick={toggleSidebar}>
            <span className="hamburger" />
          </button>
          <div className="brand">
            <span className="brand__logo">P</span>
            <span className="brand__text">PriceEye</span>
          </div>
          <form className="search-bar" onSubmit={e=>e.preventDefault()}>
            <input
              type="search"
              placeholder="Search..."
              value={searchValue}
              onChange={e=>setSearchValue(e.target.value)}
            />
            <button type="submit" aria-label="Search" className="search-bar__submit">
              <SearchIcon />
            </button>
            <button type="button" className="search-bar__mic" aria-label="Voice search">
              <MicIcon />
            </button>
          </form>
          <div className="hero-actions">
            <button className="ghost-btn">Log in</button>
            <button className="primary-btn">Register</button>
          </div>
        </div>
        <div className="category-strip">
          <button className="category-strip__nav" aria-label="Scroll categories left" onClick={()=>scrollStrip(-1)}>
            ‹
          </button>
          <div className="category-strip__scroller" ref={stripRef}>
            {stripCategories.map(cat => (
              <button
                key={cat.label}
                onClick={()=>handleCategoryClick(cat.label)}
                className={['category-chip', selectedCategory === cat.label ? 'active' : ''].join(' ').trim()}
              >
                <img src={cat.img} alt="" aria-hidden="true" />
                <span className="category-chip__label">{cat.label}</span>
              </button>
            ))}
          </div>
          <button className="category-strip__nav" aria-label="Scroll categories right" onClick={()=>scrollStrip(1)}>
            ›
          </button>
        </div>
      </header>
      <main className="home-content">
        <section className="hero-slider">
          <div className="hero-slider__inner">
            <Slider />
          </div>
        </section>
        <ProductGrid searchQuery={searchValue} selectedCategory={activeCategory} />
      </main>

      <div className={`sidebar-overlay ${sidebarOpen ? 'open' : ''}`} onClick={()=>setSidebarOpen(false)}>
        <aside className="sidebar-panel" onClick={e=>e.stopPropagation()} aria-live="polite">
          <div className="sidebar-panel__header">
            <div className="brand">
              <span className="brand__logo">P</span>
              <span className="brand__text">PriceEye</span>
            </div>
            <button className="icon-button" aria-label="Close menu" onClick={()=>setSidebarOpen(false)}>
              <CloseIcon />
            </button>
          </div>
          <button className="primary-btn full">Login</button>
          <div className="sidebar-links">
            <button>Track my Order</button>
            <button>Launch a Complaint</button>
          </div>
          {sidebarSections.map(section => (
            <div key={section.title} className="sidebar-section">
              <p className="sidebar-section__title">{section.title}</p>
              <ul>
                {section.items.map(item => (
                  <li key={item}>
                    <button onClick={()=>{
                      setSelectedCategory(prev => prev === item ? '' : item)
                      setSidebarOpen(false)
                    }}>{item}</button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </aside>
      </div>
    </div>
  )
}
