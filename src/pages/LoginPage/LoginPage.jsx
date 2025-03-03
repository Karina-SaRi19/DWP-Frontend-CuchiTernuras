import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Card, Typography, Space, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

// Importa la imagen desde la carpeta assets
import LogoTernurin from "../../images/LogoTernurin.png";  // Asegúrate de que la ruta sea correcta

const { Title } = Typography;

const LoginPage = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (values) => {
    console.log("Usuario:", values.username);
    console.log("Contraseña:", values.password);

    if (values.username && values.password) {
      navigate("/perfil");
    } else {
      setError("Ingrese usuario y contraseña");
    }
  };

  return (
    <div
      style={{
        background: "#D8D8D8",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        style={{
          width: 380,
          padding: 25,
          textAlign: "center",
          borderRadius: 20,
          backgroundColor: "#B3E5FC",
          boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Title level={3} style={{ color: "#9C2780", fontWeight: "bold" }}>
          Bienvenido a CuchiTernuras!
        </Title>

        {/* Imagen debajo del título */}
        <div style={{ marginBottom: 20 }}>
          <img
            src={LogoTernurin}  // Usa la imagen importada
            alt="logo"
            width={150}
            height={150}
            style={{
              borderRadius: "50%",
              backgroundColor: "#E8EAE6",
              padding: 7,
              marginTop: 10, // Espacio con el título
            }}
          />
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <Form onFinish={handleLogin} layout="vertical">
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Ingrese usuario" }]}
          >
            <Input
              prefix={<UserOutlined style={{ color: "#9C2780" }} />}
              placeholder="Usuario"
              style={{
                height: 40,
                fontSize: "16px",
                borderRadius: 20,
                backgroundColor: "#E6B4D1",
                borderColor: "#9C2780",
                color: "black",
              }}
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Ingrese contraseña" }]}
          >
            <Input.Password
              prefix={<LockOutlined style={{ color: "#9C2780" }} />}
              placeholder="Contraseña"
              style={{
                height: 40,
                fontSize: "16px",
                borderRadius: 20,
                backgroundColor: "#E6B4D1",
                borderColor: "#9C2780",
                color: "black",
              }}
            />
          </Form.Item>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "14px",
            }}
          >
            <Checkbox style={{ color: "#9C2780" }}>Recuérdame</Checkbox>
            <a href="#" style={{ color: "#9C2780", textDecoration: "underline" }}>
              Olvidaste tu contraseña?
            </a>
          </div>

          <Form.Item style={{ marginTop: "20px" }}>
            <Button
              htmlType="submit"
              block
              style={{
                backgroundColor: "#FBE59D",
                borderColor: "#9C2780",
                color: "black",
                height: 40,
                fontSize: "16px",
                borderRadius: 20,
                fontWeight: "bold",
              }}
            >
              LOGIN
            </Button>
          </Form.Item>

          <p style={{ fontSize: "14px" }}>
            ¿No tienes cuenta?{" "}
            <span
              onClick={() => navigate("/registro")}
              style={{
                color: "#9C2780",
                cursor: "pointer",
                fontWeight: "bold",
                textDecoration: "underline",
              }}
            >
              Regístrate aquí
            </span>
          </p>
        </Form>
      </Card>
    </div>
  );
};

export default LoginPage;
