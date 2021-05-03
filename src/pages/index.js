import * as React from "react"
import data from "../data/index.yaml"
import images from "../images/index"
import { Button, Carousel, Card, Col, Image, Row, Typography } from "antd"
import "../styles/index.css"
const { Paragraph, Title } = Typography

const Page = () => (
  <>
    <div id="carousel" className="section">
      <Carousel autoplay dots={false} autoplaySpeed={5000}>
        {data.carousel.slides.map((e,i) => (
          <div key={"carousel-"+i}>
            <Row align="middle" justify="space-around" gutter={16}>
              <Col sm={24} md={12}>
                <div>
                  <Title level={3}>{e.title}</Title>
                  <Paragraph>{e.text}</Paragraph>
                  <Button href={`#${e.link}`}>{e.button}</Button>
                </div>
              </Col>
              <Col sm={24} md={12}>
                <Image src={images[e.image]} />
              </Col>
            </Row>
          </div>
        ))}
      </Carousel>
    </div>
    <div id="services" className="section">
      <Title level={2}>{data.services.heading}</Title>
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
                  <Title level={3}>{e.title}</Title>
                </Row>
                <Row justify="center" align="middle">
                  <Paragraph>{e.text}</Paragraph>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
    <div id="requirements" className="emphasis section">
      <Title level={2}>{data.requirements.heading}</Title>
      <div>
        <Row className="card-deck transparent">
          {data.requirements.items.map((e,i) => (
            <Col sm={24} md={8} key={"requirements-"+i}>
              <Card key={"requirements-"+i}>
                <Paragraph>{e.text}</Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
    <div id="support" className="dark section">
      <Title level={2}>{data.support.heading}</Title>
      <div>
        <Row className="card-deck">
          {data.support.items.map((e,i) => (
            <Col sm={24} md={8} key={"support-"+i}>
              <Card key={"support-"+i}>
                <center>
                  <Image src={images[e.image]} />
                  <Title level={3}>{e.title}</Title>
                </center>
                <Paragraph>{e.text}</Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
    <div id="team" className="section">
      <Title level={2}>{data.team.heading}</Title>
      <div>
        <Row className="card-deck">
          {data.team.items.map((e,i) => (
            <Col sm={24} md={8} key={"team-"+i}>
              <Card key={"team"+i}>
                <center>
                  <Title level={3}>{e.title}</Title>
                  <Image src={images[e.image]} />
                  <Title level={3}>{e.subtitle}</Title>
                </center>
                <Paragraph>{e.text}</Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  </>
);
export default Page