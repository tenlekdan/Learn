import React, { Component } from 'react';
class Welcome extends Component {
    constructor() {
        super()
        this.state = {
            msg: 'Welcome my page'
        }

        this.isLoggedIn = true;
    }

    changeMsg(){
        this.setState({
            msg: 'Thank you for subscribing'
        })
    }

    render() {
        // return (
        //     <div>
        //         <h1>{this.state.msg}</h1>
        //         <button onClick={()=>this.changeMsg()}>Subscribe</button>
        //     </div>
        // )

        return this.isLoggedIn ? 
        (<div>Hello Tenzin !</div>):
        (<div>Hello guest !</div>);

    }
}

export default Welcome;