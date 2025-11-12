import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function Login(){
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const nav = useNavigate()
  async function submit(e){
    e.preventDefault()
    const res = await axios.post('http://localhost:5000/api/auth/login',{email,password})
    localStorage.setItem('token',res.data.token)
    nav('/')
  }
  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={submit} style={{display:'flex',flexDirection:'column',gap:8,maxWidth:360}}>
        <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" />
        <input value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" type="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}
