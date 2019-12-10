import React, { Component } from 'react'

export default class Hello extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Jackson'
        }
    }
    render() {
        return (
            <h2>
                Hell
            </h2>
        )
    }
}