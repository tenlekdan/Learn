import React from 'react'

function Person({person}) {
    return (
        <div>
             My name is <b>  {person.name} </b>, i am <b>{person.age} </b>year old and i know <i>{person.skill}</i>
        </div>
    )
}

export default Person 