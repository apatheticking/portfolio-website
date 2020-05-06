import React from 'react'
import { Resume } from 'components/views/index'

export function ResumePanel() {
    return (
        <div
            style={{height: '1000px', width: 'inherit', backgroundColor: 'red', overflow: 'scroll'}}
        >
            <div style={{transform: 'rotate(90deg)'}}>
                <Resume />
            </div>
        </div>
    )
}