import React from 'react';
import HeroSlider from '../components/HeroSlider';
import EventSection from '../components/EventSection';

const SliderPage = () => {
  return (
    <div className="bg-black min-h-screen">
      <HeroSlider />
      <EventSection />
    </div>
  );
};

export default SliderPage;
