import React from 'react'
import { SectionHeader } from 'components/parts/text/index'
import { blockStyle } from 'components/styles/index'
import { makeStyles } from '@material-ui/core/styles'

const styles = makeStyles({
    root: {
        color: 'white',
        textAlign: 'left',
        marginLeft: '10%',
            '& h2': {
                fontSize: '48px',
                marginBottom: '0px'
            }
    }
})

export default function SplashPage() {
    const classes = blockStyle()
    const sectionStyles = styles()
    return (
        <div className={classes.root}>
            <SectionHeader 
                title={'Jeffrey Lee'}
                subtext={'Web Developer'}
                sectionStyle={sectionStyles}
            />
        </div>
    )
}
