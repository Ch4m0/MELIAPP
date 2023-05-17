"use client";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setBreadcrumb } from "../store/slices/breadcrumbsSlice";
import { fetchProducts } from "@/services/productService";

export default function useProductsResults(wordToSearch) {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const hasProducts = products.length > 0;

  useEffect(() => {
    fetchProducts(wordToSearch)
      .then((res) => {
        setProducts(res.items);
        dispatch(setBreadcrumb(res.categories));
      })
      .catch((err) => console.log(err));
  }, [wordToSearch]);
  return { products, hasProducts };
}
