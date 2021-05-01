import React from "react"
import { navigate } from "gatsby"
import { Col, Image, Layout, Menu, Row } from "antd"
import images from "../images/index"
import footer from "../data/footer.yaml"

const { Content, Footer, Header } = Layout

if (typeof window !== "undefined") {
  require("smooth-scroll")('a[href*="#"]')
}

const CustomLayout = ({children}) => (
  <Layout>
    <Header>
      <div>
        <Row>
          <Col flex="none">
            <Image src={images["logo"]}/>
          </Col>
          <Col flex="auto">
            <Menu mode="horizontal" onClick={(it) => navigate(it.key)}>
              <Menu.Item key="/">Home</Menu.Item>
              <Menu.Item key="/contact">Contact</Menu.Item>
            </Menu>
          </Col>
        </Row>
      </div>
    </Header>
    <Content>{children}</Content>
    <Footer>
      <div>
        <Row align="top" gutter={16}>
          <Col sm={24} md={8}>
            <h2>{footer.about.heading}</h2>
            <p>{footer.about.text}</p>
          </Col>
          <Col sm={24} md={8}>
            <h2>{footer.links.heading}</h2>
            {footer.links.items.map((e,i) => (
              <a key={"links-"+i} href={e.url}><li>{e.text}</li></a>
            ))}
          </Col>
          <Col sm={24} md={8}>
            <h2>{footer.numbers.heading}</h2>
            {footer.numbers.items.map((e,i) => (
              <a key={"numbers-"+i} href={`tel:${e.number}`} title="Dial now"><li>{e.text}</li></a>
            ))}
            <h2>{footer.social.heading}</h2>
            {footer.social.items.map((e,i) => (
              <a key={"social-"+i} href={e.url}><li>{e.text}</li></a>
            ))}
          </Col>
        </Row>
      </div>
    </Footer>
  </Layout>
);

export default CustomLayout;