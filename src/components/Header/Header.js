import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Cart from "@material-ui/icons/ShoppingCart";
import MoreIcon from "@material-ui/icons/MoreVert";
import logo from "../../images/Logo.png";
import useStyles from "./Style";
import { primary } from "../../StyleGuide/Colors";
import { Autocomplete } from "@material-ui/lab";
import { TextField, Badge } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "../../axios-orders";
import { getItem } from "../../utils/localStorage";

const Header = () => {
  const classes = useStyles();
  const userBadge = getItem("user");
  const [data, setData] = useState([]);
  const [options, setOptions] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [category, setCategory] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [badgeContent, setBadgeContent] = useState(0);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const { cart } = useSelector((state) => state.cart);

  //hooks

  useEffect(() => {
    let count = 0;
    cart.map((item) => (count += item.qty));

    setBadgeContent(count);
  }, [cart, badgeContent]);

  useEffect(async () => {
    try {
      const resp = await axios.get("/categories");
      setData(resp.data);
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  }, []);

  useEffect(() => {
    setOptions(data);
  }, [data]);

  //functions
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <Link to="/login" style={{ textDecoration: "none", color: "#000" }}>
          <div style={{ fontSize: "0.8rem" }}>Giriş Yap</div>
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        {" "}
        <div style={{ fontSize: "0.8rem" }}>Üye Ol</div>
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
      <MenuItem>
        <Link
          to="/cart"
          style={{ color: "inherit", display: "flex", textDecoration: "none" }}
        >
          <IconButton aria-label="cart" color="inherit">
            <Badge badgeContent={badgeContent} color="secondary">
              <Cart />
            </Badge>
          </IconButton>
          <p>Cart</p>
        </Link>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" style={{ backgroundColor: primary[0] }}>
        <Toolbar>
          <Link to="/">
            <img src={logo} className={classes.logo} alt={"Logo"} />
          </Link>
          <div className={classes.search}>
            <Autocomplete
              style={{ width: 300, backgroundColor: primary[1] }}
              id="combo-box-demo"
              options={options}
              getOptionLabel={(option) => option.title || ""}
              value={category}
              onChange={(event, newValue) => {
                setCategory(newValue);
              }}
              inputValue={inputValue}
              onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label={"Kategoriler"}
                  variant="outlined"
                  size="small"
                />
              )}
            />
          </div>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              {userBadge !== "" ? (
                <Badge badgeContent={userBadge.name} color="secondary">
                  <AccountCircle />
                </Badge>
              ) : (
                <AccountCircle />
              )}
            </IconButton>
            <Link to="/cart" style={{ color: "inherit" }}>
              <IconButton
                aria-label="cart"
                color="inherit"
                style={{ margin: "0 10px " }}
              >
                <Badge badgeContent={badgeContent} color="secondary">
                  <Cart />{" "}
                </Badge>
              </IconButton>
            </Link>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
};

export default Header;
