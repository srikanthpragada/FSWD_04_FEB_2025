import React from 'react'

export default function Catalog(props) {
  return (
     <div>
      <h2>Products Catalog</h2>
      <table className="table table-bordered">
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
        {
           props.products.map( p =>  
              <tr>
                <td>{p.name}</td>
                <td>{p.price}</td>
              </tr>
          )
        }
      </table>
     </div>
  )
}
