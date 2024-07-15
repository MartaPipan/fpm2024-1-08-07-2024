import { useReducer, useEffect } from "react";

//const reducer = (state, action) => {return newState;}
const reducer = (state, action) => {
  switch (action.type) {
      case "DATA_LOAD_SUCCESS":
          console.log(action);
      break;
      case "DATA_LOAD_ERROR":
          console.log(action);
      break;

    default:
      break;
  }
  return state;
};

const Chat = () => {
  const [state, dispatch] = useReducer(reducer, { messages: [], users: [],error:null });

    useEffect(() => {
      dispatch({type:'DATA_LOAD_PENDING_ON'})
    fetch("/data/chat.json")
      .then((response) => response.json())
      .then((data) => dispatch({ type: "DATA_LOAD_SUCCESS", payload:data }))
      .catch((error) => dispatch({ type: "DATA_LOAD_ERROR", payload:error }))
      .finally(() => dispatch({type:'DATA_LOAD_PENDING_OFF'}));
  }, []);
  return (
    <section>
      <h2>Chat</h2>
    </section>
  );
};

export default Chat;
