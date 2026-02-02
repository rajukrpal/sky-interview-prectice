import React from 'react';
import EventCard from './EventCard';
import eventsData from '../data/events.json';

const EventSection = () => {
  return (
    <section className="bg-black py-20 px-6 md:px-12">
      <div className="max-w-[1700px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {eventsData.map((event) => (
            <EventCard 
              key={event.id}
              title={event.title}
              description={event.description}
              image={event.image}
              bgColor={event.bgColor}
              status={event.status}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventSection;
