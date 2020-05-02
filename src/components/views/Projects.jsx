import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { blockFrame } from 'components/styles/index'

const projectStyles = makeStyles({
    root: {
        color: 'white',
        marginTop: '0px',
            '& h2': {
                paddingTop: '24px',
                marginTop: '0px',
                marginBottom: '0px',
                marginLeft: '18px',
                textAlign: 'left',
                fontSize: '36px'
            }
    }
})

export function Projects() {
    const frameCss = blockFrame()
    const textCss = projectStyles()
    return (
        <div id={'projects'} className={frameCss.root + ' + ' + textCss.root}>
            <h2>Projects</h2>
        </div>
    )
}
