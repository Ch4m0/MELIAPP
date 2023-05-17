import Link from "next/link";
import styles from "./breadcrumb.module.scss";

const Breadcrumbs = ({ items }) => {
  return (
    <section className={styles.container}>
      <nav className={styles.breakcrumbs}>
        <ul className={styles.breadcrumbs__list}>
          {items.map((item, index) => {
            const isLastItem = index === items.length - 1;
            if (!isLastItem) {
              return (
                <li className={styles.breadcrumb} key={index}>
                  <a href="#">{item}</a>
                  <span> / </span>
                </li>
              );
            } else {
              return item;
            }
          })}
        </ul>
      </nav>
    </section>
  );
};
export default Breadcrumbs;
