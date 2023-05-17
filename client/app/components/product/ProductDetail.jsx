import Image from "next/image";
import styles from "./product.module.scss";

const ProductDetail = ({ title, picture, condition, price }) => {
  return (
    <div className={styles.product__container}>
      {picture && (
        <Image
          className={styles.product__image}
          src={picture}
          alt={title}
          width={120}
          height={120}
        />
      )}

      <div className="product__details">
        <span className="product__condition">{condition}</span>
        <h3 className={styles.product__title}>{title}</h3>
        <p className={styles.product__price}>$ {price && price.amount}</p>
        <button className={styles.product__button}>Comprar</button>
      </div>
    </div>
  );
};
export default ProductDetail;
