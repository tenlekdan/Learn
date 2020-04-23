import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props) {
        super(props)

        this.state = {
            msg: "Henlo Fellas"
        }

    this.clickHandler = this.clickHandler.bind(this); {/** bind done here is ideal way to do so */}
    }

    clickHandler() {

        // without bind, at this point there no access to this, this=undefined

        this.setState({
            msg: 'Good Bye Fellas'
        })
    }

    clickHandler2 = () =>{   {/** class property as arrow function */}
        this.setState({
            msg: 'Good Bye Hoes'
        })
    }

    render() {  {/* render is called on every update */}
        let {msg} = this.state;
        return (
            <div>
                <p>{msg}</p>
                <button onClick={this.clickHandler}>Click1</button> 
                <button onClick={this.clickHandler.bind(this)}>Click2</button> {/* if bind is done here, there is performance issue, since on every update new handler is created */}
                <button onClick={()=>{this.clickHandler.bind(this)}}>Click3</button> {/** this also has performance issue in certain casses */}
                <button onClick={this.clickHandler2}>Click4</button> 
            </div>
        )
    }
}

export default EventBind
