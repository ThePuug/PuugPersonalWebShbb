import React, { useState } from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Button, Card, Form, Input } from "antd"
import axios from "axios"
import "../styles/contact.css"
const { TextArea } = Input

const Page = ({data}) => {
  const [formAction,setFormAction] = useState({action: "Send", disabled:false})

  const onFinish = (values) => {
    setFormAction({action: "Please wait...", disabled:true})
    axios.post('/api/SendMail',values)
    .then((res) => {
      setFormAction({action: "Sent!", disabled:true})
    }).catch((ex) => {
      setFormAction({action: "Send", disabled:false})
    })
  }

  const onFinishFailed = (errorInfo) => {}

  return <div id="contact" className="section">
    <a href={data.staticMap.mapUrl}>
      <Card bordered={false}>
        <GatsbyImage className="contactLocation" image={getImage(data.staticMap.childFile)} alt="South Hill Bread Box" />
      </Card>
    </a>
    <h2>FOR MORE INFORMATION</h2>
    <h3>HERE ARE OPTIONS FOR CONTACTING US:</h3>
    <ul>
      <li>You can <strong>visit us</strong> at <a href={data.staticMap.mapUrl}>604 E. Northington Street, South Hill, VA</a> on Thursdays between 10 AM and 1 PM
        <br />(located on the backside of the Medicine Shop and Aaron's Rentals)</li>
      <li>You can call the Bread Box at <a href="tel:4344478353">434-447-8353</a> and <strong>leave us a message</strong> with your name and phone number
        <br />(messages are checked once or twice a week usually)</li>
      <li>You can <strong>message us</strong> on our <a href="https://www.facebook.com/southhillbreadbox">Facebook Page</a></li>
      <li>You can <strong>write us</strong> at:<br />
        PO Box 213<br />
        South Hill, VA 23970</li>
      <li>You can <strong>e-mail us</strong> using the form below</li>
    </ul>
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