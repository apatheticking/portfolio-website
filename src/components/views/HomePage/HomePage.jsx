import React from 'react'
import SplashPage from './SplashPage'
import { Projects } from 'components/views/index'

export function HomePage() {
    return (
        <>
            <SplashPage />
            <div id={'projects'}/>
            <Projects/>
        </>
    )
}
