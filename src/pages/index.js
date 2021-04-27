import * as React from "react"
import data from "../data/index.yaml"
import images from "../images/index"
import { Button, Carousel, Card, Col, Divider, Image, Row } from "antd"

const page = () => (
  <>
    <Carousel autoplay>
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
    <Divider id="services" />
    <h2>{data.services.heading}</h2>
    <Row gutter={16}>
      {data.services.items.map((e,i) => (
        <Col sm={24} md={8} key={"services-"+i}>
          <Card>
            <center>
              <Image style={{height:"50px", width:"auto"}} src={images[e.image]} />
              <h3>{e.title}</h3>
            </center>
            <p>{e.text}</p>
          </Card>
        </Col>
      ))}
    </Row>
    <Divider id="requirements" />
    <h2>{data.requirements.heading}</h2>
    <Row gutter={16}>
      {data.requirements.items.map((e,i) => (
        <Col sm={24} md={8} key={"requirements-"+i}>
          <Card key={"requirements-"+i}>
            <p>{e.text}</p>
          </Card>
        </Col>
      ))}
    </Row>
    <Divider id="support" />
    <h2>{data.support.heading}</h2>
    <Row gutter={16}>
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
    <Divider id="team" />
    <h2>{data.team.heading}</h2>
    <Row gutter={16}>
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
  </>
);
export default page