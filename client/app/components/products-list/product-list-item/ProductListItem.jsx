import React from "react";
import Image from "next/image";
import styles from "./product-list-item.module.scss";
import Link from "next/link";

const ProductListItem = ({ id, picture, title, price }) => {
  return (
    <Link
      href={`/items/${id}`}
      style={{ textDecoration: "none", color: "#000" }}
    >
      <li
        key={`product-list-item-${id}`}
        className={styles.products__list__item}
      >
        <Image src={picture} alt={title} width={160} height={160} />
        <div className="products__list__item-description">
          <p>$ {price.amount}</p>
          <h2>{title}</h2>
        </div>
      </li>
    </Link>
  );
};

export default ProductListItem;
