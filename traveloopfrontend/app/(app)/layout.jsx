import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "@/styles/layout.css";

const AppLayout = ({ children }) => {
  return (
    <div suppressHydrationWarning>
      <Navbar customClass="dash-navbar" />
      {children}
      <Footer customClass="dash-footer" />
    </div>
  );
};

export default AppLayout;

