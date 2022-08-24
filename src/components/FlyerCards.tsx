import React from "react";
import { Image } from "react-bootstrap";

const FlyerCards: React.FC = () => {
  const imageOne: string =
    "https://res.cloudinary.com/dhu6jt5dl/image/upload/v1661307692/ramal-wickramasinghe-OjMyiwfviQ4-unsplash_pu4u1o.jpg";

  const imageTwo: string =
    "https://res.cloudinary.com/dhu6jt5dl/image/upload/v1661307692/ryan-plomp-jvoZ-Aux9aw-unsplash_mwkjns.jpg";

  return (
    <>
      <Image
        fluid
        src={imageOne}
        style={{ height: "9.5rem", width: "100%", objectFit: "cover" }}
        className="rounded"
        alt="image"
      />
      <div className="mt-2"></div>
      <Image
        fluid
        src={imageTwo}
        style={{ height: "9.5rem", width: "100%", objectFit: "cover" }}
        className="rounded mt-2"
        alt="image"
      />
    </>
  );
};

export default FlyerCards;
