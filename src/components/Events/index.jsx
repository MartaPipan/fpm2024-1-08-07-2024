import { useEffect, useState } from "react";
import Event from "./Event";
import { getEvents } from "../../api";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsPending(true);
    getEvents()
      .then((data) => setEvents(data))
      .catch((error) => setError(error))
      .finally(() => setIsPending(false));
  }, []);

  const ShowEvents = (event) => <Event key={event.id} event={event} />;
  if (isPending) {
    return <h3>Loading...</h3>;
  }
  if (error) {
    return <h3>{error.toString()}</h3>;
  }
  if (events.date === 0) {
    return <h3>events not found</h3>;
  }

  return <section>{events.map(ShowEvents)}</section>;
};

export default Events;

/**
 *  useEffect(() => {
      fetch().then().then().catch().finally()
      
        return () => {
        
    };
    }, []);
 */
