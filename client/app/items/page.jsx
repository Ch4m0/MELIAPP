import React from "react";
import Products from "../components/products/Products";
import styles from "./page.module.scss";

const ProductsPage = () => {
  return (
    <section className={styles.container}>
      <Products />
    </section>
  );
};
export default ProductsPage;
