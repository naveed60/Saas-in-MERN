import React from 'react'
import { useParams } from 'react-router-dom'
export default function ProductPage(){
  const { id } = useParams()
  return <div className="container">Product {id}</div>
}
