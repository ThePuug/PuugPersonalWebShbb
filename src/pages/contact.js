import * as React from "react"
import axios from "axios"
import { Button, Form, Input } from "antd"

const { TextArea } = Input

const page = () => {
  const onFinish = (values) => {
    axios.post('/api/SendMail',values)
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return <>
    <h2>FOR MORE INFORMATION</h2>
    <h3>HERE ARE OPTIONS FOR CONTACTING US:</h3>
    <ul className="contactOptions">
      <li>You can visit us at 604 E. Northington Street, South Hill, VA on Thursdays between 10 AM and 1 PM<br/>
        (located on the backside of the Medicine Shop and Aaron' Rentals)</li>
      <li>You can call the Bread Box at 434-447-8353 and leave us a message with your name and phone number<br/>
        (messages are checked once or twice a week usually)</li>
      <li>You can message our <a href="https://www.facebook.com/pages/southhillbreadbox">Facebook Page</a></li>
      <li>You can write us at PO Box 213, South Hill, VA 23970</li>
      <li>You can e-mail us below.</li>
    </ul>
    <Form labelCol={0} wrapperCol={16} name="contact" onFinish={onFinish} onFinishFailed={onFinishFailed} >
      <Form.Item name="Name" rules={[{required:true}]}>
        <Input placeholder="Enter your name..." />
      </Form.Item>
      <Form.Item name="Email" rules={[{required:true}]}>
        <Input placeholder="Enter your email..." type="email" />
      </Form.Item>
      <Form.Item name="Message" rules={[{required:true}]}>
        <TextArea showCount maxLength={2000} placeholder="Message" autoSize={{minRows:3, maxRows:15}}/>
      </Form.Item>
      <Button htmlType="submit" block>Send</Button>
    </Form>
  </>
};
export default page;