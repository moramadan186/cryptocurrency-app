import React from "react";
import millify from "millify";
import { Collapse, Row, Col, Typography, Avatar } from "antd";
import HTMLReactParser from "html-react-parser";

import { useGetExchangesQuery } from "../services/cryptoApi";
import Loader from "./Loader";

const { Text } = Typography;
const { Panel } = Collapse;

const description =
  "<p> Thier is no description, because the the original endpoint(Get exchanges from Coinranking) requires the ultra plan,so the endpoint used here is for bitcoin exchanges rates. </p>";
const Exchanges = () => {
  const { data, isFetching } = useGetExchangesQuery();
  const exchangesList = data?.data?.exchanges;
  if (isFetching) return <Loader />;
  console.log(exchangesList);

  return (
    <>
      <Row>
        <Col span={6}>Exchanges</Col>
        <Col span={6}>24h Trade Volume</Col>
        <Col span={6}>Markets</Col>
        <Col span={6}>Change</Col>
      </Row>
      <Collapse>
        {exchangesList?.map((exchange) => (
          <Panel
            key={exchange.uuid}
            showArrow={false}
            header={
              <Row key={exchange.uuid} className="exchange-header">
                <Col span={6}>
                  <Text>
                    <strong>{exchange.rank}.</strong>
                  </Text>
                  <Avatar className="exchange-image" src={exchange.iconUrl} />
                  <Text>
                    <strong>{exchange.name}</strong>
                  </Text>
                </Col>
                <Col span={6}>${millify(exchange["24hVolume"])}</Col>
                <Col span={6}>{millify(exchange.numberOfMarkets)}</Col>
                <Col span={6}>{millify(exchange.price)}%</Col>
              </Row>
            }
          >
            {HTMLReactParser(exchange.description || description)}
          </Panel>
        ))}
      </Collapse>
    </>
  );
};

export default Exchanges;
