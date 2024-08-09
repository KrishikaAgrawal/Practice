/* import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
 */

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Start from "./Components/Start/Start";
import MortgageCalculator from "./Components/MortgageCalculator/MortgageCalculator";
// import Error from "./Components/Error/Error";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "About",
        element: <About />,
      },
      {
        path: "Start",
        element: <Start />,
      },
      {
        path: "MortgageCalculator",
        element: <MortgageCalculator />,
      },

      // {
      //   path: "*",
      //   element: <Error />,
      // },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
