import React, { Component } from 'react'
import UpdatedComp from './withCounter.js';

export class HoverCounter extends Component {



    render() {
        return (
            <div>
                <div onMouseOver={this.props.handler}>
                    <h1>
                        Hover  {this.props.count}
                    </h1>
                </div>
            </div>
        )
    }
}

export default UpdatedComp(HoverCounter);
