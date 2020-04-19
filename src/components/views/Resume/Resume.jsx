import React from 'react'
import { ResumeBlock } from 'components/layout/index'
import { ResumeHeader } from 'components/parts/text/index'
import { pageLayout } from 'components/styles/index' 
import { 
    ResumeSummary,
    ResumeExperience,
    ResumeEducation,
    ResumeProjects
} from './resumeData'

export function Resume() {
    const classes = pageLayout()
    return (
        <div className={classes.root} >
            <ResumeHeader />
            {/* add a array.map to repeat the resumeBlocks*/}
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
            <ResumeBlock 
                key='resume-project'
                sectionHeader={ResumeProjects.sectionHeader} 
                content={ResumeProjects.content}
            />
        </div>
    )
}
