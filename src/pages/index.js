import * as React from "react"
import data from "../data/index.yaml"
import images from "../images/index"
import { Button, Carousel, Card, Col, Image, Row } from "antd"
import "../styles/index.css"

const Page = () => (
  <>
    <div id="carousel" className="section">
      <Carousel autoplay arrows={true} dots={true} autoplaySpeed={5000}>
        {data.carousel.slides.map((e,i) => (
          <Card key={"carousel-"+i}>
            <Image src={images[e.image]} />
            <div style={{textAlign:"center"}}>
              <h3>{e.title}</h3>
              <p>{e.text}</p>
              <Button href={`#${e.link}`}>{e.button}</Button>
            </div>
          </Card>
          ))}
      </Carousel>
    </div>
    <div id="services" className="section">
      <h2>{data.services.heading}</h2>
      <div>
        <Row align="stretch" className="card-deck">
          {data.services.items.map((e,i) => (
            <Col sm={24} md={8} key={"services-"+i}>
              <Card>
                <Row justify="center" align="middle">
                  <Col>
                    <Image src={images[e.image]} />
                  </Col>
                </Row>
                <Row justify="center" align="middle">
                  <h3>{e.title}</h3>
                </Row>
                <Row justify="center" align="middle">
                  <p>{e.text}</p>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
    <div id="requirements" className="emphasis section">
      <h2>{data.requirements.heading}</h2>
      <div>
        <Row className="card-deck transparent">
          {data.requirements.items.map((e,i) => (
            <Col sm={24} md={8} key={"requirements-"+i}>
              <Card key={"requirements-"+i}>
                <p>{e.text}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
    <div id="support" className="dark section">
      <h2>{data.support.heading}</h2>
      <div>
        <Row className="card-deck">
          {data.support.items.map((e,i) => (
            <Col sm={24} md={8} key={"support-"+i}>
              <Card key={"support-"+i}>
                <center>
                  <Image style={{height:"162px", width:"auto", borderRadius:"50%"}} src={images[e.image]} />
                  <h3>{e.title}</h3>
                </center>
                <p>{e.text}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
    <div id="team" className="section">
      <h2>{data.team.heading}</h2>
      <div>
        <Row className="card-deck">
          {data.team.items.map((e,i) => (
            <Col sm={24} md={8} key={"team-"+i}>
              <Card key={"team"+i}>
                <center>
                  <h3>{e.title}</h3>
                  <Image style={{height:"162px", width:"auto"}} src={images[e.image]} />
                  <h3>{e.subtitle}</h3>
                </center>
                <p>{e.text}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  </>
);
export default Page