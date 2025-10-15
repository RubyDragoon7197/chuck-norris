import "./styles.css";
import chuck from "../../assets/chuck.png";

function Informativa() {
  return (
    <div className="info-container">
      <h1 className="title">CHUCK NORRIS API</h1>
      <p className="author">Andrés Pedroza</p>

      <div className="card">
        <h2>CHUCK NORRIS API</h2>
        <p className="card-author">Andrés Pedroza</p>
        <img src={chuck} alt="Chuck Norris" className="chuck-image" />
        <div className="card-footer">
          <p>API con frases y chistes de Chuck Norris</p>
          <small>api.chucknorris.io</small>
          <span>v 1.0.0</span>
        </div>
      </div>

      <div className="footer-banner">
        <p>API con frases y chistes de Chuck Norris.</p>
      </div>
    </div>
  );
}

export default Informativa;
