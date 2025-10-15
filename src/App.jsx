import { Routes, Route, Link } from "react-router-dom";
import Menu from "./components/Menu";
import Favoritos from "./components/Favoritos";
import Original from "./components/Original";
import Informativa from "./components/Informativa";
import Detalles from "./components/Detalles";

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <Link to="/">Menú</Link>
        <Link to="/favoritos">Favoritos</Link>
        <Link to="/original">Original</Link>
        <Link to="/informativa">Informativa</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/original" element={<Original />} />
        <Route path="/informativa" element={<Informativa />} />
        <Route path="/detalles/:id" element={<Detalles />} />
      </Routes>
    </div>
  );
}

export default App;
