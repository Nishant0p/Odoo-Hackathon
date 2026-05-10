import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const AppLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: 'calc(100vh - 168px)' }}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
