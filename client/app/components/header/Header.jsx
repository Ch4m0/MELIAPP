import Image from "next/image";
import Search from "../search/Search";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Image src="/meli.png" alt="mercado-libre" width={134} height={34} />
        <Search />
      </div>
    </header>
  );
};
export default Header;
