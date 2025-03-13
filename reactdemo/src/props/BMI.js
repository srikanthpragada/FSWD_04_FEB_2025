import React from 'react'

export default function BMI(props) {
  // calculate bmi index
  // find out category 

  return (
    <div>
        <h1>BMI Results</h1>
        <table className="table table-bordered">
            <tr>
                <td>Height</td>
                <td>{props.height}</td>
            </tr>
            <tr>
                <td>Weight</td>
                <td>{props.weight}</td>
            </tr>
            <tr>
                <td>BMI Index</td>
                <td>{props.bmiIndex}</td>
            </tr>
            <tr>
                <td>Category</td>
                <td>{props.category}</td>
            </tr>
        </table>
    </div>
  )
}
