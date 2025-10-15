import { useState, useEffect } from "react";
import "./styles.css";

function Favoritos() {
  const [favoritos, setFavoritos] = useState([]);

  // Cargar los chistes guardados al abrir la página
  useEffect(() => {
    const guardados = JSON.parse(localStorage.getItem("favoritos")) || [];
    setFavoritos(guardados);
  }, []);

  // Función para eliminar un chiste del localStorage
  const eliminarFavorito = (id) => {
    const nuevos = favoritos.filter((chiste) => chiste.id !== id);
    setFavoritos(nuevos);
    localStorage.setItem("favoritos", JSON.stringify(nuevos));
  };

  return (
    <div className="favoritos-container">
      <h2>Mis Favoritos</h2>

      {favoritos.length === 0 ? (
        <p className="vacio">No tienes chistes guardados todavía 😅</p>
      ) : (
        <ul className="lista-favoritos">
          {favoritos.map((chiste) => (
            <li key={chiste.id} className="favorito-item">
              <p>{chiste.value}</p>
              <button
                className="btn-eliminar"
                onClick={() => eliminarFavorito(chiste.id)}
              >
                ❌ Quitar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Favoritos;
