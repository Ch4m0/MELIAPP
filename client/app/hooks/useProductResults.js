"use client";
import { useEffect, useState } from "react";
import { fetchProduct } from "@/services/productService";
import { useDispatch } from "react-redux";
import { setBreadcrumb } from "../store/slices/breadcrumbsSlice";

export default function useProductResults(id) {
  const [item, setItem] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    fetchProduct(id)
      .then((res) => {
        setItem(res.item);
        dispatch(setBreadcrumb([...res.category_path, res.item.title]));
      })
      .catch((error) => console.log(error));
  }, [id]);

  return { item };
}
