
import Event from "./Event";
import { getEvents } from "../../api";
import useDataLoad from "../../hooks/useDataLoad";
import Error from "../Error";

const Events = () => {
  const {data:events, isPending, error}=useDataLoad(getEvents);

  const ShowEvents = (event) => <Event key={event.id} event={event} />;
  if (isPending) {
    return <h3>Loading...</h3>;
  }
  if (error) {
    return <Error/>;
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
