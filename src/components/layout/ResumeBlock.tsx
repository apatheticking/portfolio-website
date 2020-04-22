import React from 'react'
import { SectionHeader } from 'components/parts/text/index'
import { getItems } from 'utils/getItems'


export const ResumeBlock:React.FC<any> = ({sectionHeader, content}) => {
    return (
        <div style={{textAlign: 'left'}}>
            <SectionHeader title={sectionHeader.sectionTitle} subtext={sectionHeader.subtext}/>
            { getItems(content) }
        </div>
    )
}
