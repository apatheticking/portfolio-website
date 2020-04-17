import React from 'react'
import { Link } from 'react-router-dom'

export function HomePage() {
    console.log('loading')
    return (
        <div>
            <h1>Hello</h1>
            <Link to="/resume">Resume</Link>
            <Link to="/contactme">Contact Me</Link>
            <Link to="/Projects">Projects</Link>
        </div>
    )
}

// export default HomePage