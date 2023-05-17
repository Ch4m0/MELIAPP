import React from "react";
import styles from "./product.module.scss";

const ProductDescription = ({ description }) => {
  return (
    <div className="product__description">
      <h2 className="product__description-title">Descripción del producto</h2>
      <p className={styles.product__description_text}>{description}</p>
    </div>
  );
};

export default ProductDescription;
