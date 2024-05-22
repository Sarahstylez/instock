import "./Navigation.scss";
import logo from "../../assets/Logo/InStock-Logo.svg";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <header className="header">
      <div className="nav">
        <div className="nav__logo">
          <Link className="logo_link" to="/">
            <img className="nav__logo-img" src={logo} alt="Instock Logo" />
          </Link>
        </div>
        <div className="nav__links">
          <Link className="nav__warehouse" to="/warehouses">
            <div>Warehouses</div>
          </Link>
          <Link className="nav__inventory" to="/inventory">
            <div>Inventory</div>
          </Link>
        </div>
      </div>
      <div className="nav__empty"></div>
    </header>
  );
}

export default Navigation;
