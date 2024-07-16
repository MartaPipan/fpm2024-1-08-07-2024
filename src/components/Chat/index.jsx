import { useReducer, useEffect } from "react";

//const reducer = (state, action) => {return newState;}
const reducer = (state, action) => {
  switch (action.type) {
    case "DATA_LOAD_PENDING": //we start to do action
      break;
    case "DATA_LOAD_SUCCESS":
      break;
    case "DATA_LOAD_ERROR":
      break;

    default:
      break;
  }
  return state;
};

const Chat = () => {
  const [state, dispatch] = useReducer(reducer, {
    messages: [],
    users: [],
    error: null,
    isPending: false,
  });

  useEffect(() => {
    dispatch({ type: "DATA_LOAD_PENDING", payload:true });
    fetch("/data/chat.json")
      .then((response) => response.json())
      .then((data) => dispatch({ type: "DATA_LOAD_SUCCESS", payload: data }))
      .catch((error) => dispatch({ type: "DATA_LOAD_ERROR", payload: error }))
  }, []);
  return (
    <section>
      <h2>Chat</h2>
      {JSON.stringify(state)}
    </section>
  );
};

export default Chat;
