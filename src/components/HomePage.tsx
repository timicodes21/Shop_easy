import React from "react";
import { Row, Col } from "react-bootstrap";
import { AllItems, categories, SingleItem } from "../utils/model";
import AllItemsList from "./AllItemsList";
import BackgroundCarousel from "./BackgroundCarousel";
import CategoriesCard from "./CategoriesCard";
import FlyerCards from "./FlyerCards";

interface Props {
  items: SingleItem[];
  categories: categories;
}

const HomePage: React.FC<Props> = ({ items, categories }) => {
  return (
    <>
      <Row className="my-2 my-md-4">
        <Col xs={12} md={3}>
          <CategoriesCard categories={categories} />
        </Col>
        <Col xs={12} md={7}>
          <BackgroundCarousel />
        </Col>
        <Col xs={12} md={2}>
          <FlyerCards />
        </Col>
      </Row>
      <div className="my-2">
        <AllItemsList header="All Items" items={items} />
      </div>
    </>
  );
};

export default HomePage;
