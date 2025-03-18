import React, { useState } from 'react'

function AddPassenger({ passengers, addPassenger, clearAll }) {
    function addNewPassenger() {
        // add passenger
        var pname = document.getElementById("txtName").value

        // Check whether name is already present 
        var found = passengers.find((p) => p.name === pname)

        if (found) {
            alert("Sorry! Duplicate Passenger Name!")
            return;
        }

        var age = parseInt(document.getElementById("txtAge").value)

        // call function in parent component 
        addPassenger({ name: pname, age: age })

    }

    return (
        <>
            <h2>Add Passenger</h2>
            Name <br />
            <input type="text" id="txtName" />
            <p></p>
            Age <br />
            <input type="number" id="txtAge" />
            <p></p>
            <button onClick={addNewPassenger}>Add</button>
            <button onClick={() => clearAll()}>Clear All</button>
        </>
    )

}

function ListPassengers({ passengers, deletePassenger }) {

    function deleteOnePassenger(idxToDelete) {
        var response = window.confirm("Do you want to delete?")
        if (!response)
            return;
        deletePassenger(idxToDelete)
    }


    return (
        <>
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
                                            <button onClick={() => deleteOnePassenger(idx)}>Del</button>
                                        </td>
                                    </tr>
                                )

                            }
                        </tbody>
                    </table>
                </div>
                : ''
            }
        </>
    )

}

export default function Passengers2() {
    var [passengers, setPassengers] = useState([])

    function addPassenger(passenger) {
        setPassengers([...passengers, passenger])
    }

    function deletePassenger(idxToDelete) {
        // Delete items where index is equal to idxToDelete 
        var afterDeletion = passengers.filter((v, idx) => idx !== idxToDelete)
        setPassengers(afterDeletion)
    }

    function clearAll() {
        setPassengers([])
    }
    return (
        <div>
            <AddPassenger passengers={passengers}
                addPassenger={addPassenger}
                clearAll={clearAll}
            />
            <ListPassengers passengers={passengers}
                deletePassenger={deletePassenger}
            />
        </div>
    )
}
