import React, { createContext} from 'react'
import useLocalStorage from '../hook/useLocalStorage'
import { toast } from 'react-toastify'

export const WishlistContext=createContext()

function WishlistProvider({children}) {
    const [wishlist, setWishlist] = useLocalStorage("wishlist", [])

    function addRemoveWishlist(item) {
        const itemIndex=wishlist.findIndex((x)=>x.id===item.id)
        if (itemIndex===-1) {
            setWishlist([...wishlist, {...item}])
        }
        else{
            setWishlist(wishlist.filter((x)=>x.id!==item.id))
        }
    }

    function checkIsWishlist(item) {
        const itemIndex=wishlist.findIndex((x)=>x.id===item.id)
        if (itemIndex!==-1) {
            return true
        }
        return false
    }

    function notifyRemove() {
        toast('Removed Wishlist!', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
    }

    const data={
        wishlist,addRemoveWishlist, checkIsWishlist, notifyRemove
    }
  return (
  <WishlistContext.Provider value={data}>{children}</WishlistContext.Provider>
  )
}

export default WishlistProvider