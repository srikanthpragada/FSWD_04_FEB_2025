import React, {useState} from 'react'

export default function BMI() {
    var [weight, setWeight] = useState(70)
    var [height, setHeight] = useState(170)
    
    function calculate() {
       
    }
    return (
        <div>
            <h2>BMI</h2>
            <form>
                Height (CM) <br />
                <input type="number" value={height} required />
                <p></p>
                Weight (KG) <br />
                <input type="number" value={weight} required />
                <p></p>
                <button onClick={calculate}>Calculate</button>

            </form>

        </div>
    )
}
