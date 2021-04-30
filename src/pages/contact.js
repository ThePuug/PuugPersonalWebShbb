import React, { useState } from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Button, Card, Form, Input } from "antd"
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

  return <div className="contact">
    <a href={data.staticMap.mapUrl}>
      <Card>
        <GatsbyImage className="contactLocation" image={getImage(data.staticMap.childFile)} alt="South Hill Bread Box" />
      </Card>
    </a>
    <h2>FOR MORE INFORMATION</h2>
    <h3>HERE ARE OPTIONS FOR CONTACTING US:</h3>
    <div dangerouslySetInnerHTML={{__html: data.markdownRemark.html}} />
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
  markdownRemark {
    html
  }
}`

export default Page