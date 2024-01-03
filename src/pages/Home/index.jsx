import React, { useContext, useEffect } from "react";
import Featured from "../../components/Featured";
import MusicJBL from "../../components/MusicJBL";
import SliderCategory from "../../components/SliderCategory";
import SliderPhone from "../../components/SliderPhone";
import BestSelling from "../../components/BestSelling";
import ExploreProducts from "../../components/ExploreProducts";
import FlashSales from "../../components/FlashSales";
import { FetchContext } from "../../context/useFetchContext";
import "./style.scss";
import ScrollToTop from "../../components/Scroll";
import { ToastContainer } from "react-toastify";
import CustomerService from "../../components/CustomerService";


function HomePage() {
  const { getFetch } = useContext(FetchContext);

  useEffect(() => {
    getFetch();
  }, []);


  return (
    <>
      <div className="homeContainer">
        <div className="homePage">
          <div className="homeFirst">
            <ul className="category">
              <li>
                Woman’s Fashion <i class="fa-solid fa-chevron-right"></i>
              </li>
              <li>
                Men’s Fashion <i class="fa-solid fa-chevron-right second"></i>
              </li>
              <li>Electronics</li>
              <li>Home & Lifestyle</li>
              <li>Medicine</li>
              <li>Sports & Outdoor</li>
              <li>Baby’s & Toys</li>
              <li>Groceries & Pets</li>
              <li>Health & Beauty</li>
            </ul>
            <SliderPhone />
          </div>
          <FlashSales />
          <SliderCategory />
          <BestSelling />
          <MusicJBL />
          <ExploreProducts />
          <Featured />
          <CustomerService/>
        </div>
        <ToastContainer/>
        <ScrollToTop/>
      </div>
    </>
  );
}

export default HomePage;
