import React from 'react'

export default function BMI(props) {
  // calculate bmi index
  // find out category 

  var height = (props.height / 100) ** 2 
  var bmiIndex  = props.weight / height  

  var category = "Obese"
  if(bmiIndex < 18.5)
      category = "underweight"
  else
    if(bmiIndex < 25)
         category = "Healthy"
    else
    if (bmiIndex < 30)
          category = "Overweight"

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
                <td>{bmiIndex}</td>
            </tr>
            <tr>
                <td>Category</td>
                <td>{category}</td>
            </tr>
        </table>
    </div>
  )
}
