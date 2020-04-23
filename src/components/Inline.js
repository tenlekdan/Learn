import React from 'react'

const heading = {
    fontSize: '72px',
    color: 'blue'
}
function Inline() {
    return (
        <div>
            <h1 style={heading}>Inline</h1>
            <div className='error'>
                <pre>
                    Demonstration that module css is locally scoped, where as regular css is globally scoped,  <br/>
                    therefore regular css will create css conflicts
                </pre>
            </div>
            {/* <div className={style.success}>
                module css will throw error here since, it is locally scoped
            </div> */}
        </div>
    )
}

export default Inline
