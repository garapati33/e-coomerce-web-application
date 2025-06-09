import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroBanner = () => {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    // Simulate fetching banner images from an API
    const mockBannerUrls = [
      "https://source.unsplash.com/1200x400/?sale",
      "https://source.unsplash.com/1200x400/?fashion",
      "https://source.unsplash.com/1200x400/?electronics",
    ];
    setBanners(mockBannerUrls);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <div className="w-full overflow-hidden rounded shadow">
      <Slider {...settings}>
        {banners.map((url, index) => (
          <div key={index}>
            <img
              src={url}
              alt={`Banner ${index + 1}`}
              className="w-full h-[400px] object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroBanner;
