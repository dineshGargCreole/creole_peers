import React from "react";
import { Menu } from "antd";
import { Header } from "antd/lib/layout/layout";
import logo from "../../assets/images/logo.png";

function Navbar() {
  const items1 = ["1", "2", "3"].map((key) => ({
    key,
    label: `nav ${key}`,
  }));

  return (
    <div>
      <Header className="header">
        <img src={logo} alt="logo" className="logo" />
        {/* <Menu
          //   theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items1}
        /> */}
      </Header>
    </div>
  );
}

export default Navbar;
