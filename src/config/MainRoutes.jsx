import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  Cryptocurrencies,
  CryptoDetails,
  Exchanges,
  News,
  HomePage,
} from "./../components";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
      <Route path="/crypto/:coinId" element={<CryptoDetails />} />
      <Route path="/exchanges" element={<Exchanges />} />
      <Route path="/news" element={<News />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default MainRoutes;
