import { useState } from "react";
import "./Clicker.css"


const Clicker = () => {
    const [clickCount, setClickCount] = useState(0);
    const handleClick = () => {
        setClickCount(clickCount + 1);
        
    };
    document.body.addEventListener('click', handleClick);
    console.log('render');
    return (
        <h2>Clicker:{clickCount}</h2>
    );
}

export default Clicker;

//    onClick={ handleClick}