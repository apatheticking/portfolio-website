import React from 'react'
import Title from 'components/interfaces/title.interface'

export const SubTitle: React.FC<Title> = ({ title, subtext }) => {
    return (
        <div>
            <h3>{ title }</h3>
            <span>{ subtext }</span>
        </div>
    )
}
