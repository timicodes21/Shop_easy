import React from "react";

import { GetStaticPaths, GetStaticProps } from "next";
import { fetchAllProducts, fetchSingleProduct } from "../../src/api/products";
import { ParsedUrlQuery } from "querystring";
import { Paths, SingleItem } from "../../src/utils/model";
import ProductDetailsCard from "../../src/components/ProductDetailsCard";

interface IParams extends ParsedUrlQuery {
  id: string;
}

interface Props {
  item: SingleItem;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await fetchAllProducts();

  const paths = data.map((item) => {
    return {
      params: {
        id: item.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as IParams;
  const data = await fetchSingleProduct(id);

  return {
    props: {
      item: data,
    },
  };
};

const ProductDetails: React.FC<Props> = ({ item }) => {
  console.log("item", item);
  return <ProductDetailsCard item={item} />;
};

export default ProductDetails;
