"use client";
import React, { useEffect, useState } from "react";
import ProductList from "../products-list/ProductList";
import NoResults from "../no-results/NoResults";
import useProductsResults from "@/app/hooks/useProductsResults";
import { useSearchParams } from "next/navigation";

const Products = () => {
  const searchParams = useSearchParams();
  const [wordToSearch, setWordToSearch] = useState("");
  const word = searchParams.get("search");
  const { hasProducts, products } = useProductsResults(wordToSearch);

  useEffect(() => {
    if (searchParams.get("search")) {
      setWordToSearch(searchParams.get("search"));
    }
  }, [word]);

  return hasProducts ? <ProductList products={products} /> : <NoResults />;
};
export default Products;
