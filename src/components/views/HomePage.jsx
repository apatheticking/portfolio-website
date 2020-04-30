import React from 'react'
import { Projects } from 'components/views/index'
import { blockStyle } from 'components/styles/index'

export function HomePage() {
    const classes = blockStyle()
    return (
        <>
            <div className={classes.root}>
                <h1>Jeffrey Lee</h1>
                <p>Web Developer</p>
            </div>
            <div className={classes.root}>
                <Projects />
            </div>
        </>
    )
}

{/* <Block>
    <h1>Jeffrey Lee</h1>
    <p>Web Developer</p>
</Block>
<Block>
    <Projects />
</Block> */}