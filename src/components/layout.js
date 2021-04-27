import React from "react"
import { navigate } from "gatsby"
import { Col, Layout, Menu, Row } from "antd"
import footer from "../data/footer.yaml"
import "../global.css"

const { Content, Footer, Header } = Layout

if (typeof window !== "undefined") {
  require("smooth-scroll")('a[href*="#"]')
}

const CustomLayout = ({children}) => (
  <Layout>
    <Header>
      <Menu mode="horizontal"
        onClick={(it) => navigate(it.key)}>
        <Menu.Item key="/">Home</Menu.Item>
        <Menu.Item key="/contact">Contact</Menu.Item>
      </Menu>
    </Header>
    <Content>{children}</Content>
    <Footer>
      <Row align="top" gutter={16}>
        <Col sm={24} md={8}>
          <h2>{footer.about.heading}</h2>
          <p>{footer.about.text}</p>
        </Col>
        <Col sm={24} md={8}>
          <h2>{footer.links.heading}</h2>
          {footer.links.items.map((e,i) => (
            <a key={"links-"+i} href={e.url}><li style={{listStyle:"none"}}>{e.text}</li></a>
          ))}
        </Col>
        <Col sm={24} md={8}>
          <h2>{footer.numbers.heading}</h2>
          {footer.numbers.items.map((e,i) => (
            <a key={"numbers-"+i} href={`tel:${e.number}`}><li style={{listStyle:"none"}}>{e.text}</li></a>
          ))}
          <h2>{footer.social.heading}</h2>
          {footer.social.items.map((e,i) => (
            <a key={"social-"+i} href={e.url}><li style={{listStyle:"none"}}>{e.text}</li></a>
          ))}
        </Col>
      </Row>
    </Footer>
  </Layout>
);

export default CustomLayout;