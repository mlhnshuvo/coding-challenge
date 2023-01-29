import React from "react";
import Context from "./Context";
import Router from "./Router";
import Helmet from "./Helmet";

const App = () => {
  return (
    <Context>
      <Helmet />
      <Router />
    </Context>
  );
};

export default App;
