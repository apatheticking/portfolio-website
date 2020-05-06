import React, { useState } from 'react'
import { ResumePanel } from 'components/views/index'

export function ExpandNav({ title, style }) {
    const classes = style()
    const [ isExtended, setExtended ] = useState(false)

    const extendNav = () => {
        setExtended(!isExtended)
    }

    return (
        <div className={classes.root}>
            <span onClick={extendNav}>{title}</span>
            { isExtended ? <ResumePanel /> : null }
        </div>
    )
}
