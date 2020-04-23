import React, { Component } from 'react'
import UpdatedComp from './withCounter'

export class ClickCounter extends Component {

    
    render() {
        return (
            <div>
                <button onClick={this.props.handler}>click count: {this.props.count}</button>
            </div>
        )
    }
}

export default UpdatedComp(ClickCounter)
