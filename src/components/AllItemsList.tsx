import React from "react";
import { SingleItem } from "../utils/model";
import { Row, Col, Image } from "react-bootstrap";
import { sliceText } from "../utils/formatter";
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";

interface Props {
  items: SingleItem[];
  header: string;
}

const AllItemsList: React.FC<Props> = ({ items, header }) => {
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
      <div className="bg-white p-2 p-md-3 rounded">
        <span className="font-16 font-600">{header}</span>
        <div className="my-2"></div>
        <Row>
          {items.map((item: SingleItem) => (
            <Col xs={12} md={4} lg={3} key={item.id}>
              <Link href={`/products/${item.id}`}>
                <div className="p-2 my-2 p-md-3 items-card shadow rounded">
                  <div className="text-center">
                    <Image
                      alt="image"
                      fluid
                      src={item.image}
                      style={{ height: "7rem" }}
                    />
                  </div>
                  <div className="my-3">
                    <span className="font-12 font-400">
                      {sliceText(20, item.title)}
                    </span>
                  </div>
                  <div className="my-1">
                    <span className="font-14 font-600 text-red">
                      ${item.price}
                    </span>
                  </div>
                  <div className="my-2">{renderStar(item?.rating?.rate)}</div>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default AllItemsList;
