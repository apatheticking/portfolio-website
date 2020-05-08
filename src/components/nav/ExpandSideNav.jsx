import React, { useState } from 'react'
import { Slide, Paper, FormControlLabel } from '@material-ui/core'
import { ResumePanel, ContactMe } from 'components/views/index'

export function ExpandSideNav({ title, child, direction, style }) {
    console.log(direction)
    const classes = style()
    const [ isExtended, setExtended ] = useState(false)
    
    const extendNav = () => {
        setExtended((prev) => !prev)
    }

    return (
        <div className={classes.root}>
            {/* <FormControlLabel
                control={<span onClick={extendNav}>{title}</span>}
            /> */}
            <span onClick={extendNav}>{title}</span>
            <Slide 
                direction={direction}
                in={isExtended}
                mountOnEnter 
                unmountOnExit
            > 
                <Paper>
                     <ResumePanel onClick={extendNav}/>
                </Paper>        
            </Slide>

        </div>
    )
}
