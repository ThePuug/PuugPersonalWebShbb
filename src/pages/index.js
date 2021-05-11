import * as React from "react"
import styled from "styled-components"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import { Section } from "../components/custom"
import { Button, Carousel, Card, Col, Image, Layout, Row, Typography } from "antd"
import { CheckSquareTwoTone } from "@ant-design/icons"
const { Paragraph, Title } = Typography
const { Content } = Layout

const StyledSection = styled(Section)`
  background-color: white;
  .ant-typography {
    color: #192024;
  }
`

const DarkSection = styled(StyledSection)`
  background-color: #192024;
  .ant-typography {
    color: white;
  }
  .ant-card {
    background:none;
    border:none;
    box-shadow:none;  
  }
`

const EmphasisSection = styled(DarkSection)`
  background-color: #ff9c27;
`

const StyledCarousel = styled(Carousel)`
  .ant-col > * {
    text-align:center;
    margin:8px 0;
  }
  .gatsby-image-wrapper {
    margin:8px;
    box-shadow:1px 1px 7px #000a;
  }
`

const CardDeck = styled(Row)`
  row-gap:16px !important;
  margin-left: -8px !important;
  margin-right: -8px !important;
  > .ant-col {
    padding-left:8px !important;
    padding-right:8px !important;
    display: flex;
    align-items: stretch;
  }
  .ant-card {
    background-color:#fffa;
    border-color:#0004;
    box-shadow:1px 1px 8px #0004;
    width:100%;
  }
`

const Requirement = styled(Col)`
  .ant-card {
    background: none;
    box-shadow: none;
  }
  .anticon {
    font-size: 3em;
  }
`

const Service = styled(Col)`
  .ant-image {
    padding: 15px;
    background-color: #ff9c27;
    border-radius: 1em;
    width: 96px;
  }
  .ant-image-img {
    height: 66px;
  }
`

const StyledCard = styled(Col)`
  .gatsby-image-wrapper {
    border-radius: 50%;
    box-shadow:1px 1px 7px #000a;
  }
`

const Page = ({data: {allDataYaml: {nodes}}}) => {
  const data = nodes.find(e => e.carousel && e.services && e.requirements && e.support && e.team)
  return <Content>
    <StyledSection id="carousel" merge>
      <StyledCarousel autoplay dots={false} autoplaySpeed={5000}>
        {data.carousel.slides.map((e, i) => (
          <div key={"carousel-" + i}>
            <Row align="middle" justify="space-around" gutter={16}>
              <Col sm={24} md={12}>
                <div>
                  <Title level={3}>{e.title}</Title>
                  <Paragraph>{e.text}</Paragraph>
                  <Button href={`#${e.link}`}>{e.button}</Button>
                </div>
              </Col>
              <Col sm={24} md={12}>
                <GatsbyImage image={getImage(e.image)} alt={e.title} />
              </Col>
            </Row>
          </div>
        ))}
      </StyledCarousel>
    </StyledSection>
    <StyledSection id="services">
      <Title level={2}>{data.services.heading}</Title>
      <div>
        <CardDeck align="stretch">
          {data.services.items.map((e, i) => (
            <Service sm={24} md={8} key={"services-" + i}>
              <Card>
                <Row justify="center" align="middle">
                  <Col>
                    <Image src={e.image.publicURL} alt={e.title} />
                  </Col>
                </Row>
                <Row justify="center" align="middle">
                  <Title level={3}>{e.title}</Title>
                </Row>
                <Row justify="center" align="middle">
                  <Paragraph>{e.text}</Paragraph>
                </Row>
              </Card>
            </Service>
          ))}
        </CardDeck>
      </div>
    </StyledSection>
    <EmphasisSection id="requirements">
      <Title level={2}>{data.requirements.heading}</Title>
      <div>
        <CardDeck>
          {data.requirements.items.map((e, i) => (
            <Requirement sm={24} md={8} key={"requirements-" + i}>
              <Card key={"requirements-" + i}>
                <Row wrap={false} gutter={8}>
                  <Col flex="none"><CheckSquareTwoTone twoToneColor="#ff9c27" /></Col>
                  <Col flex="auto"><Paragraph>{e.text}</Paragraph></Col>
                </Row>
              </Card>
            </Requirement>
          ))}
        </CardDeck>
      </div>
    </EmphasisSection>
    <DarkSection id="support">
      <Title level={2}>{data.support.heading}</Title>
      <div>
        <Row className="card-deck">
          {data.support.items.map((e, i) => (
            <StyledCard sm={24} md={8} key={"support-" + i}>
              <Card key={"support-" + i}>
                <center>
                  <GatsbyImage image={getImage(e.image)} alt={e.title} />
                  <Title level={3}>{e.title}</Title>
                </center>
                <Paragraph>{e.text}</Paragraph>
              </Card>
            </StyledCard>
          ))}
        </Row>
      </div>
    </DarkSection>
    <StyledSection id="team">
      <Title level={2}>{data.team.heading}</Title>
      <div>
        <CardDeck>
          {data.team.items.map((e, i) => (
            <StyledCard sm={24} md={8} key={"team-" + i}>
              <Card key={"team" + i}>
                <center>
                  <Title level={3}>{e.title}</Title>
                  <GatsbyImage image={getImage(e.image)} alt={e.title} />
                  <Title level={3}>{e.subtitle}</Title>
                </center>
                <Paragraph>{e.text}</Paragraph>
              </Card>
            </StyledCard>
          ))}
        </CardDeck>
      </div>
    </StyledSection>
  </Content>
};

export const pageQuery = graphql`query {
  allDataYaml {
    nodes {
      carousel {
        slides {
          button
          image {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
          link
          text
          title
        }
      }
      services {
        heading
        items {
          text
          title
          image {
            publicURL
          }
        }
      }
      requirements {
        heading
        items {
          text
        }
      }
      support {
        heading
        items {
          image {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, height:162)
            }
          }
          text
          title
        }
      }
      team {
        heading
        items {
          subtitle
          text
          title
          image {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, height:162)
            }
          }
        }
      }
    }
  }
}`

export default Page