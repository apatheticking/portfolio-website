import React from 'react'
import { NavBar } from './index'
import { navbarStyle } from 'components/styles/index'

import { makeStyles } from '@material-ui/core/styles'

const bottomNavbarStyle = makeStyles({
    root: {
        position: 'fixed',
        bottom: '0',
        width: '100%'
    }
})

export function FourCornerNav() {
    //const bottomNav = bottomNavbarStyle()
    return (
        <>
            <NavBar linkTo={''} linkName={'Home'} linkStyle={navbarStyle} fixed={'top'} />
            <NavBar linkTo={'resume'} linkName={'Resume'} linkStyle={navbarStyle} fixed={'top'} />
            <NavBar linkTo={'contactme'} linkName={'Contact Me'} linkStyle={navbarStyle} fixed={'top'} />
            <NavBar linkTo={'projects'} linkName={'Projects'} linkStyle={navbarStyle} fixed={'bottom'} />
        </>
    )
}
