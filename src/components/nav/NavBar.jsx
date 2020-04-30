import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'

export function NavBar({linkTo, linkName, linkStyle, fixed}) {
    const classes = linkStyle()
    return (
        <Navbar className={classes.root} fixed={fixed}>
            <Link to={"/" + linkTo}><span>{linkName}</span></Link>
        </Navbar>
    )
}