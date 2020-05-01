import React from 'react'
import SplashPage from './SplashPage'
import { blockStyle } from 'components/styles/index'
import { Projects } from 'components/views/index'

export function HomePage() {
    const classes = blockStyle()
    return (
        <>
            <SplashPage />
            <div className={classes.root}>
                <Projects />
            </div>
        </>
    )
}
