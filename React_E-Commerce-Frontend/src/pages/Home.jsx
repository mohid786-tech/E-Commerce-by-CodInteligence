import React from "react";
import { Navbar, Footer } from "../components";
import ThreeHero from "../components/ThreeHero";
import Product from "../components/Products";

function Home() {
  return (
    <>
      <Navbar />
      <section className="hero-page">
        <ThreeHero />
        <div className="hero-content">
          <span className="eyebrow">Where Style Begins</span>
          <h1>Fashion-forward shopping with soft peach tones.</h1>
          <p>
            Discover modern apparel and accessories in a beautiful responsive
            store layout. Browse featured products, add items to your cart,
            and enjoy an elegant design driven by JavaScript and React.
          </p>
          <div className="hero-buttons d-flex flex-wrap justify-content-center">
            <a href="/product" className="btn btn-peach me-3 mb-3">
              View Products
            </a>
            <a href="/cart" className="btn btn-outline-peach mb-3">
              Go to Cart
            </a>
          </div>
        </div>
      </section>
      <div className="page-section">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Latest Collections</h2>
            <p className="section-subtitle">
              Shop the newest arrivals in our peach-themed store with clean,
              responsive cards and polished product details.
            </p>
          </div>
          <Product />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home