import React from 'react'

export default function Course(props) {
  return (
    <div>
        <h1>{props.title}</h1>
        <h2>{props.trainer}</h2>
    </div>
  )
}
