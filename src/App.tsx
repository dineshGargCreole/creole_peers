import React from "react";
import Layout from "./components/layout";
import Global from "./assets/styles/globalStyles";
import Routes from "./router";

import "./App.css";

function App() {
  return (
    <div className="">
      <Global />
      <Layout>
        <Routes />
      </Layout>
    </div>
  );
}

export default App;
