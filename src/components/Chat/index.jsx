import { useReducer, useEffect } from "react";
import { getChat } from '../../api';
import reducer from './reducer';
import TYPES from './actionTypes';


//const reducer = (state, action) => {return newState;}

const Chat = () => {
  const [state, dispatch] = useReducer(reducer, {
    messages: [],
    users: [],
    error: null,
    isPending: false,
  });

  useEffect(() => {
    dispatch({ type: TYPES.DATA_LOAD_PENDING, payload: true });
      //getChat=()=>{return fetch("/data/chat.json").then((response) => response.json())}
      getChat()
      .then((data) => dispatch({ type: TYPES.DATA_LOAD_SUCCESS, payload: data }))
      .catch((error) => dispatch({ type: TYPES.DATA_LOAD_ERROR, payload: error }));
  }, []);
  const { messages, error, isPending } = state;
  const showMessages = ({ id, content, author: { name } }) => (
    <li key={id}>
      {content}(from{name})
    </li>
  );
  if (isPending) {
    return <h4>Loading...</h4>;
  }
  if (error) {
    return <h4>Error...</h4>;
  }
  return (
    <section>
          <h2>Chat</h2>
      {messages.length && <ul>{messages.map(showMessages)}</ul>}
    </section>
  );
};

export default Chat;
