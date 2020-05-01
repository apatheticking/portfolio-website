import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function IconLink({url, icon, styling}) {
    return (
        <>
            <a href={url} >
                <FontAwesomeIcon  
                    className={styling}
                    icon={icon} 
                />
            </a>
        </>
    )
}
