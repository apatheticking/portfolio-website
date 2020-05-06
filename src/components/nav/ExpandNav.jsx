import React, { useState } from 'react'
import { Slide, Paper, FormControlLabel } from '@material-ui/core'
import { ResumePanel } from 'components/views/index'

export function ExpandNav({ title, style }) {
    const classes = style()
    const [ isExtended, setExtended ] = useState(false)
    
    const extendNav = () => {
        setExtended((prev) => !prev)
    }

    return (
        <div className={classes.root}>
            <FormControlLabel
                control={<span onClick={extendNav}>{title}</span>}
            />

            <Slide 
                direction="down"
                in={isExtended}
                mountOnEnter 
                unmountOnExit
            > 
                <Paper>
                     { isExtended ? <ResumePanel /> : null }
                </Paper>        
            </Slide>

        </div>
    )
}
