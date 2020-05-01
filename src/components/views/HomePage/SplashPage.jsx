import React from 'react'
import { SectionHeader } from 'components/parts/text/index'
import { blockFrame, blockAlignment } from 'components/styles/index'
import { makeStyles } from '@material-ui/core/styles'

const styles = makeStyles({
    root: {
        color: 'white',
        textAlign: 'left',
        marginLeft: '10%',
            '& h2': {
                fontSize: '56px',
                marginBottom: '0px'
            }
    }
})

export default function SplashPage() {
    const frameCss = blockFrame()
    const aligntmentCss = blockAlignment()
    const sectionStyles = styles()

    return (
        <div className={frameCss.root + " " + aligntmentCss.root}>
            <SectionHeader 
                title={'Jeffrey Lee'}
                subtext={'Web Developer'}
                sectionStyle={sectionStyles}
            />
        </div>
    )
}
