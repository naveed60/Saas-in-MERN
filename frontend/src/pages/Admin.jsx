import React from 'react'
import { Link } from 'react-router-dom'
export default function Admin(){
  return (
    <div className="container">
      <h2>Admin panel</h2>
      <nav style={{marginBottom:20}}>
        <Link to="/admin/products">Products</Link> |{' '}
        <Link to="/admin/users">Users</Link> |{' '}
        <Link to="/admin/orders">Orders</Link>
      </nav>
      <div>Welcome, admin!</div>
    </div>
  )
}
