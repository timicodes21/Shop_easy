import React from "react";
import { SingleItem } from "../utils/model";
import { Row, Col, Image } from "react-bootstrap";
import { formatToCurrency } from "../utils/formatter";
import { AiFillStar } from "react-icons/ai";

interface Props {
  item: SingleItem;
}

const ProductDetailsCard: React.FC<Props> = ({ item }) => {
  const renderStar = (
    rating: number | undefined
  ): JSX.Element[] | undefined => {
    if (rating !== undefined) {
      const no: number = Math.round(rating);
      for (let i = 0; i < no; i++) {
        return Array.from(Array(no).keys()).map((no, index) => (
          <AiFillStar key={index} className="text-yellow" />
        ));
      }
    }
  };
  return (
    <>
      <div className="p-2 p-md-4 my-2 my-md-4 shadow bg-white rounded">
        <Row>
          <Col xs={12} md={4}>
            <div className="text-center">
              <Image alt="image" fluid src={item.image} />
            </div>
          </Col>
          <Col xs={12} md={8}>
            <div>
              <button className="product-details-button py-1 px-2 rounded">
                {item.category}
              </button>
            </div>
            <div className="py-2 border-bottom">
              <span className="font-16 font-600 text-dark">{item.title}</span>
              <div>
                <span className="font-14 font-400 text-dark">
                  {item.description}
                </span>
              </div>
            </div>
            <div className="my-2">{renderStar(item?.rating?.rate)}</div>
            <div>
              <span className="font-36 font-700">
                ${formatToCurrency(item.price)}
              </span>
            </div>
            <div>
              <button className="free-delivery-button py-1 px-2 rounded">
                Free-delivery
              </button>
            </div>
            <div className="my-2 d-flex align-items-end">
              <button className="add-cart-button py-1 px-2 rounded">
                ADD TO CART
              </button>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ProductDetailsCard;
