import React from 'react'
import { SectionHeader } from 'components/parts/text/index'
import { IconLink } from 'components/nav/index'
import { 
    blockFrame, 
    blockAlignment, 
    splashPage, 
    IconsAlignmentStyles 
} from 'components/styles/index'
import { icons } from './data'

export default function SplashPage() {
    const frameCss = blockFrame()
    const aligntmentCss = blockAlignment()
    const sectionStyles = splashPage()
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
