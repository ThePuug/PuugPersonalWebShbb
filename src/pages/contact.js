import React, { useState } from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Button, Form, Input } from "antd"
import axios from "axios"
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

  return <>
    <a href={data.staticMap.mapUrl}>
      <GatsbyImage className="contactLocation" image={getImage(data.staticMap.childFile)} alt="South Hill Bread Box" />
    </a>
    <h2>FOR MORE INFORMATION</h2>
    <h3>HERE ARE OPTIONS FOR CONTACTING US:</h3>
    <ul className="contactOptions">
      <li>You can visit us at 604 E. Northington Street, South Hill, VA on Thursdays between 10 AM and 1 PM<br/>
        (located on the backside of the Medicine Shop and Aaron' Rentals)</li>
      <li>You can call the Bread Box at 434-447-8353 and leave us a message with your name and phone number<br/>
        (messages are checked once or twice a week usually)</li>
      <li>You can message us on our <a href="https://www.facebook.com/southhillbreadbox">Facebook Page</a></li>
      <li>You can write us at PO Box 213, South Hill, VA 23970</li>
      <li>You can e-mail us using the form below.</li>
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
  </>
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