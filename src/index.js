import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import "antd/dist/reset.css"; 
import PerfilPage from "./pages/Perfil/PerfilPage";
import CatalogoPage from "./pages/Catalogo/CatalogoPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Perfil" element={<PerfilPage />} />
        <Route path="/Catalogo" element={<CatalogoPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
