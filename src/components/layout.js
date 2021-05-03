import React from "react"
import { navigate } from "gatsby"
import { Col, Image, Layout, Menu, Row, Typography } from "antd"
import images from "../images/index"
import footer from "../data/footer.yaml"
const { Link, Paragraph, Title } = Typography
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
            <Title level={4}>{footer.about.heading}</Title>
            <Paragraph>{footer.about.text}</Paragraph>
          </Col>
          <Col sm={24} md={8}>
            <Title level={4}>{footer.links.heading}</Title>
            {footer.links.items.map((e,i) => (
              <li key={"links-"+i}><Link href={e.url}>{e.text}</Link></li>
            ))}
          </Col>
          <Col sm={24} md={8}>
            <Title level={4}>{footer.numbers.heading}</Title>
            {footer.numbers.items.map((e,i) => (
              <li key={"numbers-"+i}><Link href={`tel:${e.number}`} title="Dial now">{e.text}</Link></li>
            ))}
            <Title level={4}>{footer.social.heading}</Title>
            {footer.social.items.map((e,i) => (
              <li key={"social-"+i}><Link href={e.url}>{e.text}</Link></li>
            ))}
          </Col>
        </Row>
      </div>
    </Footer>
  </Layout>
);

export default CustomLayout;