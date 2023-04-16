import { Link } from "react-router-dom";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Header() {
  return (
    <footer>
        <div className="logo">


      <div className="menu">
        <Link to="/">Home</Link>
        <Link to="/Sobre">Sobre</Link>
        {/* <Link to="/Vitrine">Vitrine</Link> */}
        <Link to="/Cadastro">Cadastro</Link>
    
      </div>
    </foot>
  );
}

export default Header;
