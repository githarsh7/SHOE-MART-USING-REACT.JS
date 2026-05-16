import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Banner from "./components/Banner";
import ProductCard from "./components/ProductCard";

import products from "./Data/productsData";

function App() {
  const [cartCount, setCartCount] = useState(0);

  // ADD PRODUCT
  const handleAdd = () => {
    setCartCount((prev) => prev + 1);
  };

  // REMOVE PRODUCT
  const handleRemove = () => {
    setCartCount((prev) =>
      prev > 0 ? prev - 1 : 0
    );
  };

  return (
    <>
      <Header cartCount={cartCount} />

      <Banner />

      <section className="products-section">
        <h2 className="section-title">
          Trending Sneakers
        </h2>

        <div className="products-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAdd={handleAdd}
              onRemove={handleRemove}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default App;
