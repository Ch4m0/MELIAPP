import React from "react";
import ProductListItem from "./product-list-item/ProductListItem";
import style from "./products-list.module.scss";

const ProductList = ({ products }) => {
  return (
    <ul className={style.products__list}>
      {products.map((product) => (
        <ProductListItem {...product} key={`products-list-${product.id}`} />
      ))}
    </ul>
  );
};

export default ProductList;
