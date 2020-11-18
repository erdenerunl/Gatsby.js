import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import '../styles/index.scss'
import LayoutStyles from '../components/layout.module.scss'


const Layout = (props) => {
    return (
        <div className={LayoutStyles.container}>
            <div className={LayoutStyles.content}>
                <Header />
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout