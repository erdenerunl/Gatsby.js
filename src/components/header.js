import React, { useState } from "react"
import { Link } from "gatsby"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap"
import  headerStyles from "../components/header.module.scss"
import "bootstrap/dist/css/bootstrap.min.css"
import logo from "../images/header/logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLinkedin,
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  



  return (
    <div>
      <Navbar className={headerStyles.navStyle} mr-auto expand="md">
        <NavbarBrand href="/">
          <img src={logo} alt="Logo" className={headerStyles.logo}></img>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar className={headerStyles.navbarNav}>
            <NavItem>
              <Link className={headerStyles.navlinks} to="/">
                Home
              </Link>
              <Link className={headerStyles.navlinks} to="/products">
                Products
              </Link>
              <Link className={headerStyles.navlinks} to="/about">
                About
              </Link>
              <Link className={headerStyles.navlinks} to="/contact">
                Contact
              </Link>
            </NavItem> 
            
             <NavItem className={headerStyles.socialBar}>
              <NavLink className={headerStyles.navSocial}>
                <FontAwesomeIcon icon={faFacebookSquare} size="lg" />
              </NavLink>
              <NavLink className={headerStyles.navSocial}>
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </NavLink>
              <NavLink className={headerStyles.navSocial}>
              <FontAwesomeIcon icon={faInstagram} size="lg" />
              </NavLink>
            </NavItem>
            
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Header
