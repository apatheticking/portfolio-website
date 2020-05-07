import React from 'react'
import { Resume } from 'components/views/index'

export function ResumePanel() {
    return (
        <div
            style={{height: '90vh', width: '80vw', backgroundColor: 'white', overflow: 'auto'}}
        >
            <div>
                <Resume />
            </div>
        </div>
    )
}