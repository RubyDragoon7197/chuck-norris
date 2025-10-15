import { useState } from "react";
import "./styles.css";

function Original() {
  const [joke, setJoke] = useState(null);

  const getRandomJoke = async () => {
    const res = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await res.json();
    setJoke(data);
  };

  return (
    <div className="original">
      <h2>Generador Aleatorio de Chistes 🤣</h2>
      <button onClick={getRandomJoke}>Mostrar uno</button>
      {joke && <p>{joke.value}</p>}
    </div>
  );
}

export default Original;
