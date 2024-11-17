// root/src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import 'typeface-rhodium-libre';
import "@fontsource/outfit";
import '@fontsource/roboto-mono'; // Defaults to weight 400
import "@fontsource/oxanium"; // Defaults to weight 400
import 'typeface-overpass-mono';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
