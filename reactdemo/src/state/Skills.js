import React, { useState } from 'react'

export default function Skills() {
    var [skills, setSkills] = useState([])
    var [message, setMessage] = useState("")

    function addSkill() {
        var skill = document.getElementById("txtSkill").value
        setSkills([...skills, skill])
    }

    function deleteSkill(idxToDelete) {
        // Delete items where index is equal to idxToDelete 
        var afterDeletion = skills.filter((v, idx) => idx !== idxToDelete)
        setSkills(afterDeletion)
    }

    function clearSkills() {

    }

    return (
        <div>
            <h2>Skills</h2>
            Skill : <input type="text" id="txtSkill" /> 
            &nbsp; 
            <span className="text-danger">{message}</span>
            <p></p>
            <button onClick={addSkill}>Add</button>
            <button onClick={clearSkills}>Clear All</button>
            <ul>
                {
                    skills.map((s, idx) =>
                        <li key={idx}>{s}
                            <button onClick={() => deleteSkill(idx)} className="btn btn-link">Del</button></li>)
                }
            </ul>
        </div>
    )
}
