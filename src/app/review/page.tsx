import React from 'react';
import SectionHeading from '@/components/SectionHeading';
import ReviewSlider from '@/components/ReviewSlider';
const Review = () => {
  return (
    <section className='review-section'>
      <SectionHeading>Client Reviews</SectionHeading>
      <div className='slider-wrapper'>
        <ReviewSlider />
      </div>
    </section>
  );
};

export default Review;
