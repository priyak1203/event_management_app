import { EventsContainer } from '@/components/allEvents';
import { getAllEvents } from '@/features/allEvents/allEventsSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function AllEvents() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllEvents());
  }, []);

  return (
    <div>
      <h2>All Events Page</h2>
      <EventsContainer />
    </div>
  );
}

export default AllEvents;
