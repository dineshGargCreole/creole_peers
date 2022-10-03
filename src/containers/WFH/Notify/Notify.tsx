import React, { useState } from "react";
import { Table } from "antd";
import wfh from "../../../assets/images/wfh.png";
import WfhForm from "../../../components/wfhForm";

function Notify() {
  const columns = [
    {
      title: "Request Type",
      dataIndex: "requestType",
      key: "requestType",
    },
    {
      title: "From Date",
      dataIndex: "fromDate",
      key: "fromDate",
    },
    {
      title: "To Date",
      dataIndex: "toDate",
      key: "toDate",
    },
    {
      title: "Work Shift",
      dataIndex: "workShift",
      key: "workShift",
    },
  ];

  const data = [
    {
      key: "1",
      requestType: "Notify WFH",
      fromDate: "2022-10-01",
      toDate: "2022-10-02",
      workShift: "full",
    },
    {
      key: "2",
      requestType: "Notify WFH",
      fromDate: "2022-10-01",
      toDate: "2022-10-02",
      workShift: "full",
    },
  ];

  return (
    <div>
      {/* <Tag
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
      </Tag> */}

      <WfhForm
        wfhType='Notification'
      />

      <div style={{ marginTop: 50 }}>
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
}

export default Notify;
