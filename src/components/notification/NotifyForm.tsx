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
import ReactSelect from "../common/ReactSelect";
import { IOption } from "../common/ReactSelect";

const { Option } = Select;

function NotifyForm() {
  const [notifyTo, setNotifyTo] = useState<any>([]);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isWorkshift, setIsworkshift] = useState(false);
  const [wfhCount, setWfhCount] = useState(5);

  const disabledDate = (currentDate: any) => {
    return currentDate && currentDate < moment().endOf("day");
  };

  const onFinish = (values: any) => {
    console.log("Success:", {
      ...values,
      notifyTo: notifyTo.map((element: IOption) => element.value),
    });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const checkWorkshiftActive = (existingField: any, currentField: any) => {
    if (existingField.name[0] === "fromDate") {
      existingField.touched &&
        currentField.name[0] === "toDate" &&
        currentField.touched &&
        setIsworkshift(true);
    } else if (existingField.name[0] === "toDate") {
      existingField.touched &&
        currentField.name[0] === "fromDate" &&
        currentField.touched &&
        setIsworkshift(true);
    }
  };

  const isFromDateBeforeToDate = (existingField: any, currentField: any) => {
    if (existingField.name[0] === "fromDate") {
      if (moment(existingField.value) > moment(currentField.value)) {
        return true;
      }
    }
  };

  const checkAllFields = (current: any, all: any) => {
    // const touchedFields = all.filter((field: any) => {
    //   if (field.name[0] === "fromDate" && current[0].name[0] === "toDate") {
    //     return isFromDateBeforeToDate(field, current);
    //   }
    //   checkWorkshiftActive(field, current[0]);
    //   return field.touched && field.value !== "";
    // });
    // return touchedFields;

    let touchedFields: any = [];
    all.forEach((field: any) => {
      if (field.touched && field.value !== "") {
        if (field.name[0] === "fromDate" && current[0].name[0] === "toDate") {
          if (isFromDateBeforeToDate(field, current[0])) {
            return console.log("error");
          }
        }
        // checkWorkshiftActive(field, current[0]);
        touchedFields.push(field);
      }
    });
    return touchedFields;
  };

  const handleFieldsChange = (changedField: any, allFields: any) => {
    const touchedFields = checkAllFields(changedField, allFields);
    touchedFields.length === allFields.length && setIsDisabled(false);
  };

  return (
    <Form
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
          rules={[{ required: true, message: "Please select your country!" }]}
        >
          <Select placeholder="Please select a country">
            <Option value="wfh">Work From Home</Option>
            <Option value="Leave">Leave</Option>
          </Select>
        </Form.Item>

        <Space size={200}>
          <Form.Item
            name="fromDate"
            label="From Date"
            style={{ display: "inline-block" }}
            rules={[{ required: true, message: "This is required field!" }]}
          >
            <DatePicker
              disabledDate={disabledDate}
              placeholder="From Date"
              inputReadOnly
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
              placeholder="To Date"
              inputReadOnly
            />
          </Form.Item>
        </Space>

        {isWorkshift && (
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
          <ReactSelect onChange={(value: any) => setNotifyTo([...value])} />
        </Form.Item>

        <Form.Item
          label="Remarks"
          name="remarks"
          rules={[{ required: true, message: "This is required field!" }]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" disabled={isDisabled}>
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
