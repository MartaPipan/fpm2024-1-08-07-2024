import { useState } from "react";

const Coords = () => {
    const [coords, setCoords] = useState({ x: 0, y: 0, });
    const [countClick, setCountClick] = useState(0);
    const handleMouseMove = (event) => {
        setCoords({
            x: event.clientX,
            y: event.clientY
        });
    };
    const handleClick = () => {
        setCountClick((prevClick)=>prevClick + 1);
    }
    
    return (
        <div onMouseMove={handleMouseMove}
            onClick={handleClick} style={{ background: '#eee' }
}>
            <p>x={coords.x}</p>
            <p>y={coords.y}</p>
            <p>countClick={countClick}</p>
    </div>
  );
};

export default Coords;
