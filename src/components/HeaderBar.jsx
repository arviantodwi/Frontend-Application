import logo from "../images/logo.svg";
import { Link } from "react-router-dom";
import SVG from "react-inlinesvg";

const HeaderBar = () => {
  return (
    <header className="headerbar">
      <div className="container">
        <Link className="brand" to="/">
          <SVG src={logo} height={27} />
        </Link>
      </div>
    </header>
  );
};

export default HeaderBar;
