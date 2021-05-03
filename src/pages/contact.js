import React, { useState } from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Button, Card, Form, Input, Result, Typography } from "antd"
import { SmileOutlined } from "@ant-design/icons"
import axios from "axios"
import "../styles/contact.css"
const { Link, Text, Title } = Typography
const { TextArea } = Input

const Page = ({data}) => {
  const [formAction,setFormAction] = useState({action: "Send", disabled:false})

  const onFinish = (values) => {
    setFormAction({action: "Please wait...", disabled:true})
    axios.post('/api/contact',values)
    .then((res) => {
      setFormAction({action: "sent", disabled:true})
    }).catch((ex) => {
      setFormAction({action: "Send", disabled:false})
    })
  }

  const onFinishFailed = (errorInfo) => {}

  return <div id="contact" className="section">
    <Link href={data.staticMap.mapUrl}>
      <Card bordered={false}>
        <GatsbyImage className="contactLocation" image={getImage(data.staticMap.childFile)} alt="South Hill Bread Box" />
      </Card>
    </Link>
    <Title level={2}>FOR MORE INFORMATION</Title>
    <Title level={3}>HERE ARE OPTIONS FOR CONTACTING US:</Title>
    <ul>
      <li>You can <Text strong>visit us</Text> at <Link href={data.staticMap.mapUrl}>604 E. Northington Street, South Hill, VA</Link> on Thursdays between 10 AM and 1 PM<br />
        (located on the backside of the Medicine Shop and Aaron's Rentals)</li>
      <li>You can call the Bread Box at <Link href="tel:4344478353">434-447-8353</Link> and <Text strong>leave us a message</Text> with your name and phone number<br />
        (messages are checked once or twice a week usually)</li>
      <li>You can <Text strong>message us</Text> on our <Link href="https://www.facebook.com/southhillbreadbox">Facebook Page</Link></li>
      <li>You can <Text strong>write us</Text> at:
        <blockquote>
          PO Box 213<br />
          South Hill, VA 23970
        </blockquote></li>
      <li>You can <Text strong>e-mail us</Text> using the form below</li>
    </ul>
    {formAction.action !== "sent" &&
      <Form labelCol={0} wrapperCol={16} name="contact" onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Form.Item name="Name" rules={[{required:true}]}>
          <Input placeholder="Enter your name..." disabled={formAction.disabled} />
        </Form.Item>
        <Form.Item name="Email" rules={[{required:true}]}>
          <Input placeholder="Enter your email..." type="email" disabled={formAction.disabled} />
        </Form.Item>
        <Form.Item name="Message" rules={[{required:true}]}>
          <TextArea showCount maxLength={2000} placeholder="Message" autoSize={{minRows:3, maxRows:15}} disabled={formAction.disabled} />
        </Form.Item>
        <Button htmlType="submit" block disabled={formAction.disabled}>{formAction.action}</Button>
      </Form>
    }
    {formAction.action==="sent" &&
      <Card>
        <Result icon={<SmileOutlined />} title="Email sent!" subTitle="You can expect to see a response in the next 72 hours."/>
      </Card>
    }
  </div>
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