import React, { Component } from 'react'

export default class NowCC extends Component {
    constructor() {
        super()
        this.now = new Date()
    }

    render() {
        return (
            <h2 className="text-danger">
                {this.now.toString()}
            </h2>
        )
    }
}
