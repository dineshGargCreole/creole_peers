import React from "react";
import { Layout, Menu } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Sider } = Layout;

const sidebarComponents = [{label: 'WFH', icon: HomeOutlined, subComponents: ['Notification', 'Request']}]

function Sidebar() {
  const navigate = useNavigate()

  const components = sidebarComponents.map((component, index) => {
    return {
      key: component.label,
      icon: React.createElement(component?.icon),
      label: component.label,
      children: component?.subComponents.map((component, index) => {
        // const subKey = index * 4 + j + 1;
        return {
          key: component,
          label: component,
          onClick: (e: any) => navigate(`/${e.keyPath.reverse().join('/').toLowerCase()}`)
        };
      }),
    };
  });

  return (
    <Sider width={200} className="site-layout-background">
      <Menu
        mode="inline"
        // defaultSelectedKeys={["1"]}
        // defaultOpenKeys={["sub1"]}
        style={{
          height: "100%",
          borderRight: 0,
          color: '#fff',
          fontWeight: 800,
        }}
        items={components}
      />
    </Sider>
  );
}

export default Sidebar;
