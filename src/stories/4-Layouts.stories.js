import React from 'react'
import { ResumeBlock } from '../components/layout/index'

export default {
    title: 'Layouts',
    component: ResumeBlock
}

const header = {}
const subheading = {}
const listContent = []
const pContent = ""

export const ResumeBlockWithList = () => <ResumeBlock 
    sectionHeader={header} 
    subtitle={subheading} 
    content={listContent}
/>

export const ResumeBlockWithPTag = () => <ResumeBlock 
    sectionHeader={header} 
    subtitle={subheading} 
    content={pContent}
/>