import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../containers/Home/Home";
import Notify from "../containers/WFH/Notify/Notify";

function index() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wfh/notification" element={<Notify />} />
      </Routes>
    </div>
  );
}

export default index;
