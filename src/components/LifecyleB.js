import React, { Component } from 'react'

class LifecyleB extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'child'
        }

        console.log('LifecyleB: constructor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecyleB: getDerivedPropsState');

        return null;
    }

    componentDidMount() {
        console.log('LifecyleB: componentDidMount');
    }

    shouldComponentUpdate() {
        console.log('LifecyleB: shouldComponentUpdate');
        return true;

    }

    getSnapshotBeforeUpdate() {
        console.log('LifecyleB: getSnapshotBeforeUpdate')
        return null;
    }

    componentDidUpdate() {
        console.log('LifecyleB: componentDidUpdate')
    }

    render() {
        console.log('LifecyleB: render');

        return (
            <div >
                LifecyleB
            </div>
        )
    }
}

export default LifecyleB
