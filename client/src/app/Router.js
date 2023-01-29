import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MyDataPage from "../pages/MyDataPage";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="mydata" element={<MyDataPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
