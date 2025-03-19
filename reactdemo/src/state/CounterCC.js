import React from 'react'
export default class CounterCC extends React.Component {
    constructor() {
        super();
        this.state = { counter: 0 };
        this.increment = this.increment.bind(this); // make this available to method
    }
    increment() {
        this.setState({ counter: this.state.counter + 1 });
    }
    render() {
        return (
            <>
                <h1>Counter Class</h1>
                <h1>{this.state.counter}</h1>
                <button onClick={this.increment}>Inc</button>
            </>
        )
    }
}