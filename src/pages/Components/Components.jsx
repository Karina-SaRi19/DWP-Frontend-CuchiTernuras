import React from "react";
import { Layout, Menu, Input, Badge } from "antd";
import { Link } from "react-router-dom";
import { SearchOutlined, HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import LogoTernurin from "../../images/LogoTernurin.png";

const { Header } = Layout;
const { Search } = Input;

const Components = () => {
  const userData = { orders: 5 };

  return (
    <Layout>
      <Header style={{ background: "#C599B6", padding: "0 20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={LogoTernurin} alt="Logo" style={{ width: 45, height: 45, marginRight: "20px" }} />
          </div>

          {/* Menú con Links para la navegación */}
          <Menu theme="#C599B6" mode="horizontal" style={{ background: "#C599B6", borderBottom: "none", marginLeft: "-920px" }}>
            <Menu.Item key="inicio">
              <Link to="/catalogo" style={{ color: "white" }}>Inicio</Link>
            </Menu.Item>
            <Menu.Item key="perfil">
              <Link to="/perfil" style={{ color: "white" }}>Cuenta</Link>
            </Menu.Item>
            <Menu.Item key="ayuda">
              <Link to="/ayuda" style={{ color: "white" }}>Ayuda</Link>
            </Menu.Item>
          </Menu>

          <div style={{ display: "flex", alignItems: "center" }}>
            <Search placeholder="Buscar..." enterButton={<SearchOutlined />} style={{ width: 200, marginRight: "80px" }} />
          </div>
        </div>
      </Header>

      <div style={{ position: "absolute", right: "60px", top: "20px" }}>
        <HeartOutlined style={{ color: "white", fontSize: "22px" }} />
      </div>
      <div style={{ position: "absolute", right: "20px", top: "20px" }}>
        <Badge count={userData.orders} style={{ fontSize: "12px" }}>
          <ShoppingCartOutlined style={{ color: "white", fontSize: "22px" }} />
        </Badge>
      </div>
    </Layout>
  );
};

export default Components;
