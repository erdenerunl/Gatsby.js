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


const links = [
  { to: "/", text: "Home" },
  { to: "/products", text: "Product" },
  { to: "/about", text: "About" },
  { to: "/contact", text: "Contact" },
]


const createNavItem = ({ to, text, className }) => (
  <NavItem>
    <NavLink>
      <Link to={to} className={className}>
        {text}
      </Link>
    </NavLink>
  </NavItem>
)


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
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">
          <img src={logo} alt="Logo" className={HeaderStyles.logo}></img>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {links.map(createNavItem)}
          </Nav>
          
        </Collapse>

      </Navbar>
    </div>
  )
}

export default Header
