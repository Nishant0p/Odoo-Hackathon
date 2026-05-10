import React from "react";
<<<<<<< HEAD
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
=======

const AppLayout = ({ children }) => {
  return <div suppressHydrationWarning>{children}</div>;
>>>>>>> 35ca6e74d641af63cf10c2e2aeb64950a5a6216d
};

export default AppLayout;
