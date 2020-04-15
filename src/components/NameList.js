import React from 'react'
import Person from './Person';

function NameList() {

    const names = [
        {
            id: 1,
            name: 'Tenzin',
            age: 20,
            skill: 'React'
        },
        {
            id: 2,
            name: 'James',
            age: 21,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Al Capone',
            age: 22,
            skill: 'Vue'
        }
    ];

    const personList = names.map(person=><Person key={person.id} person={person}></Person>);
    return (
        <div>
            {personList}
        </div>
    )
}

export default NameList
