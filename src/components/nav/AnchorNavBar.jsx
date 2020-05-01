import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import { Navbar } from 'react-bootstrap'

export function AnchorNavBar({linkTo, linkName, linkStyle, fixed}) {
    const classes = linkStyle()
    return (
        <Navbar className={classes.root} sticky={fixed}>
            <Link to={"/#" + linkTo}><span>{linkName}</span></Link>
        </Navbar>
    )
}