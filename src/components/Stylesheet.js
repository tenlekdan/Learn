import React from 'react'
import './myStyles.css';

function Stylesheet({primary}) {

    const style = primary ? 'primary' : '';
    return (
        <div>
            <h2 class={`${style} font-xl`}>Hello frands !</h2>
        </div>
    )
}

export default Stylesheet
