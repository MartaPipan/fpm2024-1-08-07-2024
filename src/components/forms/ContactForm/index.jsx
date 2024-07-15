import { useReducer} from "react";

const initialState = {
    email: "",
    phone: "",
    question: "",
};

// const reducer = (state, action) => {return newState;};

const reducer = (state, action) => {
    const { name, value } = action;
    const newState = { ...state, [name]: value };
    return newState;
};


const ContactForm = () => {
    const [{ email, phone, question }, dispatch] = useReducer(reducer, initialState)

    const handleInput = ({ target: { name, value } }) => { 
        const action = { name, value };
        dispatch(action);
    };
  
  return (
    <div>
      <h3>Contact form</h3>
      <input
        type="text"
        name="email"
        placeholder="email"
        value={email}
        onChange={handleInput}
      />
      <input
        type="text"
        name="phone"
        placeholder="phone"
        value={phone}
        onChange={handleInput}
      />
      <input
        type="text"
        name="question"
        placeholder="question"
        value={question}
        onChange={handleInput}
      />
      <button type="submit">send</button>
    </div>
  );
};

export default ContactForm;


/**
 * Reducer є важливою концепцією в функціональному програмуванні та управлінні станом додатків. У контексті бібліотек для управління станом, таких як Redux, Reducer — це функція, яка приймає поточний стан і дію (action), а потім повертає новий стан.

Стебло
Reducer — це чиста функція, яка має такий підпис: (state, action) => newState. Чиста функція означає, що вона завжди повертає один і той самий результат для тих самих вхідних даних і не має побічних ефектів.

Як це працює:
Початковий стан: Reducer зазвичай має початковий стан (initial state).
Дія (action): Це об'єкт, який описує, що саме сталося. Зазвичай він має тип (type) і може мати додаткові дані (payload).
Новий стан:Редуктор
Приклад:

const initialState = { count: 0 };

function counterReducer(state = initialState, action) {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };
        case 'DECREMENT':
            return { count: state.count - 1 };
        default:
            return state;
    }
}

 */
