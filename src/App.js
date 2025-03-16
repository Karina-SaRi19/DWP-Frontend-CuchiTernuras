import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import DashboardPage from './pages/Dashboard/DashboardPage';
import LandingPage from './pages/LandingPage/LandingPage';
import LoginPage from './pages/LoginPage/LoginPage';
import PerfilPage from './pages/Perfil/PerfilPage';
import CatalogoPage from './pages/Catalogo/CatalogoPage';
import Components from "./Components/Components"; // Asegúrate de que la ruta sea correcta
import AyudaPage from './pages/Ayuda/AyudaPage'; // Importa la página de ayuda si existe

const App = () => {
  return (
    <Router>
      <Components /> {/* Agrega el menú en todas las páginas */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/perfil" element={<PerfilPage />} />
        <Route path="/catalogo" element={<CatalogoPage />} />
        <Route path="/ayuda" element={<AyudaPage />} /> {/* Agrega la ruta de ayuda */}
        <Route
          path="/dashboard"
          element={
            <MainLayout>
              <DashboardPage />
            </MainLayout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
