import React from 'react'
import { Breadcrumb } from "antd";
import { useLocation } from 'react-router-dom';


function StatusBar() {
  const { pathname } = useLocation();
  const statusValues = pathname.slice(1).split('/');

  const getTitle = (value: String) => {
    return value !== '' && value[0]?.toUpperCase() + value.slice(1)?.toLowerCase();
  }
  return (
    <Breadcrumb style={{ padding: 24 }}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      {statusValues.length > 0 && statusValues.map(value => <Breadcrumb.Item key={value}>{getTitle(value)}</Breadcrumb.Item>)}
    </Breadcrumb>
  )
}

export default StatusBar
