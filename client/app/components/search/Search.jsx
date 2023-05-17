"use client";
import useSearch from "@/app/hooks/useSearch";
import styles from "./search.module.scss";

const Search = () => {
  const { word, handleChange, handleSearch } = useSearch();

  return (
    <div className={styles.search__wrap}>
      <input
        type="search"
        name="search-product"
        value={word}
        className={styles.search__input}
        placeholder="What are you looking for?"
        onChange={handleChange}
        onKeyDown={handleSearch}
      />
    </div>
  );
};

export default Search;
