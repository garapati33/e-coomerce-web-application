import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroBanner = () => {
  const [banners, setBanners] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const res = await fetch("http://localhost:5043/api/product/hero-banner"); // Change port if different
        const data = await res.json();
        setBanners(data);
      } catch (err) {
        console.error("Failed to fetch featured products", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFeatured();
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

  if (isLoading) {
    return <div className="w-full h-[400px] bg-gray-300 animate-pulse rounded"></div>;
  }

  return (
    <div className="w-full h-[400px] overflow-hidden rounded shadow mb-6">

      <Slider {...settings}>
        {banners.map((product, index) => (
          <div key={index}>
            <img
              src={product.imageUrl}
              alt={product.name}
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
