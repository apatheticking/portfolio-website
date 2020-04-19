import React, { memo } from 'react'

export const SubTitle = memo(function SubTitle({ title, subtext }) {
    return (
        <div>
            <h3>{ title }</h3>
            <span>{ subtext }</span>
        </div>
    )
})
