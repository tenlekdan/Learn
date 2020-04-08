import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props) {
        super(props)

        this.state = {
            msg: "Henlo Fellas"
        }

        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler() {

        this.setState({
            msg: 'Good Bye Fellas'
        })
    }

    // clickHandler = () =>{
    //     this.setState({
    //         msg: 'Good Bye Hoes'
    //     })
    // }

    render() {
        let {msg} = this.state;
        return (
            <div>
                <p>{msg}</p>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBind
