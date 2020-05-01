import React from 'react'
import Title from 'components/interfaces/title.interface'

export const SectionHeader: React.FC<Title> = ({ title, subtext, sectionStyle }) => {
    return (
        <div className={ sectionStyle ? sectionStyle.root : ''}>
            <h2>{ title }</h2>
            <p>{ subtext }</p>
        </div>
    )
}
