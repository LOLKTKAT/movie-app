import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Suspense>
      <Router>
        <App />
      </Router>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
