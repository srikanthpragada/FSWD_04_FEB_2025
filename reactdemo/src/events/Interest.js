import React, {useState} from 'react'

export default function Interest() {
    var [interest , setInterest] = useState(0)

    function calculateInterest() {
        var samount = document.getElementById("txtAmount").value 
        var amount = parseInt(samount)
        setInterest(amount * 7 / 100)
    }
    return (
        <div>
            <h2>Interest Calculation</h2>
            Amount : <input type="number" id="txtAmount" />
            <p></p>
            <button onClick={calculateInterest}>Calculate Interest</button>
            <h3>{interest && interest > 0 ? interest  : ''}</h3>
        </div>
    )
}
