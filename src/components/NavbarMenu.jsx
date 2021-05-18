import { Link } from "react-router-dom";
import "./NavbarMenu.css";
const NavbarMenu = () => {
  return (
    <nav>
      <h3>Color flipper</h3>
      <div className="inline">
        <h3>
          <Link to="/">Simple</Link>
        </h3>
        <h3>
          <Link to="/hex">Hex</Link>
        </h3>
      </div>
    </nav>
  );
};

export default NavbarMenu;
