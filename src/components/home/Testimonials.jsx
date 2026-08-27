import React, { useState, useEffect, useRef } from 'react';

const testimonialsData = [
  {
    quote: '"Bharath showed exceptional skills in developing the Hostel Management System. His attention to detail and problem-solving abilities are remarkable."',
    author: 'Project Guide',
    affiliation: 'Dr.N.G.P Institute Of Technology'
  },
  {
    quote: '"The Smart Shoe project was innovative and well-executed. Bharath\'s technical expertise in IoT systems is impressive."',
    author: 'Conference Judge',
    affiliation: 'Vishwakarma Awards'
  },
  {
    quote: '"Great UI/UX design work during the internship. Bharath consistently delivered pixel-perfect designs and improved user experience significantly."',
    author: 'Team Lead',
    affiliation: 'Sri Nandha Infotech'
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(nextSlide, 5000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered]);

  return (
    <section id="testimonials" className="section dark-section">
      <div className="container">
        <h2 className="section-title">What People Say</h2>
        <div 
          className="testimonial-slider"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="testimonial-track">
            {testimonialsData.map((item, index) => (
              <div 
                key={index} 
                className={`testimonial ${index === currentIndex ? 'active' : ''}`}
              >
                <div className="testimonial-content">
                  <p>{item.quote}</p>
                  <div className="testimonial-author">
                    <h4>{item.author}</h4>
                    <p>{item.affiliation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="slider-controls">
            <button 
              type="button"
              className="slider-prev" 
              onClick={prevSlide}
              aria-label="Previous testimonial"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <div className="slider-dots">
              {testimonialsData.map((_, index) => (
                <span 
                  key={index}
                  className={index === currentIndex ? 'active' : ''}
                  onClick={() => goToSlide(index)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <button 
              type="button"
              className="slider-next" 
              onClick={nextSlide}
              aria-label="Next testimonial"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
