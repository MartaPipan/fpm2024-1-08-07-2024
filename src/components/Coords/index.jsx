import { useState } from "react";

const Coords = () => {
    const [coords, setCoords] = useState({
        x: 0,
        y: 0,
        countClick: 0,
    });
    const handleMouseMove = (event) => {
        setCoords({
            ...coords,
            x: event.clientX,
            y: event.clientY
        });
    };
    const handleClick = () => {
        setCoords({
            ...coords,
            countClick: coords.countClick+1,
        })
    }
    return (
        <div onMouseMove={handleMouseMove}
            onClick={handleClick} style={{ background: '#eee' }
}>
            <p>x={coords.x}</p>
            <p>y={coords.y}</p>
            <p>countClick={coords.countClick}</p>
    </div>
  );
};

export default Coords;
