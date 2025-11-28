import React from 'react';
import HeroBanner from '../HeroBanner/HeroBanner';
import WelcomeSection from '../WelcomeSection/WelcomeSection';
import ServiceSection from '../ServiceSection/ServiceSection';
import FoodGallery from '../FoodGallery/FoodGallery';
import Reveal from '../Reveal/Reveal';
// Import các phần giới thiệu khác nếu có

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <Reveal>
        <WelcomeSection />
      </Reveal>

      <Reveal>
        <ServiceSection />
      </Reveal>
      
      <Reveal>
         <FoodGallery />
      </Reveal>

    </div>
  );
};
export default Home;