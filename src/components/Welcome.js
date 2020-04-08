import React, { Component } from 'react';

class Welcome extends Component {
    constructor() {
        super()
        this.state = {
            msg: 'Welcome my page'
        }
    }

    changeMsg(){
        this.setState({
            msg: 'Thank you for subscribing'
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.msg}</h1>
                <button onClick={()=>this.changeMsg()}>Subscribe</button>
            </div>
        )
    }
}

export default Welcome;