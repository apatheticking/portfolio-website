import React from 'react'
import { ResumeBlock } from 'components/layout/index'
import { 
    ResumeSummary,
    ResumeExperience,
    ResumeEducation
} from './resumeData'

export function Resume() {
    return (
        <div>
            <p>resume placeholder</p>  
            <ResumeBlock 
                key="resume-summary"
                sectionHeader={ResumeSummary.sectionHeader} 
                content={ResumeSummary.content}
            />
            <ResumeBlock 
                key='resume-experience'
                sectionHeader={ResumeExperience.sectionHeader} 
                content={ResumeExperience.content}
            />
            <ResumeBlock 
                key='resume-education'
                sectionHeader={ResumeEducation.sectionHeader} 
                content={ResumeEducation.content}
            />
        </div>
    )
}
