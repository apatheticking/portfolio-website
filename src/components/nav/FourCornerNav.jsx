import React from 'react'
import { NavBar } from './index'
import { topNavbarStyle, leftNavbarStyle, rightNavbarStyle, bottomNavbarStyle } from 'components/styles/index'

export function FourCornerNav() {
    return (
        <div style={{position:'relative', width:'100%'}}>
            <NavBar linkTo={''} linkName={'Home'} linkStyle={topNavbarStyle} fixed={'top'} />
            <NavBar linkTo={'resume'} linkName={'Resume'} linkStyle={leftNavbarStyle} />
            {/* <NavBar linkTo={'contactme'} linkName={'Contact Me'} linkStyle={rightNavbarStyle} /> */}
            <NavBar linkTo={'projects'} linkName={'Projects'} linkStyle={bottomNavbarStyle} fixed={'bottom'} />
        </div>
    )
}
