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
  const [dayValue, setDayValue] = useState("");

  const onChange = (date: any, dateString: string) => {
    console.log("date", date);
    console.log("dateString", dateString);
  };

  const disabledDate = (currentDate: any) => {
    return currentDate && currentDate < moment().endOf("day");
  };

  const onChangeRadio = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setDayValue(e.target.value);
  };

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div style={{ background: "#fff", padding: "20px" }}>
      <Form
        name="notify"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        initialValues={{
          requestType: "Notify WFH",
        }}
      >
        <Form.Item label="Request Type" name="requestType">
          <Input disabled />
        </Form.Item>

        <Form.Item name="fromDate">
          <DatePicker disabledDate={disabledDate} placeholder="From Date" />
        </Form.Item>

        <Form.Item name="toDate">
          <DatePicker onChange={onChange} placeholder="To Date" />
        </Form.Item>

        <Form.Item name="duration">
          <Radio.Group>
            <Space size={300}>
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

      <Tag>This month Count: 1</Tag>
    </div>
  );
}

export default Notify;
