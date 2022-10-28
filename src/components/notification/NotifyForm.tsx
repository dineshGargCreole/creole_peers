import React, { useState } from "react";
import {
  Button,
  Form,
  Input,
  DatePicker,
  Space,
  Radio,
  Select,
  Divider,
} from "antd";
import moment from "moment";
import Dashboard from "../wfh/Dashboard";
import ReactMultiEmailWrapper from "../common/ReactMultiEmailWrapper";
import "./NotifyForm.css";

const { Option } = Select;

function NotifyForm() {
  const [form] = Form.useForm();
  const [notifyTo, setNotifyTo] = useState<string[]>([]);
  const [wfhCount, setWfhCount] = useState(5);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [isBorderColor, setIsBorderColor] = useState({
    notifyTo: false,
    fromDate: false,
    toDate: false,
  });

  const disabledDate = (currentDate: any) => {
    return currentDate && currentDate < moment().endOf("day");
  };

  const onFinish = (values: any) => {
    console.log("Success:", {
      ...values,
      notifyTo: notifyTo,
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
    errorInfo.errorFields.forEach((errorField: any) => {
      errorField.name[0] === "notifyTo" &&
        errorField.errors.length > 0 &&
        setIsBorderColor({ ...isBorderColor, notifyTo: true });
    });
  };

  const handleFieldsChange = (changeField: any, allFields: any) => {
    console.log("changeField", changeField);
    changeField[0].name[0] === "notifyTo" &&
      changeField[0].value.length > 0 &&
      setIsBorderColor({ ...isBorderColor, notifyTo: false });

    changeField[0].name[0] === "fromDate" &&
      changeField[0].value !== "" &&
      setIsBorderColor({ ...isBorderColor, fromDate: false });

    changeField[0].name[0] === "toDate" &&
      changeField[0].value !== "" &&
      setIsBorderColor({ ...isBorderColor, toDate: false });
  };

  return (
    <Form
      form={form}
      name="notify"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      onFieldsChange={handleFieldsChange}
      autoComplete="off"
      style={{ background: "#fff", padding: "30px" }}
      disabled={wfhCount === 7}
    >
      <div style={{ display: "inline-block" }}>
        <Form.Item
          label="Request"
          name="request"
          rules={[{ required: true, message: "This is required field!" }]}
        >
          <Select placeholder="Please select a request">
            <Option value="wfh">Work From Home</Option>
            <Option value="Leave">Leave</Option>
          </Select>
        </Form.Item>

        <Space size={300}>
          <Form.Item
            name="fromDate"
            label="From Date"
            style={{ display: "inline-block" }}
            rules={[{ required: true, message: "This is required field!" }]}
          >
            <DatePicker
              disabledDate={disabledDate}
              placeholder="From date"
              inputReadOnly
              onChange={(date: any, dateString: string) => {
                if (moment(toDate) < moment(date)) {
                  form.setFieldValue("fromDate", "");
                  setIsBorderColor({ ...isBorderColor, fromDate: true });
                  console.log("err");
                  return;
                }
                setFromDate(dateString);
              }}
              style={{
                borderColor: isBorderColor.fromDate ? "orange" : "",
                boxShadow: isBorderColor.fromDate ? "0 0 0 1px orange" : "",
              }}
            />
          </Form.Item>

          <Form.Item
            name="toDate"
            label="To Date"
            style={{ display: "inline-block" }}
            rules={[{ required: true, message: "This is required field!" }]}
          >
            <DatePicker
              disabledDate={disabledDate}
              placeholder="To date"
              inputReadOnly
              onChange={(date: any, dateString: string) => {
                if (moment(fromDate) > moment(date)) {
                  form.setFieldValue("toDate", "");
                  setIsBorderColor({ ...isBorderColor, toDate: true });
                  console.log("err");
                  return;
                }
                setToDate(dateString);
              }}
              style={{
                borderColor: isBorderColor.toDate ? "orange" : "",
                boxShadow: isBorderColor.toDate ? "0 0 0 1px orange" : "",
              }}
            />
          </Form.Item>
        </Space>

        {fromDate !== "" && toDate !== "" && (
          <div>
            <Form.Item
              name="fromDateWorkShift"
              rules={[{ required: true, message: "This is required field!" }]}
              style={{ width: "35%", display: "inline-block" }}
            >
              <Radio.Group>
                <Space size={100}>
                  <Radio value={"half1"}>First Half</Radio>
                  <Radio value={"half2"}>Second Half</Radio>
                </Space>
              </Radio.Group>
            </Form.Item>

            <Form.Item
              name="toDateWorkShift"
              rules={[{ required: true, message: "This is required field!" }]}
              style={{ width: "35%", display: "inline-block", float: "right" }}
            >
              <Radio.Group>
                <Space size={100}>
                  <Radio value={"half1"}>First Half</Radio>
                  <Radio value={"half2"}>Second Half</Radio>
                </Space>
              </Radio.Group>
            </Form.Item>
          </div>
        )}

        <Form.Item
          name="notifyTo"
          label="Notify To"
          rules={[{ required: true, message: "This is required field!" }]}
        >
          <ReactMultiEmailWrapper
            placeholder="Send notification to email"
            onChange={(value: string[]) => setNotifyTo(value)}
            style={{
              width: "700px",
              borderColor: isBorderColor.notifyTo ? "#ff4d4f" : "",
              borderRadius: "unset",
            }}
            className="notify-to-wrapper"
          />
        </Form.Item>

        <Form.Item label="Remarks" name="remarks" initialValue="">
          <Input.TextArea />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Notify
          </Button>
        </Form.Item>
      </div>
      {/* <div
        style={{ display: "inline-block", float: "right", marginRight: "20px" }}
      >
        <Dashboard wfhCount={2} title="Your Current Status">
          <p>Monthly Total Valid WFH Days: 7</p>
          <p>You Consumed in This Month: 2</p>
        </Dashboard>
      </div> */}
    </Form>
  );
}

export default NotifyForm;
