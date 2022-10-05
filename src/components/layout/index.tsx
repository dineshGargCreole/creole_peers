import React from "react";
import { Layout } from "antd";
import { Content } from "antd/lib/layout/layout";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import StatusBar from "./StatusBar";

function index(props: any) {
  return (
    <Layout>
      <Navbar />
      <Layout>
        <Sidebar />
        <Layout>
          <StatusBar />
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            {props.children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default index;
