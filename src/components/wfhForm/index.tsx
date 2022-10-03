import React, { useState } from "react";
import { Button, Form, Input, DatePicker, Space, Radio } from "antd";
import moment from "moment";
import Dashboard from '../wfh/Dashboard'

interface IProps {
  wfhType: string; 
}

function Index(props: IProps) {
  const [wfhCount, setWfhCount] = useState(5);

  const disabledDate = (currentDate: any) => {
    return currentDate && currentDate < moment().endOf("day");
  };

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name='wfh'
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      initialValues={{
        wfhType: props.wfhType
      }}
      style={{ background: "#fff", padding: "30px" }}
      disabled={wfhCount === 7}
    >
      <div style={{ display: "inline-block" }}>
        <Form.Item label="Work From Home Type" name="wfhType">
          <Input disabled style={{ maxWidth: "345px" }} />
        </Form.Item>

        <Space size={200}>
          <Form.Item name="fromDate" style={{ display: "inline-block" }}>
            <DatePicker disabledDate={disabledDate} placeholder="From Date" />
          </Form.Item>

          <Form.Item name="toDate" style={{ display: "inline-block" }}>
            <DatePicker placeholder="To Date" />
          </Form.Item>
        </Space>

        <Form.Item name="workShift">
          <Radio.Group>
            <Space size={112}>
              <Radio value={"half1"}>First Half</Radio>
              <Radio value={"half2"}>Second Half</Radio>
              <Radio value={"full"}>Full Day</Radio>
            </Space>
          </Radio.Group>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </div>
      <div
        style={{ display: "inline-block", float: "right", marginRight: "20px" }}
      >
       <Dashboard wfhCount={2} title='Your Current Status'>
          <p>Monthly Total Valid WFH Days: 7</p>
          <p>You Consumed in This Month: 2</p>
        </Dashboard> 
      </div>
    </Form>
  );
}

export default Index;
