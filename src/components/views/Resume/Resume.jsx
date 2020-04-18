import React, { useMemo } from 'react'
import { ResumeBlock } from 'components/layout/index'
import { 
    ResumeSummary,
    ResumeExperience
} from './resumeData'

export function Resume() {
    // const title = 'summary'
    // const SectionA = useMemo( ()=> <SectionHeader sectionTitle={title} />, [title])

    return (
        <div>
            <p>resume placeholder</p>  
            <ResumeBlock 
                sectionHeader={ResumeSummary.sectionHeader} 
                content={ResumeSummary.content}
            />
            <ResumeBlock 
                sectionHeader={ResumeExperience.sectionHeader} 
                subtitle={ResumeExperience.subtitle} 
                content={ResumeExperience.content}
            />
            {/* {SectionA} */}
        </div>
    )
}
