import logo from "../../assets/VERICOIN.svg";
import "./nav.css";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className="navbar">
      <div className="logoContainer">
        <img src={logo} alt="logo" />
        <div className="logoTexts">
          <p>VERIFARM</p>
          <p>MINING</p>
        </div>
      </div>
      <div className="navLinks">
        <ul>
          <li>
            <a href="#" className="activeLink">Home</a>
          </li>
          <li>
            <a href="#">Vericoin Pool</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Reviews</a>
          </li>
        </ul>
        <div className="navButtons">
          <button>log in</button>
          <button className="greenBtn">Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
