import React from 'react'
import { NavBar, AnchorNavBar } from './index'
import { navContainer, topNavbarStyle, leftNavbarStyle, rightNavbarStyle, bottomNavbarStyle } from 'components/styles/index'

export function FourCornerNav() {
    const container = navContainer()
    return (
        <div className={container.root}>
            <NavBar linkTo={''} linkName={'Home'} linkStyle={topNavbarStyle} fixed={'top'} />
            <NavBar linkTo={'resume'} linkName={'Resume'} linkStyle={leftNavbarStyle} />
            <NavBar linkTo={'contactme'} linkName={'Contact Me'} linkStyle={rightNavbarStyle} />
            <AnchorNavBar linkTo={'projects'} linkName={'Projects'} linkStyle={bottomNavbarStyle} fixed={'bottom'} />
        </div>
    )
}
