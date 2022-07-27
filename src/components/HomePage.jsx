import React from "react";
import { Typography } from "antd";

const HomePage = () => {
  const { Title } = Typography;
  return (
    <>
      <Title level={2} className="heading">Global Crypto Stats</Title>
    </>
  );
};

export default HomePage;
