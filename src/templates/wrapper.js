import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, navigate } from "gatsby"
import { Section } from "../components/custom"
import { StaticImage } from "gatsby-plugin-image"
import { Col, Layout, Menu, Row, Typography } from "antd"
const { Footer, Header } = Layout
const { Title, Paragraph } = Typography

if (typeof window !== "undefined") {
  require("smooth-scroll")('a[href*="#"]')
}

const StyledLayout = styled(Layout)`
  background: none;
`

const StyledHeader = styled(Header)`
  height: 60px;
  line-height: inherit;
  background: #f0f2f5;
  padding: 0;
  margin: 0;
`

const HeaderSection = styled(Section)`
  padding-bottom: 0px;
  .ant-menu {
    background: none;
  }
`

const HeaderLink = styled(Menu.Item)`
  padding-bottom: 18px !important;
  padding-top: 18px !important;
`

const StyledFooter = styled(Footer)`
  li {
    list-style: none;
    padding:.33em 0;  
  }
`

const Template = ({ children }) => {
  const footer = useStaticQuery(graphql`query {
    allDataYaml {
      nodes {
        numbers {
          heading
          items {
            number
            text
          }
        }
        links {
          items {
            url
            text
          }
          heading
        }
        about {
          text
          heading
        }
        social {
          items {
            image {
              publicURL
            }
            text
            url
          }
          heading
        }
      }
    }
  }`).allDataYaml.nodes.find(e => e.about && e.links && e.numbers && e.social)

  return <StyledLayout>
    <StyledHeader>
      <HeaderSection merge>
        <Row align="stretch" justify="start" gutter={16}>
          <Col flex="none">
            <StaticImage src="../images/logo.png" alt="South Hill Bread Box" placeholder="blurred" height={60} />
          </Col>
          <Col flex="auto">
            <Menu mode="horizontal" onClick={(it) => navigate(it.key)}>
              <HeaderLink key="/">Home</HeaderLink>
              <HeaderLink key="/contact">Contact</HeaderLink>
            </Menu>
          </Col>
        </Row>
      </HeaderSection>
    </StyledHeader>
    <Layout>{children}</Layout>
    <StyledFooter>
      <Section merge>
        <Row align="top" gutter={16}>
          <Col sm={24} md={8}>
            <Title level={4}>{footer.about.heading}</Title>
            <Paragraph>{footer.about.text}</Paragraph>
          </Col>
          <Col sm={24} md={8}>
            <Title level={4}>{footer.links.heading}</Title>
            {footer.links.items.map((e, i) => (
              <li key={"links-" + i}><a href={e.url}>{e.text}</a></li>
            ))}
          </Col>
          <Col sm={24} md={8}>
            <Title level={4}>{footer.numbers.heading}</Title>
            {footer.numbers.items.map((e, i) => (
              <li key={"numbers-" + i}><a href={`tel:${e.number}`} title="Dial now">{e.text}</a></li>
            ))}
            <Title level={4}>{footer.social.heading}</Title>
            {footer.social.items.map((e, i) => (
              <li key={"social-" + i}><a href={e.url}>{e.text}</a></li>
            ))}
          </Col>
        </Row>
      </Section>
    </StyledFooter>
  </StyledLayout>
};

export default Template
