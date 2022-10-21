import React from "react";
import { Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";

const { Sider } = Layout;

const sidebarComponents = [{ label: "Home" }];

function Sidebar() {
  const navigate = useNavigate();

  const components = sidebarComponents.map((component, index) => {
    return {
      key: component.label,
      label: component.label,
      onClick: () => navigate(`/`),
    };
    // if (component.subComponents) {
    //   return {
    //     key: component.label,
    //     label: component.label,
    //     children: component?.subComponents.map((component, index) => {
    //       // const subKey = index * 4 + j + 1;
    //       return {
    //         key: component,
    //         label: component,
    //         onClick: (e: any) =>
    //           navigate(`/${e.keyPath.reverse().join("/").toLowerCase()}`),
    //       };
    //     }),
    //   };
    // } else {
    //   return {
    //     key: component.label,
    //     label: component.label,
    //     onClick: () => navigate(`/`),
    //   };
    // }
  });

  return (
    <Sider width={200} className="site-layout-background">
      <Menu
        className="sidebar-menu"
        mode="inline"
        // defaultSelectedKeys={["1"]}
        // defaultOpenKeys={["sub1"]}
        style={{
          height: "100%",
          borderRight: 0,
          color: "#fff",
          fontWeight: 800,
        }}
        items={components}
      />
    </Sider>
  );
}

export default Sidebar;
