import React, { useMemo } from 'react'
import { sectionHeaderStyle } from '../../styles/index'

export function SectionHeader({sectionTitle, subtext}) {
    //not sure of this working properly, this renders twice
    // const title = useMemo(() => ( sectionTitle ), [sectionTitle])
    const classes = sectionHeaderStyle() 
    // console.log('SectionHeader')
    return (
        <div className={classes.root}>
            <h2>{sectionTitle}</h2>
            <p>{subtext ? subtext : ""}</p>
        </div>
    )
}
