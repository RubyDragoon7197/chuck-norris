import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function Menu() {
  const [query, setQuery] = useState("chuck");
  const [jokes, setJokes] = useState([]);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favoritos")) || []
  );

  const fetchJokes = async () => {
    const res = await fetch(`https://api.chucknorris.io/jokes/search?query=${query}`);
    const data = await res.json();
    setJokes(data.result);
  };

  const toggleFavorite = (joke) => {
    const exists = favorites.find((f) => f.id === joke.id);
    let updated;

    if (exists) {
      updated = favorites.filter((f) => f.id !== joke.id);
    } else {
      updated = [...favorites, joke];
    }

    setFavorites(updated);
    localStorage.setItem("favoritos", JSON.stringify(updated));
  };

  useEffect(() => {
    fetchJokes();
  }, []);

  return (
    <div className="menu">
      <h2>Chuck Norris Jokes</h2>
      <div className="search">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar chistes..."
        />
        <button onClick={fetchJokes}>Buscar</button>
      </div>

      <ul className="joke-list">
        {jokes.map((joke) => (
          <li key={joke.id}>
            <p>{joke.value}</p>
            <button onClick={() => toggleFavorite(joke)}>
              {favorites.find((f) => f.id === joke.id)
                ? "★ Quitar"
                : "☆ Favorito"}
            </button>
            <Link to={`/detalles/${joke.id}`}>Ver detalles</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
