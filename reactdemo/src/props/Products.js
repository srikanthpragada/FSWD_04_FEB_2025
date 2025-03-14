import React from 'react'

// Product component to display product details 
function Product({ product, tax }) {
  return (
    <tr>
      <td>{product.name}</td>
      <td className="text-end">{product.price}</td>
      <td className="text-end">{product.price + (product.price * tax / 100)}</td>
    </tr>
  )
}

// Products component to list all products 
export default function Products(props) {
  return (
    <div>
      <h2>Products</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Selling Price</th>
          </tr>
        </thead>
        <tbody>
          {
            props.products.map((p, idx) => <Product key={idx} product={p} tax={props.tax} />)
          }
        </tbody>
      </table>
    </div>
  )
}
