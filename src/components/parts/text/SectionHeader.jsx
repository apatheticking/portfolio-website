import React, { memo } from 'react'
import { sectionHeaderStyle } from '../../styles/index'

export const SectionHeader = memo(function SectionHeader({sectionTitle, subtext}) {
    const classes = sectionHeaderStyle() 
    return (
        <div className={classes.root}>
            <h2>{sectionTitle ? sectionTitle : ""}</h2>
            <p>{subtext ? subtext : ""}</p>
        </div>
    )
})
