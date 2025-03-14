import React, { Component } from 'react'

export default class CourseCC extends Component {

    constructor(props) {
        super(props)
        this.title = props.title
        this.trainer = props.trainer
    }

    render() {
        return (
            <div>
                <h1>{this.title}</h1>
                <h2>{this.trainer}</h2>
            </div>
        )
    }
}
