import { NavLink } from "react-router-dom";
import HomeIcon from "../images/icon-home.svg";
import ProductIcon from "../images/icon-product.svg";
import SVG from "react-inlinesvg";

const NavigationLink = (props) => (
  <NavLink
    className="link"
    to={props.href}
    activeClassName="link-active"
    exact={true}
  >
    <i className="link-icon">
      <SVG src={props.icon} />
    </i>
    <span className="link-label">{props.label}</span>
  </NavLink>
);

const Navigation = () => (
  <nav className="navigation">
    <ul>
      <li>
        <NavigationLink href="/" label="Home" icon={HomeIcon} />
      </li>
      <li>
        <NavigationLink href="/product" label="Product" icon={ProductIcon} />
      </li>
    </ul>
  </nav>
);

export default Navigation;
