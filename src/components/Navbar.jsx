import {
  BulbOutlined,
  FundOutlined,
  HomeOutlined,
  MoneyCollectOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Menu, Typography, Image } from "antd";
import React from "react";
import { Link } from "react-router-dom";

import icon from "../images/cryptocurrency.png";

const items = [
  {
    label: <Link to="/">Home</Link>,
    key: "home",
    icon: <HomeOutlined />,
  },
  {
    label: <Link to="/cryptocurrencies">Cryptocurrencies</Link>,
    key: "cryptocurrencies",
    icon: <FundOutlined />,
  },
  {
    label: <Link to="/exchanges">Exchanges</Link>,
    key: "exchanges",
    icon: <MoneyCollectOutlined />,
  },
  {
    label: <Link to="/news">News</Link>,
    key: "news",
    icon: <BulbOutlined />,
  },
];
const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">Cryptoverse</Link>
        </Typography.Title>
        {/* <Button className="menu-control-container"></Button> */}
      </div>
      <Menu theme="dark" items={items} />
    </div>
  );
};

export default Navbar;
