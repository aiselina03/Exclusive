import React from "react";
import FetchProvider from "./useFetchContext";
import BasketProvider from "./basketContext";
import SearchProvider from "./searchContext";
import WishlistProvider from "./wishlistContext";

function MainProvider({ children }) {
  return (
    <>
      <FetchProvider>
        <BasketProvider>
          <WishlistProvider>
            <SearchProvider>{children}</SearchProvider>
          </WishlistProvider>
        </BasketProvider>
      </FetchProvider>
    </>
  );
}

export default MainProvider;
