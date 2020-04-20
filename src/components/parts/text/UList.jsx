import React from 'react'

export const UList = function UList ({items}) {
    return (
        <ul>
            { items.map((item, i) => <li key={'list-item' + i}>{item}</li> ) }
        </ul>
    )
}