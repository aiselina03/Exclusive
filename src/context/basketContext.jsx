import React, { createContext } from 'react'
import useLocalStorage from '../hook/useLocalStorage'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const BasketContext=createContext()

function BasketProvider({children}) {
    const [basket, setBasket] = useLocalStorage("basket", [])

    function addBasket(item) {
        const itemIndex=basket.findIndex((x)=> x.id===item.id)
        if (itemIndex===-1) {
            setBasket([...basket, {...item, count: 1}])
        }
        else{
            basket[itemIndex].count++
            setBasket([...basket])
        }
    }

    function removeItem(item) {
      setBasket(basket.filter((x)=>x.id!==item.id))   
    }

    function increaseCount(item) {
        const itemIndex=basket.findIndex((x)=>x.id===item.id)
        basket[itemIndex].count++
        setBasket([...basket])
    }

    function decreaseCount(item) {
        const itemIndex=basket.findIndex((x)=>x.id===item.id)
        if (basket[itemIndex].count===1) {
            return
        }
        else{
            basket[itemIndex].count--
            setBasket([...basket])
        }
    }


    function getTotal() {
        return  basket.reduce((prev,x)=>prev+(x.count*x.price),0)
    }

     function notify() {
        toast('Added Basket!', {
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
    
    function notifyRemove() {
        toast('Removed Basket!', {
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
        basket, addBasket, removeItem, increaseCount, decreaseCount, getTotal, notify,notifyRemove
    }
    
    return (
    <BasketContext.Provider value={data}>
    {children}
    </BasketContext.Provider>
  )
}

export default BasketProvider