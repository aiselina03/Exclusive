import React, { useContext } from "react";
import { BasketContext } from "../../context/basketContext";
import "./style.scss";
import { NavLink } from "react-router-dom";
import ScrollToTop from "../../components/Scroll";
import { SearchContext } from "../../context/searchContext";
import { ToastContainer } from "react-toastify";

function Basket() {
  const { basket, removeItem, increaseCount, decreaseCount, getTotal, notifyRemove } = useContext(BasketContext);
  const {searchInput} = useContext(SearchContext)
  return (
    <>
      {basket.length ? (
        <div className="basket">
          <div className="location">
            <p>
              <NavLink to={"/"}>Home /</NavLink> Cart
            </p>
          </div>
          <div className="header">
            <div className="head">
              <h4>Product</h4>
              <h4>Price</h4>
              <h4>Quantity</h4>
              <h4>Subtotal</h4>
            </div>
          </div>
          {basket
          .filter((x) =>x.name.toLowerCase().includes(searchInput.toLowerCase()) ) //search
          .map((x) => (
            <>
              <div className="productRow">
                <div className="productContent">
                  <div className="product">
                    <div className="image">
                      <div className="remove">
                        <i
                          class="fa-solid fa-circle-xmark "
                          onClick={() =>{notifyRemove() ; removeItem(x)} }
                        ></i>
                      </div>
                      <img src={x.image} alt="" />
                    </div>
                    <h4>{x.name}</h4>
                  </div>
                  <div className="price">
                    <h4>${x.price}</h4>
                  </div>
                  <div className="quantity">
                    <div className="border">
                      <div className="count">{x.count}</div>
                      <div className="chevron">
                        <i
                          class="fa-regular fa-chevron-up"
                          onClick={() => increaseCount(x)}
                        ></i>
                        <i
                          class="fa-regular fa-chevron-down"
                          onClick={() => decreaseCount(x)}
                        ></i>
                      </div>
                    </div>
                  </div>
                  <div className="subTotal">
                    <h4>${x.count * x.price}</h4>
                  </div>
                </div>
              </div>
            </>
          ))}
          <div className="buttonRow">
            <button>
              <NavLink to={"/"}>Return To Shop</NavLink>
            </button>
            <button>Update Cart</button>
          </div>
          <div className="total">
            <div className="cupon">
              <input type="text" placeholder="Coupon Code" />
              <button>Apply Coupon</button>
            </div>
            <div className="cardTotal">
              <h4>Cart Total</h4>
              <div className="sub">
                <h5>Subtotal:</h5>
                <p>${getTotal()}</p>
              </div>
              <div className="shipping">
                <h5>Shipping:</h5>
                <p>Free</p>
              </div>
              <div className="totalPrice">
                <h5>Total:</h5>
                <p>${getTotal()}</p>
              </div>
              <div className="checkout">
                <button>Procees to checkout</button>
              </div>
            </div>
          </div>
          <ScrollToTop />
        </div>
      ) : (
        <div className="bounce">
          <i class="fa-regular fa-cart-shopping fa-bounce"></i>
        </div>
      )}
      <ToastContainer/>
    </>
  );
}

export default Basket;
