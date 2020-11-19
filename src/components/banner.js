import React from "react"
import { Container,Row,Col } from "reactstrap"
import HeaderStyles from "../components/header.module.scss"


const Banner = () => {
    return (
        <div className={HeaderStyles.bannerDiv} >
            <Container >
                <Row className={HeaderStyles.wrapper}>
                    <Col>
                    <h1> to the edges!</h1>
                    </Col>
                    <Col>
                    <h3>Everything to you need about climbing.</h3>
                    </Col>
                </Row>
                
            </Container>
        </div>
    )
}

export default Banner