import React from 'react'

export default function Now() {
  var now = new Date().toString()
  return (
     <h1>{now}</h1>
  )
}
