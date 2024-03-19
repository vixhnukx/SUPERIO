import React, { useEffect, useState } from 'react';
import './NewProduct.css';
import Items from './Items';

function NewProduct() {
  const [scrollDirection, setScrollDirection] = useState('down');

  useEffect(() => {
    // Set initial scroll direction to 'down' when component mounts
    setScrollDirection('down');

    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      if (currentPosition < lastScrollTop) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      lastScrollTop = currentPosition <= -5 ? 0 : currentPosition;
    };

    let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`new-product ${scrollDirection === 'down' ? 'scroll-down' : ''}`}>
       
      <div className='new-product-img'>
        <h1>AirPods Max</h1>
        <img
          src="https://www.apple.com/v/airpods-max/f/images/overview/hero__gnfk5g59t0qe_xlarge.png" // Insert the URL of your image here
          alt=""
        />
        <p>Introducing AirPods Max — a perfect balance of exhilarating high-fidelity audio and the effortless magic of AirPods. The ultimate personal listening experience is here.</p>
      </div>
      <div className='item'>
      <h2 className='item-heading'>Five colours.</h2>
      <Items/>
      <div className='quality'>
        <h1>A radically original composition.</h1>
        <img className='quality-img' src="https://www.apple.com/v/airpods-max/f/images/overview/audio_quality_eq__bw20hke6z1ea_xlarge.jpg" alt="" />
        <p>The over-ear headphone has been completely reimagined. From cushion to canopy, AirPods Max are designed for an uncompromising fit that creates the optimal acoustic seal for many different head shapes — fully immersing you in every sound.</p>
      </div>
      </div>
      
    </div>
  );
}

export default NewProduct;
