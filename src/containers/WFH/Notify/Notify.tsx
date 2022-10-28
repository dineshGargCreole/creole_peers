import React, { useState } from "react";
import { Table } from "antd";
import WfhForm from "../../../components/wfhForm";

function Notify() {
  const columns = [
    {
      title: "WFH Type",
      dataIndex: "wfhType",
      key: "wfhType",
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
      wfhType: "Notification",
      fromDate: "2022-10-01",
      toDate: "2022-10-02",
      workShift: "Full",
    },
    {
      key: "2",
      wfhType: "Notification",
      fromDate: "2022-10-01",
      toDate: "2022-10-02",
      workShift: "Full",
    },
    {
      key: "3",
      wfhType: "Notification",
      fromDate: "2022-10-01",
      toDate: "2022-10-02",
      workShift: "Full",
    },
    {
      key: "4",
      wfhType: "Notification",
      fromDate: "2022-10-01",
      toDate: "2022-10-02",
      workShift: "Full",
    },
    {
      key: "5",
      wfhType: "Notification",
      fromDate: "2022-10-01",
      toDate: "2022-10-02",
      workShift: "Full",
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

    {/* <Row></Row> */}

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
