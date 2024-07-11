import { useState } from "react";
import "./Clicker.css"


const Clicker = () => {
    const [clickCount, setClickCount] = useState(0);
    const handleClick = () => {
        setClickCount(clickCount + 1);
        
    };
    console.log('render');
    return (
        <h2 onClick={ handleClick}>Clicker:{clickCount}</h2>
    );
}

export default Clicker;
