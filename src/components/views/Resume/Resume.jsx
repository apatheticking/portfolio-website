import React from 'react'
import { ResumeBlock } from 'components/layout/index'
import { ResumeHeader } from 'components/parts/text/index'
import { pageLayout } from 'components/styles/index' 
import { sectionHeaderStyle } from 'components/styles/index'
import { ResumeData } from './resumeData'

export function Resume() {
    const classes = pageLayout()
    const headerStyle = sectionHeaderStyle()
    return (
        <div className={classes.root} >
            <ResumeHeader />
            {
                ResumeData.map( (section, i)=> {
                    return <ResumeBlock
                        key={i}
                        sectionHeader={section.sectionHeader} 
                        content={section.content}
                        sectionStyle={headerStyle}
                    />
                })
            }
        </div>
    )
}
