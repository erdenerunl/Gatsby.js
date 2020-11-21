import React, { useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap"
import HeaderStyles from "../components/header.module.scss"
import "bootstrap/dist/css/bootstrap.min.css"
import logo from "../images/header/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faLinkedin,
  faFacebookSquare,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <Navbar className={HeaderStyles.navStyle} mr-auto expand="md" >
        <NavbarBrand href="/">
          <img src={logo} alt="Logo" className={HeaderStyles.logo}></img>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar className={HeaderStyles.navbarNav}>
            <NavItem>
              <Link className={HeaderStyles.navlinks} to="/">
                Home
              </Link>
              <Link className={HeaderStyles.navlinks} to="/products">
                Products
              </Link>
              <Link className={HeaderStyles.navlinks} to="/about">
                About
              </Link>
              <Link className={HeaderStyles.navlinks} to="/contact">
                Contact
              </Link>
            </NavItem>
            <NavItem className={HeaderStyles.socialBar}>
              <NavLink className={HeaderStyles.navlinks}>
                <FontAwesomeIcon icon={faFacebookSquare} />
              </NavLink>
              <NavLink className={HeaderStyles.navlinks}>
              <FontAwesomeIcon icon={faLinkedin} />
              </NavLink>
              <NavLink className={HeaderStyles.navlinks}>
              <FontAwesomeIcon icon={faInstagram} />
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Header
