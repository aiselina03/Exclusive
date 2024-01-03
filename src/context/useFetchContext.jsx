import React, { createContext, useState } from "react";

export const FetchContext = createContext();

function FetchProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  function getFetch() {
      fetch("https://657ef0619d10ccb465d58d01.mockapi.io/api/products/products")
        .then((res) => res.json())
        .then((data) => {
          setProducts(data)
          setIsLoading(false)
        });
  }

  // async function getFetch() {
  //   const res= await fetch("https://657ef0619d10ccb465d58d01.mockapi.io/api/products/products")
  //   const data= await res.json()
  //   setProducts(data)
  // }

  const data = {
     products,
     getFetch,
     isLoading
  }

  return (
  <FetchContext.Provider value={data}>
    {children}
  </FetchContext.Provider>
  )
}

export default FetchProvider;
