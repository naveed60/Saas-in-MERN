import React, {useEffect, useState} from 'react'
import axios from 'axios'
import ProductCard from '../components/ProductCard'

export default function ProductGrid(){
  const [items,setItems] = useState([])
  const [q,setQ] = useState('')
  const [category,setCategory] = useState('')

  useEffect(()=>{
    fetch()
  },[q,category])

  async function fetch(){
    const params = {}
    if (q) params.search = q
    if (category) params.category = category
    const res = await axios.get('http://localhost:5000/api/products',{params})
    setItems(res.data.items)
  }

  return (
    <div style={{marginTop:20}}>
      <div style={{display:'flex',gap:12,marginBottom:12}}>
        <input placeholder="Search products" value={q} onChange={e=>setQ(e.target.value)} />
        <select value={category} onChange={e=>setCategory(e.target.value)}>
          <option value="">All</option>
          <option value="Clothing">Clothing</option>
          <option value="Electronics">Electronics</option>
        </select>
      </div>
      <div className="product-grid">
        {items.map(it=> <ProductCard key={it._id} p={it} />)}
      </div>
    </div>
  )
}
