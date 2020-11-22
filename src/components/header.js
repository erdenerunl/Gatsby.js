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
import "../components/header.module.scss"
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

  // const navLinks = [
  //   { to: "/", className:"navlinks", text: "Home" },
  //   { to: "/products", className:"navlinks", text: "Products" },
  //   { to: "/about", className:"navlinks", text: "About Us" },
  //   { to: "/contact", className:"navlinks", text: "Contact" },

  // ];
  // const createNavLinks = (to, className, text) => <Link to={to} className={className}>{text}</Link>
    
      
    
      
  
  

  console.log(HeaderStyles.navLinks);

  return (
    <div>
      <Navbar className={HeaderStyles.navStyle} mr-auto expand="md" >
        <NavbarBrand href="/">
          <img src={logo} alt="Logo" className={HeaderStyles.logo}></img>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar className={HeaderStyles.navbarNav}>
            {/* <NavItem>
              {navLinks.map((n)=> createNavLinks(n.to,n.className,n.text))}
            </NavItem> */}
            
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
