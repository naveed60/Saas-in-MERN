import React from 'react'
import { Link } from 'react-router-dom'
export default function ProductCard({p}){
  return (
    <div className="card">
      <img src={p.images?.[0] || 'https://via.placeholder.com/400x300'} alt={p.title} />
      <h3>{p.title}</h3>
      <p style={{color:'#0b6b37',fontWeight:700}}>${p.price.toFixed(2)}</p>
      <p style={{color:'#666'}}>{p.category}</p>
      <Link to={`/product/${p._id}`}>View</Link>
    </div>
  )
}
