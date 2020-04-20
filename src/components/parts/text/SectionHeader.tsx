import React from 'react'
import { sectionHeaderStyle } from 'components/styles/index'
import Title from 'components/interfaces/title.interface'

export const SectionHeader: React.FC<Title> = ({title, subtext}) => {
    const classes = sectionHeaderStyle() 
    return (
        <div className={classes.root}>
            <h2>{title ? title : ""}</h2>
            <p>{subtext ? subtext : ""}</p>
        </div>
    )
}
