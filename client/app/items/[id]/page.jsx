"use client";
import React from "react";
import styles from "./page.module.scss";
import ProductDetail from "@/app/components/product/ProductDetail";
import ProductDescription from "@/app/components/product/ProductDescription";
import useProductResults from "../../hooks/useProductResults";

const ProductPage = ({ params }) => {
  const { id } = params;
  const { item } = useProductResults(id);

  return (
    <section className={styles.product}>
      <ProductDetail {...item} />
      <ProductDescription description={item.description} />
    </section>
  );
};
export default ProductPage;
