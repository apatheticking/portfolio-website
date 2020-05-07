import React from 'react'
import { NavBar, AnchorNavBar, ExpandSideNav } from './index'
import { ResumePanel, ContactMe } from 'components/views/index'
import { navContainer, topNavbarStyle, leftNavbarStyle, rightNavbarStyle, bottomNavbarStyle } from 'components/styles/index'

export function FourCornerNav() {
    const container = navContainer()
    return (
        <div className={container.root}>
            <NavBar linkTo={''} linkName={'Home'} linkStyle={topNavbarStyle} fixed={'top'} />
            <ExpandSideNav title={'Resume'} child={ResumePanel} direction={'right'} style={leftNavbarStyle}/>
            <ExpandSideNav title={'Contact Me'} child={ContactMe} direction={'left'} style={rightNavbarStyle}/>

            {/* <NavBar linkTo={'contactme'} linkName={'Contact Me'} linkStyle={rightNavbarStyle} /> */}
            <AnchorNavBar linkTo={'projects'} linkName={'Projects'} linkStyle={bottomNavbarStyle} fixed={'bottom'} />
        </div>
    )
}
