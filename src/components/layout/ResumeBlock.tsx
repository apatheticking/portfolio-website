import React from 'react'
import { SectionHeader, SubTitle, UList } from 'components/parts/text/index'

/* think about moving this into a util function */
// also name this a lot better
const getItems = (content:Array<any>) => {
    return content.map( (item:any, i:number) => {
        switch (item.type) {
            case 'subtitle':
                return <SubTitle key={i} title={item.subtitle.title} subtext={item.subtitle.subtext}/>
            case 'paragraph':
                return <p key={"resumeParagraph" + i}>{item.paragraph}</p>
            case 'list':
                return <UList key={'resumeList' + i} items={item.list} />
            default:
                return <p>can't find component</p>
        }
    })
}

export const ResumeBlock:React.FC<any> = ({sectionHeader, content}) => {
    return (
        <div style={{textAlign: 'left'}}>
            <SectionHeader title={sectionHeader.sectionTitle} subtext={sectionHeader.subtext}/>
            { getItems(content) }
        </div>
    )
}
