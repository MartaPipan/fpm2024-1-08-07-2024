import { useReducer, useEffect } from "react";

//const reducer = (state, action) => {return newState;}
const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "DATA_LOAD_PENDING": //we start to do action
      break;
    case "DATA_LOAD_SUCCESS": {
      //if everything ok
      const { users, messages } = payload;
      const usersMap = new Map();
      users.forEach((user) => usersMap.set(user.id, user));
      const messagesWithAuthor = messages.map((message) => ({
        ...message,
        author: usersMap.get(message.authorId),
      }));
      return {
        ...state,
        users,
        messages: messagesWithAuthor,
      };
    }

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
    dispatch({ type: "DATA_LOAD_PENDING", payload: true });
    fetch("/data/chat.json")
      .then((response) => response.json())
      .then((data) => dispatch({ type: "DATA_LOAD_SUCCESS", payload: data }))
      .catch((error) => dispatch({ type: "DATA_LOAD_ERROR", payload: error }));
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
