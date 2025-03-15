import React from 'react'

export default function ShowTime() {
  function showDateTime() {
     alert(new Date().toString())
  }  
  return (
    <div>
        <h2>Show Time</h2>
        <button onClick={showDateTime} >Click Here</button>
    </div>
  )
}
