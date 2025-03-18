import React, { useState } from 'react'

export default function Passengers() {
    var [passengers, setPassengers] = useState([])
    var [message, setMessage] = useState('')

    function addPassenger() {
        // add passenger
        var pname = document.getElementById("txtName").value
        setMessage('')

        // Check whether name is already present 
        var found = passengers.find( (p) => p.name === pname )
       
        if(found)
        {
            //alert("Sorry! Duplicate Passenger Name!")
            setMessage("Duplicate Passenger Name!")
            return;
        }

        var age = parseInt(document.getElementById("txtAge").value)
        //console.log(pname, age)
        setPassengers([...passengers, {name : pname, age: age }])
        console.log(passengers)
    }

    function deletePassenger(idxToDelete) {
        var response = window.confirm("Do you want to delete?")
        if(!response)
            return;

        // Delete items where index is equal to idxToDelete 
        var afterDeletion = passengers.filter((v, idx) => idx !== idxToDelete)
        setPassengers(afterDeletion)
        console.log('Deleted')
    }

    return (
        <div>
            <h2>Add Passenger</h2>
            Name <br />
            <input type="text" id="txtName" />
            &nbsp; <span className="text-danger">{message}</span>
            <p></p>
            Age <br />
            <input type="number" id="txtAge" />
            <p></p>
            <button onClick={addPassenger}>Add</button>
            <button onClick={() => setPassengers([])}>Clear All</button>


            {passengers.length > 0 ?
                <div>
                    <h2>Passengers</h2>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Age</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                passengers.map((p, idx) =>
                                    <tr key={idx}>
                                        <td>{p.name}</td>
                                        <td>{p.age}</td>
                                        <td>
                                            <button onClick={ () => deletePassenger(idx)}>Del</button>
                                        </td>
                                    </tr>
                                )

                            }
                        </tbody>
                    </table>
                </div>
                : ''
            }
        </div>
    )
}
