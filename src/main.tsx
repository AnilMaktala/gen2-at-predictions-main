import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import TextRecognition from "./TextRecognition";
import Translation from "./Translation";
import { Amplify } from "aws-amplify";
import amplifyconfig from "../amplifyconfiguration.json";

Amplify.configure(amplifyconfig);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    {/* <Translation /> */}
    {/* <TextRecognition /> */}
  </React.StrictMode>
);
