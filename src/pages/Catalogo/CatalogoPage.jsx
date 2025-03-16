import React from "react";
import Components from "../Components/Components"; // Ajusta la ruta según tu estructura
import Banner1 from "../../images/banner1.jpg";
import Banner2 from "../../images/banner2.jpg";

// Imágenes de categorías
import Categoria1 from "../../images/banner1.jpg"; 
import Categoria2 from "../../images/banner1.jpg";
import Categoria3 from "../../images/banner1.jpg";
import Categoria4 from "../../images/banner1.jpg";
import Categoria5 from "../../images/banner1.jpg";

// Imágenes de últimos lanzamientos
import Lanzamiento1 from "../../images/banner2.jpg";
import Lanzamiento2 from "../../images/banner2.jpg";
import Lanzamiento3 from "../../images/banner2.jpg";

const CatalogoPage = () => {
  return (
    <div>
      <Components />
      
      {/* Contenedor del banner */}
      <div style={styles.bannerContainer}>
        <img src={Banner1} alt="Banner 1" style={styles.bannerImage} />
        <div style={styles.bannerText}>La dulzura nunca pasa de moda. ¡Encuentra tu favorito aquí!</div>
        <img src={Banner2} alt="Banner 2" style={styles.bannerImage} />
      </div>

      {/* Contenedor de categorías */}
      <div style={styles.categoriesContainer}>
        <div style={styles.categoryItem}>
          <img src={Categoria1} alt="Novedades" style={styles.categoryImage} />
          <span style={styles.categoryText}>Novedades</span>
        </div>
        <div style={styles.categoryItem}>
          <img src={Categoria2} alt="Ofertas" style={styles.categoryImage} />
          <span style={styles.categoryText}>Ofertas</span>
        </div>
        <div style={styles.categoryItem}>
          <img src={Categoria3} alt="Exclusivos" style={styles.categoryImage} />
          <span style={styles.categoryText}>Exclusivos</span>
        </div>
        <div style={styles.categoryItem}>
          <img src={Categoria4} alt="Colecciones" style={styles.categoryImage} />
          <span style={styles.categoryText}>Colecciones</span>
        </div>
        <div style={styles.categoryItem}>
          <img src={Categoria5} alt="Todos los sets" style={styles.categoryImage} />
          <span style={styles.categoryText}>Todos los sets</span>
        </div>
      </div>

      {/* Sección de Últimos Lanzamientos */}
      <h2 style={styles.sectionTitle}>Últimos Lanzamientos</h2>
      <div style={styles.lanzamientosContainer}>
        <img src={Lanzamiento1} alt="Lanzamiento 1" style={styles.lanzamientoImage} />
        <img src={Lanzamiento2} alt="Lanzamiento 2" style={styles.lanzamientoImage} />
        <img src={Lanzamiento3} alt="Lanzamiento 3" style={styles.lanzamientoImage} />
      </div>

      <h1>Catálogo de productos</h1>
      <p>Aquí irá la lista de productos...</p>
    </div>
  );
};

const styles = {
  bannerContainer: {
    display: "flex",
    alignItems: "stretch",
    justifyContent: "center",
    width: "100vw",
    height: "300px",
    margin: 0,
  },
  bannerImage: {
    width: "33.3%",
    height: "auto",
    objectFit: "cover",
    margin: 0,
    alignSelf: "stretch",
  },
  bannerText: {
    fontSize: "20px",
    fontWeight: "bold",
    fontFamily: "Dancing Script, cursive",
    color: "black",
    background: "radial-gradient(circle, rgba(248,226,196,1) 10%, rgba(235,164,198,1) 100%)",
    textAlign: "center",
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: 0,
    alignSelf: "stretch",
  },
  categoriesContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "35px",
    padding: "20px",
  },
  categoryItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  categoryImage: {
    width: "140px",
    height: "120px",
    objectFit: "cover",
    borderRadius: "10px",
  },
  categoryText: {
    marginTop: "8px",
    fontSize: "16px",
    fontWeight: "bold",
    fontFamily: "Poppins, sans-serif",
  },
  sectionTitle: {
    textAlign: "left",
    fontSize: "22px",
    fontWeight: "bold",
    fontFamily: "Poppins, sans-serif",
    marginTop: "30px",
  },
  lanzamientosContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    padding: "20px",
    marginLeft: "40px",
  },
  lanzamientoImage: {
    width: "200px",
    height: "180px",
    objectFit: "cover",
    borderRadius: "10px",
    textAlign: "left",
  },
};

export default CatalogoPage;
