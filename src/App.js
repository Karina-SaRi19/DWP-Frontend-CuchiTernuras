import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import DashboardPage from './pages/Dashboard/DashboardPage';
import LandingPage from './pages/LandingPage/LandingPage';
import LoginPage from './pages/LoginPage/LoginPage';
import PerfilPage from './pages/Perfil/PerfilPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/perfilPage" element={<PerfilPage />} />
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
