import React from 'react'
import { SectionHeader, SubTitle, UList } from 'components/parts/text/index'

export function ResumeBlock({sectionHeader, subtitle={}, content}) {
    return (
        <div>
            <SectionHeader sectionTitle={sectionHeader.sectionTitle} subtext={sectionHeader.subtext}/>
            <SubTitle title={subtitle.title} subtext={subtitle.subtext}/>
            {/* resume block content will be a list or p tag */}
            {
                content && content.list ? 
                    <UList items={content.list} /> :
                    <p>{content}</p> 
            }
        </div>
    )
}
