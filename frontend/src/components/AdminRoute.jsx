import React from 'react'
import { Navigate } from 'react-router-dom'
export default function AdminRoute({children}){
  const token = localStorage.getItem('token')
  const user = token ? JSON.parse(atob(token.split('.')[1])) : null
  if (!token) return <Navigate to="/login" />
  if (!user?.isAdmin) return <Navigate to="/" />
  return children
}
