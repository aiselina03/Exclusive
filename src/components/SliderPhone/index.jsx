import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss";
import React from "react";


function SliderPhone() {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="slider">
        <Slider {...settings}>
          <div className="photo">
            <div className="slidePage">
              <div className="text">
                <div className="apple">
                <i class="fa-brands fa-apple"></i>
                <p>iPhone 14 Series</p>
                </div>
                <h1>Up to 10% off Voucher</h1>
                <a href="">
                  Shop Now <i class="fa-solid fa-right"></i>
                </a>
              </div>
              <div className="image">
                <img src="https://cn.technave.com/wp-content/uploads/hero_endframe__cvklg0xk3w6e_large.jpg" />
              </div>
            </div>
          </div>
          <div className="photo">
            <div className="slidePage">
              <div className="text">
                <div className="apple">
                <i class="fa-brands fa-apple"></i>
                <p>iPhone 14 Series</p>
                </div>
                <h1>Up to 10% off Voucher</h1>
                <a href="">
                  Shop Now <i class="fa-solid fa-right"></i>
                </a>
              </div>
              <div className="image">
                <img src="https://cn.technave.com/wp-content/uploads/hero_endframe__cvklg0xk3w6e_large.jpg" />
              </div>
            </div>
          </div>
          <div className="photo">
            <div className="slidePage">
              <div className="text">
                <div className="apple">
                <i class="fa-brands fa-apple"></i>
                <p>iPhone 14 Series</p>
                </div>
                <h1>Up to 10% off Voucher</h1>
                <a href="">
                  Shop Now <i class="fa-solid fa-right"></i>
                </a>
              </div>
              <div className="image">
                <img src="https://cn.technave.com/wp-content/uploads/hero_endframe__cvklg0xk3w6e_large.jpg" />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
}

export default SliderPhone;
