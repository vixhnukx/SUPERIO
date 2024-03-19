import React, { useState } from "react";
import "./Audio.css";

function Audio() {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(true);
  };

  return (
    <div className="audio-container">
      <h2 className="audio-heading">Audio</h2>
      <div className="audio-grid">
        <div className="audio-item">
          <img
            src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MTJV3?wid=532&hei=582&fmt=png-alpha&.v=1694014871985"
            alt="Product 1"
            className="product-image"
          />
          <div className="color-dots"></div>
          <p className="audio-name">
            AirPods Pro (2nd generation) with MagSafe Charging Case (USB‑C)
          </p>
          <p className="audio-price">MRP ₹24900.00 (Incl. of all taxes)</p>
        </div>
        <div className="audio-item">
          <img
            src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-silver-202011?wid=532&hei=582&fmt=png-alpha&.v=1604021221000"
            alt="Product 2"
            className="product-image"
          />
          <div className="color-dots">
            <div className="color-dot silver"></div>
            <div className="color-dot black"></div>
            <div className="color-dot pink"></div>
            <div className="color-dot red"></div>
            <div className="color-dot green"></div>
          </div>
          <p className="audio-name">AirPods Max</p>
          <p className="audio-price">MRP ₹59900.00 (Incl. of all taxes)</p>
        </div>
        <div className="audio-item">
          <img
            src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/homepod-mini-select-blue-202110?wid=532&hei=582&fmt=png-alpha&.v=1632925511000"
            alt="Product 3"
            className="product-image"
          />
          <div className="color-dots">
            <div className="color-dot blue"></div>
            <div className="color-dot black"></div>
            <div className="color-dot green"></div>
            <div className="color-dot silver"></div>
            <div className="color-dot red"></div>
            
          </div>
          <p className="audio-name">HomePod mini</p>
          <p className="audio-price">MRP ₹10900.00 (Incl. of all taxes)</p>
        </div>
        {showMore && (
          <>
            <div className="audio-item">
              <img
                src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MME73?wid=532&hei=582&fmt=png-alpha&.v=1632861342000"
                alt="Product 4"
                className="product-image"
              />
              <p className="audio-name">
                AirPods (3rd generation) with Lightning Charging Case
              </p>
              <p className="audio-price">MRP ₹19900.00 (Incl. of all taxes)</p>
            </div>
            <div className="audio-item">
              <img
                src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MV7N2?wid=532&hei=582&fmt=png-alpha&.v=1551489688005"
                alt="Product 5"
                className="product-image"
              />
              <p className="audio-name">AirPods (2nd generation)</p>
              <p className="audio-price">MRP ₹12900.00 (Incl. of all taxes)</p>
            </div>
            <div className="audio-item">
              <img
                src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MME73?wid=532&hei=582&fmt=png-alpha&.v=1632861342000"
                alt="Product 6"
                className="product-image"
              />
              <p className="audio-name">
                AirPods (3rd generation) with MagSafe Charging Case
              </p>
              <p className="audio-price">MRP ₹20900.00 (Incl. of all taxes)</p>
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

export default Audio;
