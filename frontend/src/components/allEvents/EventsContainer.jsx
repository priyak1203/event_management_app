import { useSelector } from 'react-redux';
import EventsCard from './EventsCard';

function EventsContainer() {
  const { allEvents } = useSelector((store) => store.allEvents);
  console.log(allEvents);
  return (
    <div>
      {allEvents.map((event) => (
        <EventsCard key={event._id} {...event} />
      ))}
    </div>
  );
}

export default EventsContainer;
