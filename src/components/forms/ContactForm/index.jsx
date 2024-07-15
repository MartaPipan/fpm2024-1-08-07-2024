import { useState } from "react";

const ContactForm = () => {
  const [state, setState] = useState({
    email: "",
    phone: "",
    question: "",
  });

  const handleInput = ({ target: { name, value } }) => {
    setState({
      ...state,
      [name]: value,
    });
  };
  return (
    <div>
      <h3>Contact form</h3>
      <input
        type="text"
        name="email"
        placeholder="email"
        value={state.email}
        onChange={handleInput}
      />
      <input
        type="text"
        name="phone"
        placeholder="phone"
        value={state.phone}
        onChange={handleInput}
      />
      <input
        type="text"
        name="question"
        placeholder="question"
        value={state.question}
        onChange={handleInput}
      />
      <button type="submit">send</button>
    </div>
  );
};

export default ContactForm;
