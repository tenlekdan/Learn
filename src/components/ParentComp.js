import React, { Component } from 'react'
import ChildComp from './ChildComp'

export class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Parent'
        }

        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(from){
        alert(`Hello from ${this.state.name} from ${from}` );
    }
    
    render() {
        return <ChildComp clickHdlr={this.clickHandler}/>
            
    }
}

export default ParentComp
