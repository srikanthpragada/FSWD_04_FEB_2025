import React, { useRef } from 'react'

export default function UncontrolledDemo() {
    let txtTitle = useRef()
    let cbUppercase = useRef() 
    let message = useRef() 

    function show() {
        let title = txtTitle.current.value // get value from textbox 
        if (cbUppercase.current.checked)
            title = title.toUpperCase()
        
        // update H1 with name 
        message.current.innerHTML = title;
    }

    return (
        <>
            <h1>Uncontrolled Demo</h1>
            Title : <input type="text" defaultValue="Srikanth"
                           ref={txtTitle} />
            <p></p>
            <input type="checkbox" ref={cbUppercase}  /> Uppercase
            <p></p>
            <button onClick={show}>Show</button>
            <h1 ref={message}></h1>
        </>
    )
}
