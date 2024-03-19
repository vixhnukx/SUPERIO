import React, { useState } from "react";
import "./Product.css";
function Product() {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(true);
  };
  return (
    <div className="product-container">
      <h2 className="product-heading">Featured Products</h2>
      <div className="product-grid">
        <div className="product-item">
          <img
            src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MK293_FV103?wid=532&hei=582&fmt=png-alpha&.v=1626394929000"
            alt="Product 1"
            className="product-image"
          />
          
          <p className="product-name">Magic Keyboard with Touch ID</p>
          <p className="product-price">MRP ₹14500.00 (Incl. of all taxes)</p>
        </div>
        <div className="product-item">
          <img
            src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MMMR3?wid=532&hei=582&fmt=png-alpha&.v=1645719947833"
            alt="Product 2"
            className="product-image"
          />
          <p className="product-name">
            Magic Keyboard with Touch ID and Numeric Keypad
          </p>
          <p className="product-price">MRP ₹19500.00 (Incl. of all taxes)</p>
        </div>
        <div className="product-item">
          <img
            src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MMMP3?wid=532&hei=582&fmt=png-alpha&.v=1645136899926"
            alt="Product 3"
            className="product-image"
          />
          <p className="product-name">Magic Trackpad</p>
          <p className="product-price">MRP ₹14500.00 (Incl. of all taxes)</p>
        </div>
        {showMore && (
          <>
            <div className="product-item">
              <img
                src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MMMQ3?wid=532&hei=582&fmt=png-alpha&.v=1645138486301"
                alt="Product 4"
                className="product-image"
              />
              <p className="product-name">Magic Mouse</p>
              <p className="product-price">MRP ₹9500.00 (Incl. of all taxes)</p>
            </div>
            <div className="product-item">
              <img
                src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airtag-single-select-202104?wid=532&hei=582&fmt=png-alpha&.v=1617761671000"
                alt="Product 5"
                className="product-image"
              />
              <p className="product-name">AirTag</p>
              <p className="product-price">MRP ₹3490.00 (Incl. of all taxes)</p>
            </div>
            <div className="product-item">
              <img
                src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MM6F3?wid=532&hei=582&fmt=png-alpha&.v=1632956535000"
                alt="Product 6"
                className="product-image"
              />
              <p className="product-name">Polishing Cloth</p>
              <p className="product-price">MRP ₹1900.00 (Incl. of all taxes)</p>
            </div>
          </>
        )}
      </div>
      {!showMore && (
        <button className="view-more-button" onClick={handleShowMore}>
          Show More
        </button>
      )}
    </div>
  );
}

export default Product;
