import React from 'react'
import { SubTitle, UList } from 'components/parts/text/index'
// also name this a lot better
export const getItems = (content:Array<any>) => {
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