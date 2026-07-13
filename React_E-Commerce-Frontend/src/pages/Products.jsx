import React from "react";
import { Footer, Navbar } from "../components";
import Product from "../components/Products";

const Products = () => {
  return (
    <>
      <Navbar />
      <div className="page-section">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Styled Product Collection</h2>
            <p className="section-subtitle">
              Explore trendy products in a peach gradient palette with responsive
              cards and modern buttons.
            </p>
          </div>
          <Product />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products