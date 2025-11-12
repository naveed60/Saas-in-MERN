import React, {useEffect, useState} from 'react'
import axios from 'axios'
import ProductCard from '../components/ProductCard'

export default function ProductGrid({ searchQuery = '', selectedCategory = null }){
  const [items,setItems] = useState([])
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState('')

  useEffect(()=>{
    let cancel = false
    async function fetch(){
      setLoading(true)
      setError('')
      try {
        const params = {}
        if (searchQuery) params.search = searchQuery
        if (selectedCategory?.apiValue) params.category = selectedCategory.apiValue
        const res = await axios.get('http://localhost:5000/api/products',{params})
        if (!cancel) setItems(res.data.items)
      } catch (err) {
        if (!cancel) setError('Unable to load products right now.')
      } finally {
        if (!cancel) setLoading(false)
      }
    }
    fetch()
    return ()=>{ cancel = true }
  },[searchQuery, selectedCategory])

  return (
    <section className="product-section">
      <div className="product-section__header">
        <div>
          <p className="eyebrow">Handpicked for you</p>
          <h2>Popular Products</h2>
        </div>
        {selectedCategory?.label && (
          <span className="pill">{selectedCategory.label}</span>
        )}
      </div>
      {loading && <p className="muted">Loading products...</p>}
      {error && !loading && <p className="error-text">{error}</p>}
      {!loading && !error && !items.length && (
        <p className="muted">No products match your filters.</p>
      )}
      <div className="product-grid">
        {items.map(it=> <ProductCard key={it._id} p={it} />)}
      </div>
    </section>
  )
}
