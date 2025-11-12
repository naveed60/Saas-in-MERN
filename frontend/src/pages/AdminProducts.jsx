import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function AdminProducts(){
  const [items,setItems] = useState([])
  const [title,setTitle] = useState('')
  const [price,setPrice] = useState('')
  const [category,setCategory] = useState('')
  const [editing,setEditing] = useState(null)
  const token = localStorage.getItem('token')
  useEffect(()=>{ fetch() },[])
  async function fetch(){
    const res = await axios.get('http://localhost:5000/api/products')
    setItems(res.data.items)
  }
  async function add(e){
    e.preventDefault()
    await axios.post('http://localhost:5000/api/products',{title,price,category},{headers:{Authorization:`Bearer ${token}`}})
    setTitle(''); setPrice(''); setCategory(''); fetch()
  }
  async function del(id){
    await axios.delete(`http://localhost:5000/api/products/${id}`,{headers:{Authorization:`Bearer ${token}`}})
    fetch()
  }
  async function startEdit(p){ setEditing(p) }
  async function saveEdit(e){
    e.preventDefault()
    await axios.put(`http://localhost:5000/api/products/${editing._id}`,editing,{headers:{Authorization:`Bearer ${token}`}})
    setEditing(null); fetch()
  }
  return (
    <div className="container">
      <h2>Admin: Products</h2>
      <form onSubmit={add} style={{display:'flex',gap:8,marginBottom:16}}>
        <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Title" required />
        <input value={price} onChange={e=>setPrice(e.target.value)} placeholder="Price" type="number" required />
        <input value={category} onChange={e=>setCategory(e.target.value)} placeholder="Category" />
        <button type="submit">Add</button>
      </form>
      <table style={{width:'100%',background:'#fff',borderRadius:8}}>
        <thead><tr><th>Title</th><th>Price</th><th>Category</th><th></th></tr></thead>
        <tbody>
          {items.map(p=> editing && editing._id===p._id ? (
            <tr key={p._id}>
              <td><input value={editing.title} onChange={e=>setEditing({...editing,title:e.target.value})} /></td>
              <td><input value={editing.price} onChange={e=>setEditing({...editing,price:e.target.value})} /></td>
              <td><input value={editing.category} onChange={e=>setEditing({...editing,category:e.target.value})} /></td>
              <td><button onClick={saveEdit}>Save</button><button onClick={()=>setEditing(null)}>Cancel</button></td>
            </tr>
          ) : (
            <tr key={p._id}>
              <td>{p.title}</td>
              <td>${p.price}</td>
              <td>{p.category}</td>
              <td><button onClick={()=>startEdit(p)}>Edit</button> <button onClick={()=>del(p._id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
