import React, { useState } from "react"
import { TransitionPortal } from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap"
import "jquery"
import "popper.js"

export default function SiteNav(props) {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const animationDuration = .25;

  return (
    <div>
      <TransitionPortal>
        <Navbar expand="md" color="primary" dark fixed="top">
          <AniLink fade to="/" className="navbar-brand" duration={animationDuration}>
            {props.siteTitle}
          </AniLink>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <AniLink fade to="/second-page" className="nav-link" duration={animationDuration}>
                  Second page
                </AniLink>
              </NavItem>
              <NavItem>
                <AniLink fade to="/articles" className="nav-link" duration={animationDuration}>
                  Articles
                </AniLink>
              </NavItem>
              {/* <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  GitHub
                </NavLink>
              </NavItem> */}
              {/* <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
            </Nav>
          </Collapse>
        </Navbar>
      </TransitionPortal>
    </div>
  )
}
