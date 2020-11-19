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
import Icon from "@mdi/react"
import { mdiFacebook, mdiTwitter, mdiLinkedin } from "@mdi/js"

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
      <Navbar className={HeaderStyles.navStyle} expand="md">
        <NavbarBrand href="/">
          <img src={logo} alt="Logo" className={HeaderStyles.logo}></img>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="m-auto" navbar>
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
            <NavItem>
              <Icon className="mdi md-facebook" path={mdiFacebook} />
              <Icon className="mdi md-facebook" path={mdiTwitter} />
              <Icon className="mdi md-facebook" path={mdiLinkedin} />
              <Icon className="fa fa-plus-circle" />
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Header
