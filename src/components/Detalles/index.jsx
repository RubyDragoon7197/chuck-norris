import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./styles.css";

function Detalles() {
  const { id } = useParams();
  const [joke, setJoke] = useState(null);

  useEffect(() => {
    fetch(`https://api.chucknorris.io/jokes/${id}`)
      .then((res) => res.json())
      .then((data) => setJoke(data));
  }, [id]);

  return (
    <div className="detalles">
      {joke ? (
        <>
          <h2>Detalles del Chiste</h2>
          <p>{joke.value}</p>
          <small>Categoría: {joke.categories[0] || "Sin categoría"}</small>
        </>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}

export default Detalles;
