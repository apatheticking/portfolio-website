import React from 'react'

export function UList ({items}) {
    return (
        <ul>
            { items.map((item, i) => <li key={i}>{item}</li> ) }
        </ul>
    )
}