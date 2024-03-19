import React from 'react';
import './TestimonialList.css';
import { Carousel, CarouselItem, CarouselControl } from 'reactstrap';

function Testimonial({ author, content, rating }) {
  // Function to render star icons based on the rating
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<span key={i} className="star">&#9733;</span>); // Filled star
      } else {
        stars.push(<span key={i} className="star">&#9734;</span>); // Empty star
      }
    }
    return stars;
  };

  return (
    <div className="testimonial">
      <p className="testimonial-content">{content}</p>
      <p className="testimonial-author">- {author}</p>
      <div className="testimonial-rating">{renderStars()}</div>
    </div>
  );
}

const testimonials = [
  { author: 'John Doe', content: 'This testimonial component is awesome!', rating: 4 },
  { author: 'Jane Smith', content: 'Great service! Highly recommended.', rating: 5 },
  { author: 'Michael Johnson', content: 'Excellent experience. Will definitely use again.', rating: 5 },
  { author: 'Emily Davis', content: 'Very satisfied with the product. Thanks!', rating: 4 },
  { author: 'Chris Wilson', content: 'Fantastic job! Keep up the good work.', rating: 5 }
];

function TestimonialSlider() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const slides = testimonials.map((testimonial, index) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={index}
      >
        <Testimonial {...testimonial} />
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      {slides}
      <CarouselControl direction="prev" onClickHandler={previous} />
      <CarouselControl direction="next" onClickHandler={next} />
    </Carousel>
  );
}

export default TestimonialSlider;
