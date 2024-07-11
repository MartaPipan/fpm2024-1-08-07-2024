import { useState, useEffect } from "react";
import "./Clicker.css"


const Clicker = () => {
    const [clickCount, setClickCount] = useState(0);
    const handleClick = () => {
        setClickCount(clickCount + 1);
        
    };
    
    useEffect(() => {
        console.log('render');
        return () => {
        console.log('remove effect');    
        };
    }, []);

    //document.body.addEventListener('click', handleClick);
    console.log('render');
    return (
        <h2 onClick={handleClick}>Clicker:{clickCount}</h2>
    );
}

export default Clicker;

//    onClick={handleClick}