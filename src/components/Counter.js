import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    increment(){
        this.setState((prevState)=>({
            count: prevState.count + 1
        }),
        ()=>{
            console.log("from Callback count: "+this.state.count);
        })
    }

    inrementFive(){
       this.increment();
       this.increment();
       this.increment();
       this.increment();
       this.increment();
    }
    
    render() {
        return (
            <div>
                <p>{this.state.count}</p>
                <button onClick={()=>this.inrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter
