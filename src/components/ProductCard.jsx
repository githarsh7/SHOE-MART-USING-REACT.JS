import { useState } from "react";

const ProductCard = ({
  product,
  onAdd,
  onRemove,
}) => {
  const [added, setAdded] = useState(false);

  const handleCart = () => {
    if (added) {
      onRemove();
      setAdded(false);
    } else {
      onAdd();
      setAdded(true);
    }
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img
          src={product.image}
          alt={product.name}
        />
      </div>

      <div className="product-info">
        <h3>{product.name}</h3>

        <p className="price">
          {product.price}
        </p>

        <button
          className={`cart-btn ${
            added ? "remove-active" : ""
          }`}
          onClick={handleCart}
        >
          {added
            ? "Remove Cart"
            : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;