import React from 'react';

const EventCard = ({ title, description, image, bgColor, status }) => {
  return (
    <div className="flex flex-col h-full transition-transform duration-300 hover:-translate-y-2">
      {/* Top Image Section */}
      <div className="h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
        />
      </div>

      {/* Content Section */}
      <div className={`${bgColor} p-8 flex flex-col items-center text-center flex-grow relative overflow-hidden`}>
        {/* Decorative elements - subtle X in background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
           <span className="text-[150px] font-black italic">X</span>
        </div>

        <h3 className="text-black text-3xl font-black mb-6 uppercase leading-tight tracking-tighter italic relative z-10">
          {title}
        </h3>
        
        <p className="text-black text-lg font-medium mb-10 leading-relaxed relative z-10 line-clamp-3">
          {description}
        </p>

        <button className="mt-auto relative group">
          <div className="bg-[#1a1a1a] text-white font-bold py-4 px-8 uppercase btn-skew hover:bg-black transition-colors relative z-10">
            <span>{status}</span>
          </div>
          {/* Neon Shadow Effect */}
          <div className="absolute top-1 left-1 w-full h-full bg-black/20 btn-skew -z-10"></div>
        </button>
      </div>
    </div>
  );
};

export default EventCard;
