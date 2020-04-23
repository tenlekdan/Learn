import React from 'react';

const UpdatedComp = (OriginalComp) => {

    class NewComp extends React.Component {

        constructor(props) {
            super(props)
        
            this.state = {
                 count: 0
            }
        }
        
    
        incrementCount = () => {
            this.setState(prevState => ({ count: prevState.count + 1 }));
        }

        render(){
            return <OriginalComp count={this.state.count} handler={this.incrementCount}></OriginalComp>
        }
    }

    return NewComp;
}

export default UpdatedComp;