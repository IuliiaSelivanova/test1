import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles/reset.css";
import "./styles/main.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
