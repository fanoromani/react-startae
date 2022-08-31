import React from "react";
import ReactDOM from "react-dom/client";
import { Container } from "./components/Container/container";
import { Header } from "./components/Header/header";
import "./styles/main.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Container />
  </React.StrictMode>
);
