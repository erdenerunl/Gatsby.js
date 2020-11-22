import React from "react"
import { Container, Row, Col } from "reactstrap"
import HeaderStyles from "../components/header.module.scss"
import "./header.module.scss"

const Banner = () => {
  return (
    <div className={HeaderStyles.bannerDiv}>
      <Container fluid className={HeaderStyles.bannerCon}>
        <Row className={HeaderStyles.bannerRow}>
          <Col lg={6} className={HeaderStyles.headerCol}>
            <h1 className={HeaderStyles.heading1}> to the edges!</h1>
            <h3 className={HeaderStyles.heading3}>
              Everything to you need about climbing.
            </h3>
            <h5 className={HeaderStyles.heading5}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis, aliquam quod! Laudantium nemo consequuntur amet?
            </h5>
          </Col>
          <Col lg={6} className={HeaderStyles.showcaseCol}>
            <div
              style={{
                width: "100px",
                height: "100px",
                backgroundColor: "aqua",
              }}
            ></div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Banner
