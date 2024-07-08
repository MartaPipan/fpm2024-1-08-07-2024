import { useState } from "react";

const Coords = () => {
    const [coords, setCoords] = useState({
        x: 0,
        y: 0,
    });
    const handelClick = (event) => {
        setCoords({
            x: event.clientX,
            y: event.clientY
        });
    };
    return (
        <div onClick={handelClick} style={{ background: '#eee' }
}>
      <p>x={coords.x}</p>
      <p>y={coords.y}</p>
    </div>
  );
};

export default Coords;
