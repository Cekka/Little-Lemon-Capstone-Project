import React from "react";
import Testimonial from "./Testimonial";
import testimonialData from "../data/TestimonialsData";
import "../style/Testimonial.css"

const TestimonialList = () => {
  const testimonialElements = testimonialData.map((testimonial) => {
    return (
      <Testimonial
        key={testimonial.id}
        {...testimonial}
      />
    );
  });
  return (
      <div className="testimonialList-container">
        <div className="container">
          <div className="testimonialList">
            <h2>Testimonials</h2>
            <div className="testimonials">{testimonialElements}</div>
          </div>
        </div>
      </div>

  );
}

export default TestimonialList;