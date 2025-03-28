import React, { useState } from 'react'

export default function BMI() {
    var [weight, setWeight] = useState(70)
    var [height, setHeight] = useState(170)
    var [bmiIndex, setBMIIndex] = useState(0)
    var [bmiCategory, setBMICategory] = useState('')

    function calculate(e) {
        e.preventDefault()  // prevent form submission
        var bmi = weight / ((height / 100) ** 2)
        setBMIIndex(bmi)

        var category = "Obese"
        if (bmi < 18.5)
            category = "underweight"
        else
            if (bmi < 25)
                category = "Healthy"
            else
                if (bmi < 30)
                    category = "Overweight"

        setBMICategory(category)

    }
    function updateHeight(e) {
        setHeight(e.target.value)
    }

    function updateWeight(e) {
        setWeight(e.target.value)
    }
    return (
        <div>
            <h2>BMI</h2>
            <form onSubmit={calculate}>
                Height (CM) <br />
                <input type="number" value={height}
                    onChange={updateHeight} required  min="100" />
                <p></p>
                Weight (KG) <br />
                <input type="number" value={weight}
                    onChange={updateWeight} required  min="30" />
                <p></p>
                <button>Calculate</button>
            </form>
            <p></p>
            {bmiIndex > 0 &&
                <div>
                    <h3>BMI Index : {bmiIndex} </h3>
                    <h3>Category : {bmiCategory}</h3>
                </div>
            }

        </div>
    )
}
