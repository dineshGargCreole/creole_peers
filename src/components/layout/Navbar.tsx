import React from "react";
import { Menu, Image } from "antd";
import { Header } from "antd/lib/layout/layout";
import logo from "../../assets/images/logo.png";
import './Navbar.css'

function Navbar() {
  const items1 = ["1", "2", "3"].map((key) => ({
    key,
    label: `nav ${key}`,
  }));

  return (
    <div>
      <Header className="header">
        <img src={logo} alt="logo" className="logo" />
        <Menu
          mode="horizontal"
          className="navbar-menu"
        >
        <Menu.Item key="profileImage" className="navbar-menu-item-image">
          <Image
            width={55}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            className="navbar-profile-image"
          />
        </Menu.Item>
        </Menu>
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
