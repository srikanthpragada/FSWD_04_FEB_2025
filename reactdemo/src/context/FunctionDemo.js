import React, { useContext } from 'react'

const MyContext = React.createContext();

export default function Parent() {
    const details = {course : 'React', trainer : 'Srikanth Pragada'}
    return (
        <MyContext.Provider value={details}>
            <h1>Parent</h1>
            <Child />
        </MyContext.Provider>
    )
}

function Child() {
    // Read data from context 
    const details = useContext(MyContext) 
    return (
        <>
            <h2>Child </h2>
            <h3>Course Name : {details.course}</h3>
            <GrandChild />
        </>
    )
}

function GrandChild() {
    // Read data from context 
    const details = useContext(MyContext)
    return (
        <>
            <h2>Grand Child </h2>
            <h3>Trainer : {details.trainer} </h3>
        </>
    )
}