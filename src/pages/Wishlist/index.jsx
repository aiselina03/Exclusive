import React, { useContext } from 'react'
import "./style.scss"
import { NavLink } from 'react-router-dom';
import { WishlistContext } from '../../context/wishlistContext';
import { BasketContext } from '../../context/basketContext';
import { ToastContainer } from 'react-toastify';
import { SearchContext } from '../../context/searchContext';
import ScrollToTop from '../../components/Scroll';

function Wishlist() {
const {wishlist, addRemoveWishlist, notifyRemove} = useContext(WishlistContext)
const {addBasket, notify} = useContext(BasketContext)
const {searchInput} = useContext(SearchContext)
  return (
    <>
    {wishlist.length ? (   <div className="container">
      <div className="header">
        <h4>Wishlist ({wishlist.length})</h4>
        <button>Move All To Bag</button>
      </div>
        <div className="cards">
       {wishlist
         .filter((x) =>x.name.toLowerCase().includes(searchInput.toLowerCase()) ) //search
       .map((x)=>(
       <div className="card">
       <div className="img">
         <img src={x.image} alt="" />
         <div className="trash">
           <NavLink>
             <i class="fa-regular fa-trash-can" onClick={()=>{notifyRemove() ; addRemoveWishlist(x)}}> </i>
           </NavLink>
         </div>
         <div className="eye">
           <NavLink  to={"/home/"+x.id}>
             <i class="fa-regular fa-eye"></i>
           </NavLink>
         </div>
         <div className="add">
         
           <p
             onClick={() => {
               notify();
               addBasket(x);
             }}
           ><i class="fa-regular fa-cart-shopping"></i>
               Add To Cart
           </p>
         </div>
       </div>
       <div className="text">
         <h4>{x.name}</h4>
         <span className="price">${x.price}</span>
         {/* <span className="oldPrice">${x.oldPrice}</span> */}
         <div className="star">
           <svg
             xmlns="http://www.w3.org/2000/svg"
             width="16"
             height="15"
             viewBox="0 0 16 15"
             fill="none"
           >
             <path
               d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z"
               fill="#FFAD33"
             />
           </svg>
           <svg
             xmlns="http://www.w3.org/2000/svg"
             width="16"
             height="15"
             viewBox="0 0 16 15"
             fill="none"
           >
             <path
               d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z"
               fill="#FFAD33"
             />
           </svg>
           <svg
             xmlns="http://www.w3.org/2000/svg"
             width="16"
             height="15"
             viewBox="0 0 16 15"
             fill="none"
           >
             <path
               d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z"
               fill="#FFAD33"
             />
           </svg>
           <svg
             xmlns="http://www.w3.org/2000/svg"
             width="16"
             height="15"
             viewBox="0 0 16 15"
             fill="none"
           >
             <path
               d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z"
               fill="#FFAD33"
             />
           </svg>
           <svg
             xmlns="http://www.w3.org/2000/svg"
             width="16"
             height="15"
             viewBox="0 0 16 15"
             fill="none"
           >
             <path
               d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z"
               fill="#FFAD33"
             />
           </svg>
           <span className="comments">({x.comments})</span>
         </div>
       </div>
     </div>
    ))} 
    </div>
    </div>) : (
      <div className="fade">
        <i class="fa-regular fa-heart fa-beat-fade"></i>
      </div>
    )}
 
    <ScrollToTop/>
    <ToastContainer/>
    </>
  )
}

export default Wishlist