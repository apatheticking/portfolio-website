import React, { memo } from 'react'

export const UList = memo(function UList ({items}) {
    return (
        <ul>
            { items.map((item, i) => <li key={i}>{item}</li> ) }
        </ul>
    )
})