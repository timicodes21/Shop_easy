import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import HomePage from "../src/components/HomePage";
import { categories, SingleItem } from "../src/utils/model";
import { GetStaticProps } from "next";
import apiClient from "../src/service/api";
import { fetchAllProducts, fetchCategories } from "../src/api/products";
import { useEffect } from "react";

interface Props {
  items: SingleItem[];
  categories: categories;
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetchAllProducts();
  const categories = await fetchCategories();

  return {
    props: {
      items: data,
      categories,
    },
  };
};

const Home: NextPage<Props> = ({ items, categories }) => {
  return (
    <>
      <HomePage categories={categories} items={items} />
    </>
  );
};

export default Home;
