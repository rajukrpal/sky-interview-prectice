import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

// Slider styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import './HeroSlider.css';

const HeroSlider = () => {
  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden font-sans">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        speed={1000}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        navigation={true}
        className="hero-swiper min-h-screen"
      >
        {/* Slide 1 - Welcome/Intro */}
        <SwiperSlide>
          <div className="relative w-full min-h-screen flex items-center justify-center text-center px-4">
            {/* Background Image */}
            <div className="absolute inset-0 -z-10">
              <img src="/slider.png" className="w-full h-full object-cover" alt="Background" />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>

            <div className="max-w-4xl">
              <div className="text-[#d4ff00] text-8xl font-black italic mb-4">X</div>
              <h1 className="text-white text-4xl md:text-7xl font-bold uppercase mb-6 italic leading-none">
                Thank you for registering your interest in POPC Live!
              </h1>
              <p className="text-white text-lg md:text-xl mb-10 opacity-90 max-w-2xl mx-auto">
                We will send you the latest updates on ticket sales, venue timings, and 
                <span className="text-[#d4ff00]"> CELEBRITY ANNOUNCEMENTS!</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-skew bg-[#d4ff00] text-black font-bold py-4 px-10 uppercase hover:scale-105 active:scale-95">
                  <span>See Whats On</span>
                </button>
                <button className="btn-skew border-2 border-white text-white font-bold py-4 px-10 uppercase hover:bg-white hover:text-black">
                  <span>About POPC Live!</span>
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 - Signup Form */}
        <SwiperSlide>
          <div className="relative w-full min-h-screen flex items-center px-6 md:px-20 py-16">
            <div className="absolute inset-0 -z-10">
              <img src="/slider.png" className="w-full h-full object-cover" alt="Background" />
              <div className="absolute inset-0 bg-black/50"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-7xl mx-auto items-center">
              {/* Left Content */}
              <div>
                <p className="text-white text-xl font-bold tracking-widest mb-4 opacity-70">MARCH 2022, DUBAI</p>
                <h2 className="text-white text-5xl md:text-8xl font-black uppercase italic leading-[0.9] mb-8">
                  An Unmissable <br /> Mega Event!
                </h2>
                <p className="text-white text-xl opacity-80 max-w-xl">
                  Experimental region's first ever multi-genre MEGA convention - 
                  The biggest celebration of eSports, gaming and pop culture!
                </p>
              </div>

              {/* Right Content - Form */}
              <div className="bg-black/60 backdrop-blur-md border-4 border-white p-8 md:p-12 relative">
                {/* Decorative Pink Elements */}
                <div className="absolute -top-4 right-8 flex gap-2">
                  <div className="w-4 h-8 bg-[#ff0090] -skew-x-12"></div>
                  <div className="w-4 h-8 bg-[#ff0090] -skew-x-12"></div>
                </div>

                <h3 className="text-3xl font-black text-white uppercase italic leading-tight mb-8">
                  <span className="text-[#d4ff00]">Sign Up</span> to access exclusive offers and news.
                </h3>
                
                <form className="space-y-4">
                  <input type="text" placeholder="Full Name" className="w-full bg-white/10 border border-white/30 p-4 text-white outline-none focus:border-[#d4ff00]" />
                  <input type="email" placeholder="Email" className="w-full bg-white/10 border border-white/30 p-4 text-white outline-none focus:border-[#d4ff00]" />
                  <input type="tel" placeholder="Mobile" className="w-full bg-white/10 border border-white/30 p-4 text-white outline-none focus:border-[#d4ff00]" />
                  
                  <button type="submit" className="btn-skew bg-white text-black font-black w-full py-4 uppercase mt-4 hover:bg-[#d4ff00]">
                    <span>Sign Me Up!</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
