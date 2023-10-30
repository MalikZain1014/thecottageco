import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import { useParams } from "react-router-dom";
import { Data, TData, AxData } from "../Assets/Data";
import PageNavigation from "../Helper/PageNavigation";

const SingleProduct = () => {
  const { id } = useParams();
  const item1 = [...Data, ...TData, ...AxData];
  const [products] = useState(item1);
  const [selectedThumbnail, setSelectedThumbnail] = useState(0);
  const [mainSlider, setMainSlider] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [thumbnailSlider, setThumbnailSlider] = useState(null);

  if (!products) {
    return <div style={{ marginTop: "440px" }}>Loading...</div>;
  }

  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  const { title, price, description, category, image, thumbnailImages } =
    product;

  const handleThumbnailClick = (i) => {
    setSelectedThumbnail(i);
    mainSlider.slickGoTo(i);
  };

  const images = [image, ...thumbnailImages];

  // Main image slider settings
  const mainImageSettings = {
    customPaging: function (i) {
      return (
        <img
          src={images[i]}
          alt={title}
          style={{
            display: "flex",
            width: "100px",
            height: "100px",
            cursor: "pointer",
            border:
              i === selectedThumbnail ? "2px solid gray" : "2px solid white",
          }}
          onClick={() => handleThumbnailClick(i)}
        />
      );
    },

    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    afterChange: (current) => {
      setSelectedThumbnail(current);
    },
  };
  // Thumbnail slider settings
  const thumbnailSliderSettings = {
    ref: (slider) => setThumbnailSlider(slider),
    infinite: true,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 1,
    cursor: "pointer",
  };

  return (
    <>
      <div className="container" style={{ marginBottom: "111px" }}>
        <strong className="flex ">
          <PageNavigation title={product.category} name={product.title} />
        </strong>
        <div className="row container">
          <div className="col-md-6">
            <Slider
              ref={(slider) => setMainSlider(slider)}
              {...mainImageSettings}
            >
              {images.map((img, index) => (
                <div key={index}>
                  <img src={img} alt={title} style={{ width: "100%" }} />
                </div>
              ))}
            </Slider>
            <Slider {...thumbnailSliderSettings}>
              {thumbnailImages.map((img, i) => (
                <div key={i}>
                  <img
                    src={img}
                    alt={title}
                    style={{
                      display: "flex",
                      width: "100%",
                      height: "100%",
                      padding: "0px",
                      cursor: "pointer",
                      border:
                        i === selectedThumbnail
                          ? "2px solid gray"
                          : "2px solid white",
                    }}
                    onClick={() => handleThumbnailClick(i)}
                  />
                </div>
              ))}
            </Slider>
          </div>
          <div className="col-md-6" style={{ marginTop: "90px" }}>
            <div>
              <h2
                style={{
                  fontSize: "calc(1.05rem + 1.3vw)",

                  fontFamily: " -apple-system, segoi ui, Galica",
                }}
              >
                {title}
              </h2>
              <p>Category: {category}</p>
              <p>Description: {description}</p>
              <p
                style={
                  {
                    // fontSize: "calc(1.05rem + 0.3vw)",
                    // fontFamily: " -apple-system, segoi ui, Galica",
                  }
                }
              >
                Price: ${price}
              </p>
              <div className="d-flex align-items-center">
                <MdSecurity size={20} className="mr-2" />
                <span>Secure Payment</span>
              </div>
              <div className="d-flex align-items-center">
                <TbTruckDelivery size={20} className="mr-2" />
                <span>Fast Delivery</span>
              </div>
              <div className="d-flex align-items-center">
                <TbReplace size={20} className="mr-2" />
                <span>Easy Returns</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
