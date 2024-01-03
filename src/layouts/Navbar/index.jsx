import React, { useContext } from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";
import { BasketContext } from "../../context/basketContext";
import { SearchContext } from "../../context/searchContext";

function Navbar() {
  const {basket} = useContext(BasketContext)
  const {searchInput, handleSearch} = useContext(SearchContext)
  return (
    <>
      <div className="navbar">
        <div className="header">
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
          <a href="">ShopNow</a>
          <p>
            English <i class="fa-solid fa-chevron-down"></i>
          </p>
        </div>
        <div className="nav">
          <div className="logo">
            <h2>
              <NavLink to={"/"}>Exclusive</NavLink>
            </h2>
          </div>
          <ul className="menu">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/contact"}>Contact</NavLink>
            </li>
            <li>
              <NavLink to={"/about"}>About</NavLink>
            </li>
            <li>
              <NavLink to={"/signUp"}>Sign Up</NavLink>
            </li>
          </ul>
          <div className="right">
            <div className="search">
              <input type="text" 
              placeholder="What are you looking for?" 
              value={searchInput} onChange={handleSearch}/>
              <i class="fa-regular fa-magnifying-glass"></i>
            </div>
            <div className="icons">
              <NavLink to={"/wishlist"}>
                <i class="fa-regular fa-heart"></i>
                 <sup>
                  {/* {wishlist.length ? wishlist.length : ""} */}
                  </sup>
              </NavLink>
              <NavLink to={"/basket"}>
                <i class="fa-regular fa-cart-shopping"></i>
                <sup>{basket.length ? basket.length : "0" }</sup>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
