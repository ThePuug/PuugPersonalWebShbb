import React, { useState } from "react"
import styled from "styled-components"
import { Section } from "../components/custom"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Button, Card, Col, Form, Input, message, Result, Row, Space, Tooltip, Typography } from "antd"
import { EnvironmentOutlined, FacebookOutlined, FormOutlined, MailOutlined, PhoneOutlined, SmileOutlined } from "@ant-design/icons"
import axios from "axios"
const { Link, Text, Title } = Typography
const { TextArea } = Input

const StyledSection = styled(Section)`
  background-color: white;
`

const PageHeader = styled(Row)`
  .ant-col > * {
    text-align: center;
    margin:8px 0;
  }
  .gatsby-image-wrapper {
    margin:8px;
    box-shadow:1px 1px 7px #000a;
  }
`

const ContactOption = styled(Card)`
  border:none;
`

const Page = ({ data }) => {
  const [formAction, setFormAction] = useState({ action: "Send", disabled: false })

  const onFinish = (values) => {
    setFormAction({ action: "Please wait...", disabled: true })
    axios.post('/api/contact', values)
      .then((res) => {
        setFormAction({ action: "sent", disabled: true })
      }).catch((ex) => {
        message.error("Something went wrong, please try again.")
        setFormAction({ action: "Send", disabled: false })
      })
  }

  const onFinishFailed = (errorInfo) => { }

  const [selected, setSelected] = useState(null)

  return <StyledSection>
    <PageHeader align="middle" justify="space-around" gutter={16}>
      <Col sm={24} md={12}>
        <div>
          <Title level={2}>FOR MORE INFORMATION</Title>
          <Title level={3}>HERE ARE OPTIONS FOR CONTACTING US:</Title>
          <Space direction="horizontal">
            <Tooltip title="Visit us">
              <Button size="large" href="#visit" onClick={() => setSelected("visit")}><EnvironmentOutlined /></Button>
            </Tooltip>
            <Tooltip title="Call us">
              <Button size="large" href="#call" onClick={() => setSelected("call")}><PhoneOutlined /></Button>
            </Tooltip>
            <Tooltip title="Message us">
              <Button size="large" href="#message" onClick={() => setSelected("message")}><FacebookOutlined /></Button>
            </Tooltip>
            <Tooltip title="Write us">
              <Button size="large" href="#write" onClick={() => setSelected("write")}><FormOutlined /></Button>
            </Tooltip>
            <Tooltip title="Email us">
              <Button size="large" href="#email" onClick={() => setSelected("email")}><MailOutlined /></Button>
            </Tooltip>
          </Space>
        </div>
      </Col>
      <Col sm={24} md={12}>
        <Link href={data.staticMap.mapUrl}>
          <GatsbyImage className="contactLocation" image={getImage(data.staticMap.childFile)} alt="South Hill Bread Box" />
        </Link>
      </Col>
    </PageHeader>
    <Row gutter={16}>
      <Col sm={24} md={12}>
        <ContactOption id="visit" style={{ background: selected === "visit" ? "#ff9c27" : "none" }}>
          <Row align="middle" wrap={false}>
            <Col flex="0 0 60px" style={{ fontSize: "3em" }}>
              <EnvironmentOutlined />
            </Col>
            <Col flex="auto">
              <Text>You can <Text strong>visit us</Text> at <Link href={data.staticMap.mapUrl}>604 E. Northington Street, South Hill, VA</Link> on the first two Saturdays of each month between 10 AM and 1 PM<br />
                (located on the backside of the Medicine Shop and Aaron's Rentals)</Text>
            </Col>
          </Row>
        </ContactOption>
        <ContactOption id="call" style={{ background: selected === "call" ? "#ff9c27" : "none" }}>
          <Row align="middle" wrap={false}>
            <Col flex="0 0 60px" style={{ fontSize: "3em" }}>
              <PhoneOutlined />
            </Col>
            <Col flex="auto">
              <Text>You can call the Bread Box at <Link href="tel:4344478353">434-447-8353</Link> and <Text strong>leave us a message</Text> with your name and phone number<br />
        (messages are checked once or twice a week usually)</Text>
            </Col>
          </Row>
        </ContactOption>
        <ContactOption id="message" style={{ background: selected === "message" ? "#ff9c27" : "none" }}>
          <Row align="middle" wrap={false}>
            <Col flex="0 0 60px" style={{ fontSize: "3em" }}>
              <FacebookOutlined />
            </Col>
            <Col flex="auto">
              <Text>You can <Text strong>message us</Text> on our <Link href="https://www.facebook.com/southhillbreadbox">Facebook Page</Link></Text>
            </Col>
          </Row>
        </ContactOption>
        <ContactOption id="write" style={{ background: selected === "write" ? "#ff9c27" : "none" }}>
          <Row align="middle" wrap={false}>
            <Col flex="0 0 60px" style={{ fontSize: "3em" }}>
              <FormOutlined />
            </Col>
            <Col flex="auto">
              <Text>You can <Text strong>write us</Text> at:
        <blockquote style={{ marginBottom: "0" }}>
                  PO Box 213<br />
          South Hill, VA 23970
        </blockquote></Text>
            </Col>
          </Row>
        </ContactOption>
      </Col>
      <Col sm={24} md={12}>
        <ContactOption id="email" style={{ background: selected === "email" ? "#ff9c27" : "none" }}>
          <Row align="middle" wrap={false}>
            <Col flex="0 0 60px" style={{ fontSize: "3em" }}>
              <MailOutlined />
            </Col>
            <Col flex="auto">
              <Text>You can <Text strong>e-mail us</Text> using the form below</Text>
            </Col>
          </Row>
          <Row>
            <Col flex="auto">
              {formAction.action !== "sent" &&
                <Form labelCol={0} wrapperCol={16} name="contact" onFinish={onFinish} onFinishFailed={onFinishFailed}>
                  <Form.Item name="Name" rules={[{ required: true }]}>
                    <Input placeholder="Enter your name..." disabled={formAction.disabled} />
                  </Form.Item>
                  <Form.Item name="Email" rules={[{ required: true }]}>
                    <Input placeholder="Enter your email..." type="email" disabled={formAction.disabled} />
                  </Form.Item>
                  <Form.Item name="Message" rules={[{ required: true }]}>
                    <TextArea showCount maxLength={2000} placeholder="Message" autoSize={{ minRows: 3, maxRows: 15 }} disabled={formAction.disabled} />
                  </Form.Item>
                  <Button htmlType="submit" block disabled={formAction.disabled}>{formAction.action}</Button>
                </Form>
              }
              {formAction.action === "sent" &&
                <Card>
                  <Result icon={<SmileOutlined />} title="Email sent!" subTitle="You can expect to see a response in the next 72 hours." />
                </Card>
              }
            </Col>
          </Row>
        </ContactOption>
      </Col>
    </Row>
  </StyledSection >
};

export const query = graphql`query {
        staticMap {
        mapUrl
    childFile {
        childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
  }
}`

export default Page