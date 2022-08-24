import React from "react";
import { Carousel } from "react-bootstrap";
import Image from "next/image";

const BackgroundCarousel: React.FC = () => {
  const images: string[] = [
    "https://res.cloudinary.com/dhu6jt5dl/image/upload/v1661277337/jacek-dylag-jo8C9bt3uo8-unsplash_ubtx4i.jpg",
    "https://res.cloudinary.com/dhu6jt5dl/image/upload/v1661277339/freestocks-_3Q3tsJ01nc-unsplash_1_ahvoza.jpg",
    "https://res.cloudinary.com/dhu6jt5dl/image/upload/v1661277341/arturo-rey-5yP83RhaFGA-unsplash_hynto5.jpg",
  ];

  return (
    <>
      <Carousel>
        {images.map((image, index) => (
          <Carousel.Item interval={3000} key={index}>
            <img
              style={{
                height: "20rem",
                borderRadius: "13px",
                objectFit: "cover",
                width: "100%",
              }}
              alt="carousel_image"
              src={image}
              className="rounded"
            />
            {/* <Image
              src={image}
              alt="carousel_image"
              objectFit="contain"
              layout="fill"
            /> */}
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default BackgroundCarousel;
