import React, { useMemo } from 'react'
import { SectionHeader } from 'components/parts/text/index'

export function Resume() {
    // const title = 'summary'
    // const SectionA = useMemo( ()=> <SectionHeader sectionTitle={title} />, [title])

    return (
        <div>
            <p>resume placeholder</p>  
            <SectionHeader sectionTitle={'Summary'} subtext={'test test test'}/>
            <SectionHeader sectionTitle={'Experience'} />
            <SectionHeader sectionTitle={'Education'} />
            <SectionHeader sectionTitle={'Projects'} />
            {/* {SectionA} */}
        </div>
    )
}
