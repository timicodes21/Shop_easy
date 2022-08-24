import React from "react";
import Link from "next/link";
import { categories } from "../utils/model";
import { firstLetter } from "../utils/formatter";

interface Props {
  categories: categories;
}

const CategoriesCard: React.FC<Props> = ({ categories }) => {
  return (
    <div className="p-2 p-md-3 shadow bg-white rounded">
      {categories.map((category, index) => (
        <div key={index} className="categories-text py-2">
          <Link href={`/products/category/${category}`}>
            <span className="text-12 font-600">{firstLetter(category)}</span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CategoriesCard;
