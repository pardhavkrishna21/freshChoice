import React from 'react'
import capsicumImg from '../assets/fruits/capsicum.jpg'
import mirchiImg from '../assets/fruits/mirchi.jpg'
import onionImg from '../assets/fruits/onion.jpg'
import orangeImg from '../assets/fruits/orange.jpg'
import potatoImg from '../assets/fruits/potato.jpg'
import strawberryImg from '../assets/fruits/strawberry.jpg'
import tomatoImg from '../assets/fruits/tomato.jpg'

const products = {
  vegetables: [
    { id: 1, name: 'Tomato', price: 35, unit: 'kg', image: tomatoImg },
    { id: 2, name: 'Potato', price: 25, unit: 'kg', image: potatoImg },
    // { id: 3, name: 'Spinach', price: 20, unit: 'bunch' },
    { id: 4, name: 'Onion', price: 30, unit: 'kg', image: onionImg },
    { id: 5, name: 'Capsicum', price: 55, unit: 'kg', image: capsicumImg },
    { id: 6, name: 'Mirchi', price: 75, unit: 'kg', image: mirchiImg },
  ],
  fruits: [
    { id: 10, name: 'Apple', price: 120, unit: 'kg' },
    { id: 11, name: 'Banana', price: 50, unit: 'dozen' },
    { id: 12, name: 'Orange', price: 80, unit: 'kg', image: orangeImg },
    { id: 13, name: 'Strawberry', price: 180, unit: 'box', image: strawberryImg },
  ]
}

function ProductList({ items }) {
  return (
    <ul className="product-grid">
      {items.map(product => (
        <li key={product.id} className="product-card">
          {product.image && (
            <img
              className="product-image"
              src={product.image}
              alt={product.name}
            />
          )}
          <div className="product-info">
            <strong>{product.name}</strong>
            <span className="product-price">₹{product.price} / {product.unit}</span>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default function Products(){
  return (
    <div className="page products-page">
      <h2>Our Products</h2>
      <section>
        <h3>Vegetables</h3>
        <ProductList items={products.vegetables} />
      </section>

      <section>
        <h3>Fruits</h3>
        <ProductList items={products.fruits} />
      </section>
    </div>
  )
}
