import React from "react"
import { Container,Row,Col } from "reactstrap"
import HeaderStyles from "../components/header.module.scss"


const Banner = () => {
    return (
        <div className={HeaderStyles.bannerDiv} >
            <Container fluid className={HeaderStyles.bannerCon}>
                <Row className={HeaderStyles.bannerRow}>
                    <Col>
                    <h1 className={HeaderStyles.heading1}> to the edges!</h1>
                    </Col>
                    <Col>
                    <h3 className={HeaderStyles.heading3}>Everything to you need about climbing.</h3>
                    </Col>
                </Row>
                <Row className={HeaderStyles.bannerRow}>
                <div style={{width:"100px" ,height:"100px",backgroundColor:"aqua"}}></div>
                </Row>  
            </Container>
            
        </div>
    )
}

export default Banner