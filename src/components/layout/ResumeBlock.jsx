import React, { memo } from 'react'
import { SectionHeader, SubTitle, UList } from 'components/parts/text/index'

/* think about moving this into a util function */
// also name this a lot better
const getItems = (content) => {
    return content.map( (item, i) => {
        switch (item.type) {
            case 'subtitle':
                return <SubTitle title={item.subtitle.title} subtext={item.subtitle.subtext}/>
            case 'paragraph':
                return <p>{item.paragraph}</p>
            case 'list':
                return <UList items={item.list} />
            default:
                return <p>can't find component</p>
        }
    })
}

export const ResumeBlock = memo(function ResumeBlock({sectionHeader, content}) {
    return (
        <div style={{textAlign: 'left'}}>
            <SectionHeader sectionTitle={sectionHeader.sectionTitle} subtext={sectionHeader.subtext}/>
            { getItems(content) }
        </div>
    )
})
