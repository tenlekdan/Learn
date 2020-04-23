import React, { Component } from 'react'
import LifecyleB from './LifecyleB';

class LifecyleA extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: 'Tenzin'
        }

        console.log('LifecyleA: constructor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecyleA: getDerivedPropsState');

        return null;
    }

    componentDidMount() {
        console.log('LifecyleA: componentDidMount');
    }

    //The Complete Guide to Advanced React Patterns (2020)
    shouldComponentUpdate() {
        console.log('LifecyleA: shouldComponentUpdate');
        return true;

    }

    getSnapshotBeforeUpdate() {
        console.log('LifecyleA: getSnapshotBeforeUpdate')
        return null;

    }

    componentDidUpdate() {
        console.log('LifecyleA: componentDidUpdate')
    }

    changeState = ()=>{
        this.setState({
            name: 'lekden'
        })
    }
    
    render() {
        console.log('LifecyleA: render');

        return (
            <div>
                LifecyleA
                <button onClick={this.changeState}>Change</button>
                <LifecyleB />

            </div>
        )
    }
}

export default LifecyleA
