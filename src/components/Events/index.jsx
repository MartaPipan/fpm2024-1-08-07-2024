import { useEffect, useState } from "react";
import Event from "./Event";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);
    
  useEffect(() => {
    setIsPending(true);
    fetch('/data/events.json')
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => setError(error))
      .finally(() => setIsPending(false));  
  }, []);
   
        const ShowEvents = (event) => (<Event key={event.id} book={event} />)
  if (isPending) {
    return <h3>Loading...</h3>;
  }
  if (error) {
    return <h3>{error.toString()}</h3>;
  }
        if (events.date === 0) {
        return <h3>events not found</h3>
    }
    return <section>
      events
  </section>;
};

export default Events;


/**
 *  useEffect(() => {
      fetch().then().then().catch().finally()
      
        return () => {
        
    };
    }, []);
 */