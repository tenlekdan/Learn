import React from 'react'

function ChildComp(props) {
    return (
        <div>
            <button onClick={()=>props.clickHdlr('child')}>click</button>
        </div>
    )
}

export default ChildComp
