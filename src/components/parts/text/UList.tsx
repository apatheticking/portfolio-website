import React from 'react'
import List from 'components/interfaces/list.interface'

export const UList: React.FC<List> = ({ items }) => {
    return (
        <ul>
            { items.map((item, i) => <li key={'list-item' + i}>{item}</li> ) }
        </ul>
    )
}