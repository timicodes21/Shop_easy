import React from "react";

import { GetStaticPaths, GetStaticProps } from "next";
import { fetchByCategory, fetchCategories } from "../../../src/api/products";
import { ParsedUrlQuery } from "querystring";
import { Paths, SingleItem } from "../../../src/utils/model";
import AllItemsList from "../../../src/components/AllItemsList";
import { useRouter } from "next/router";
import { firstLetter } from "../../../src/utils/formatter";

interface IParams extends ParsedUrlQuery {
  id: string;
}

interface Props {
  items: SingleItem[];
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await fetchCategories();

  const paths = data.map((item) => {
    return {
      params: {
        id: item,
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
  const data = await fetchByCategory(id);
  return {
    props: {
      items: data,
    },
  };
};

const ProductDetails: React.FC<Props> = ({ items }) => {
  const router = useRouter();
  const { id } = router.query as IParams;

  return (
    <div className="my-2 mt-md-4">
      <AllItemsList header={firstLetter(id)} items={items} />
    </div>
  );
};

export default ProductDetails;
