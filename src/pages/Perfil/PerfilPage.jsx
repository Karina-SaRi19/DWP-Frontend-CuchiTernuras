import React from "react";
import { Layout, Menu, Input, Badge, Table } from "antd";
import {
  SearchOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  OrderedListOutlined,
  GiftOutlined,
  QuestionCircleOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom"; // Para la redirección
import LogoTernurin from "../../images/LogoTernurin.png";

const { Header, Footer } = Layout;
const { Search } = Input;

const PerfilPage = () => {
  const navigate = useNavigate(); // Hook para navegación

  const userData = {
    name: "Usuario Ejemplo",
    email: "usuario@example.com",
    orders: 5,
    wishlist: 10,
  };

  const menuItems = [
    { label: "Inicio" },
    { label: "Cuenta" },
    { label: "Ayuda" },
  ];

  // Función para cerrar sesión
  const handleLogout = () => {
    localStorage.removeItem("token"); // Borra el token si lo usas
    sessionStorage.removeItem("token");
    navigate("/login"); // Redirige al login
  };

  const tableData = [
    { key: "1", icon: <UserOutlined />, title: "Descripción general de la cuenta" },
    { key: "2", icon: <OrderedListOutlined />, title: "Mis pedidos" },
    { key: "3", icon: <GiftOutlined />, title: "Lista de deseos" },
    { key: "4", icon: <QuestionCircleOutlined />, title: "Soporte y ayuda" },
    { key: "5", icon: <LogoutOutlined />, title: "Cerrar sesión", onClick: handleLogout }, // Cerrar sesión
  ];

  const columns = [
    { title: "", dataIndex: "icon", key: "icon", width: 50 },
    { 
      title: "Contenido", 
      dataIndex: "title", 
      key: "title",
      render: (text, record) => (
        <span onClick={record.onClick} style={{ 
          cursor: record.onClick ? "pointer" : "default", 
          color: record.onClick ? "#1890ff" : "inherit" 
        }}>
          {text}
        </span>
      )
    }
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Barra de navegación */}
      <Header style={{ background: "#C599B6", padding: "0 20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          {/* LOGO */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={LogoTernurin} alt="Logo" style={{ width: 45, height: 45, marginRight: "20px" }} />
          </div>

          {/* Menú de navegación */}
          <Menu theme="#C599B6" mode="horizontal" style={{ padding: "0", color: "white", marginLeft: "-920px" }}>
            {menuItems.map((item, index) => (
              <Menu.Item key={index}>{item.label}</Menu.Item>
            ))}
          </Menu>

          {/* Barra de búsqueda */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <Search placeholder="Buscar..." enterButton={<SearchOutlined />} style={{ width: 200, marginRight: "80px" }} />
          </div>
        </div>
      </Header>

      {/* Iconos de favoritos y carrito */}
      <div style={{ position: "absolute", right: "60px", top: "20px" }}>
        <HeartOutlined style={{ color: "white", fontSize: "22px" }} />
      </div>
      <div style={{ position: "absolute", right: "20px", top: "20px" }}>
        <Badge count={userData.orders} style={{ fontSize: "12px" }}>
          <ShoppingCartOutlined style={{ color: "white", fontSize: "22px" }} />
        </Badge>
      </div>

      {/* Contenido */}
      <Footer style={{ background: "#F5F5F5", padding: "20px", display: "flex", justifyContent: "flex-start" }}>
        {/* Tabla de Contenidos */}
        <div style={{ width: "30%", maxWidth: "400px", marginRight: "40px" }}>
          <Table columns={columns} dataSource={tableData} pagination={false} showHeader={false} />
        </div>

        {/* Sección "Mi Cuenta" */}
        <div style={{ flex: 1 }}>
          <h2 style={{ fontWeight: "bold", marginBottom: "10px" }}>Mi Cuenta</h2>
          <div style={{
            display: "flex",
            alignItems: "center",
            background: "#fff",
            padding: "15px",
            borderRadius: "10px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            maxWidth: "400px"
          }}>
            {/* Imagen */}
            <img src={LogoTernurin} alt="Perfil" style={{ width: 60, height: 60, marginRight: "15px" }} />

            {/* Mensaje de bienvenida */}
            <p style={{ margin: 0, fontSize: "14px", color: "#555" }}>
              Bienvenido a tu cuenta, donde la ternura está a solo un clic de distancia.
            </p>
          </div>
        </div>
      </Footer>
    </Layout>
  );
};

export default PerfilPage;
