import * as React from "react"
import { Link } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Carousel, Col, Container, Image, Jumbotron, Row } from "react-bootstrap"
import data from "../data/index.yaml"
import images from "../images/index.js"

if (typeof window !== "undefined") {
  require("smooth-scroll")('a[href*="#"]')
}

const page = () => (
  <div className="content" style={{maxWidth:"960px",marginLeft:"auto",marginRight:"auto"}}>
    <Carousel>
      {data.carousel.slides.map((e,i) => (
        <Carousel.Item key={"carousel-"+i}>
          <Image className="d-block w-100" src={images[e.image]}/>
          <Carousel.Caption>
            <h3>{e.title}</h3>
            <p>{e.text}</p>
            <Link to={"/#"+e.link}>
              <button>{e.button}</button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
    <Jumbotron id="services">
      <Container fluid="sm">
        <Row>
          <h2>{data.services.heading}</h2>
        </Row>
        <Row>
          {data.services.items.map((e,i) => (
            <Col sm="12" md="4" key={"services-"+i}>
              <Card>
                <Card.Img className="centerBlock" style={{height:"50px"}} variant="top" src={images[e.image]} />
                <Card.Body>
                  <Card.Title>{e.title}</Card.Title>
                  <Card.Text>{e.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Jumbotron>
    <Jumbotron id="requirements">
      <Container fluid="sm">
        <Row>
          <h2>{data.requirements.heading}</h2>
        </Row>
        <Row>
          {data.requirements.items.map((e,i) => (
            <Col sm="12" md="4" key={"requirements-"+i}>
              <Card body>
                <Card.Text>
                  {e.text}
                </Card.Text>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Jumbotron>
    <Jumbotron id="support">
      <Container fluid="sm">
        <Row>
          <h2>{data.support.heading}</h2>
        </Row>
        <Row>
          {data.support.items.map((e,i) => (
            <Col sm="12" md="4" key={"support-"+i}>
              <Card>
                <Card.Img className="centerBlock" variant="top" src={images[e.image]} />
                <Card.Body>
                  <Card.Title>{e.title}</Card.Title>
                  <Card.Text>{e.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Jumbotron>
    <Jumbotron id="team">
      <Container fluid="sm">
        <Row>
          <h2>{data.team.heading}</h2>
        </Row>
        <Row>
          {data.team.items.map((e,i) => (
            <Col sm="12" md="4" key={"team-"+i}>   
              <Card>
                <Card.Title>{e.title}</Card.Title>
                <Card.Img className="centerBlock" src={images[e.image]} />
                <Card.Body>
                  <Card.Subtitle>{e.subtitle}</Card.Subtitle>
                  <Card.Text>{e.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Jumbotron>
  </div>
);
export default page