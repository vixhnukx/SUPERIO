import React, { useEffect } from 'react';
import './Home.css'
import NewProduct from '../Products/NewProduct';
import Product from '../Products/Product';
import Audio from '../Products/Audio';
import About from '../About/About';
import Footer from '../Footer/Footer';
import TestimonialList from '../Testimonial/TestimonialList';
function Home() {
    useEffect(() => {
        const handleScroll = () => {
          const scrollPosition = window.scrollY;
          const image = document.querySelector('.featured-image');
          if (image) {
            image.style.transform = `translateY(-${scrollPosition * 0.1}px)`;
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
  return (
    <div>
        <div className='featured'>
        <img className='featured-image' src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MK0U3_FV404?wid=1420&hei=930&fmt=png-alpha&.v=1706808234695" alt="" />
        <h1>Elevate Your Mac Experience</h1>

        </div>
        <NewProduct/>
        <Product/>
        <Audio/>
        <TestimonialList/>
        <About/>
        <Footer/>
        
    </div>
  )
}

export default Home