import React from 'react'
import { SectionHeader } from 'components/parts/text/index'
import { IconLink } from 'components/nav/index'
import { blockFrame, blockAlignment } from 'components/styles/index'
import { makeStyles } from '@material-ui/core/styles'
import { icons } from './data'

const styles = makeStyles({
    root: {
        color: 'white',
        textAlign: 'left',
        marginLeft: '10%',
        alignContent: 'left',
            '& h2': {
                fontSize: '56px',
                marginTop: '0px',
                marginBottom: '0px'
            }
    }
})

const IconsAlignmentStyles = makeStyles({ 
    root: {
        marginLeft: '10%',
            '& a': {
                paddingRight: '8px'
            }
        }
})

export default function SplashPage() {
    const frameCss = blockFrame()
    const aligntmentCss = blockAlignment()
    const sectionStyles = styles()
    const iconAligntment = IconsAlignmentStyles()

    return (
        <>
            <div className={frameCss.root + " " + aligntmentCss.root}>
                <div style={{width: '50%'}}>
                    <SectionHeader 
                        title={'Jeffrey Lee'}
                        subtext={'Web Developer'}
                        sectionStyle={sectionStyles}
                    />
                    <div className={iconAligntment.root + " " + aligntmentCss.root}>
                    {icons.map((icon, i)=> {
                        const classes = icon.style()
                        return <IconLink  
                            key={i}
                            url={icon.url}
                            icon={icon.icon}
                            styling={classes.root}
                        />
                    })}
                    </div>
                </div>
            </div>
        </>
    )
}
