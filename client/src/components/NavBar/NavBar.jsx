import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import "./NavBar.scss";

function NavBar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/img/en.png" alt="en flag" />
            <KeyboardArrowDownOutlinedIcon />
          </div>
          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownOutlinedIcon />
          </div>
          <div className="item">
            <Link className="link" to="/products/women">
              Women
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/men">
              Men
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/children">
              Children
            </Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" to="/">
            WAKABISTORE
          </Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" to="/">
              Home
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              About
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Contact
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Stores
            </Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <div className="cartIcon">
              <ShoppingCartOutlinedIcon />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
