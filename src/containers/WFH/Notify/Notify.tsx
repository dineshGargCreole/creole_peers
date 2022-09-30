import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Form,
  Input,
  DatePicker,
  Space,
  Radio,
  Tag,
} from "antd";
import type { RadioChangeEvent } from "antd";
import moment from "moment";

function Notify() {
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
    <div>
      <Tag
        color={
          wfhCount < 4
            ? "#87d068"
            : wfhCount >= 4 && wfhCount <= 6
            ? "#f50"
            : "#cd201f"
        }
        style={{
          display: "block",
          height: "35px",
          padding: "5px",
          fontSize: "15px",
          marginBottom: "15px",
          color: "#fff",
        }}
      >
        Your Work from home count of this month: {wfhCount}
      </Tag>

      <Form
        name="notify"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        initialValues={{
          requestType: "Notify WFH",
        }}
        style={{ background: "#fff", padding: "25px" }}
        disabled={wfhCount === 7}
      >
        <Form.Item label="Request Type" name="requestType">
          <Input disabled style={{ maxWidth: "200px" }} />
        </Form.Item>

        <Space size={200}>
          <Form.Item name="fromDate" style={{ display: "inline-block" }}>
            <DatePicker disabledDate={disabledDate} placeholder="From Date" />
          </Form.Item>

          <Form.Item name="toDate" style={{ display: "inline-block" }}>
            <DatePicker placeholder="To Date" />
          </Form.Item>
        </Space>

        <Form.Item name="duration">
          <Radio.Group>
            <Space size={120}>
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
      </Form>
    </div>
  );
}

export default Notify;
