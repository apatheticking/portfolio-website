import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const panelStyle = makeStyles({
    root: {
        width: '0vh',
        height: '0vh',
        backgroundColor: 'red',

        animationDuration: '3s',
        animationName: 'slidein',

        slidein: {
            // width: '90vh',
            // height: '90vh', 
                from: {
                  marginLeft: '100%',
                  width: '10vh',
                  height: '90vh',
                },
              
                to: {
                  marginLeft: '0%',
                  width: '90vh',
                  height: '90vh', 
                }
              
        }
    },
})



export function ResumePanel() {
    const classes = panelStyle()
    return (
        <div
            className={classes.root}
        >
            
        </div>
    )
}
