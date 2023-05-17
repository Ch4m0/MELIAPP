"use client";
import React from "react";
import Breadcrumbs from "../components/breadcrumb/BreadCrumb";
import { useSelector } from "react-redux";

const Layout = ({ children }) => {
  const { breadcrumbs } = useSelector((state) => state.breadcrumb);

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      {children}
    </>
  );
};
export default Layout;
