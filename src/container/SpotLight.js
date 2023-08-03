import React, { useState } from "react";
import SpotLightView from '../presentation/SpotLightView.js';

const [MAX_SIZE, MIN_SIZE] = [500, 100];
const INDECREASE_SIZE = 50;

function SpotLight() {
    const [mousePosition, setMousePosition] = useState({ left: 0, top: 0 });
    const [circleSize, setCircleSize] = useState(100);
    const handleMouseMove = (e) => {
        setMousePosition({ left: e.pageX, top: e.pageY });
    };

    const handleWheel = (e) => {
        const isUp = e.deltaY < 0;
        if (isUp && circleSize < MAX_SIZE) {
            setCircleSize(circleSize + INDECREASE_SIZE);
        } else if (!isUp && circleSize > MIN_SIZE) {
            setCircleSize(circleSize - INDECREASE_SIZE);
        }
    };

    return (
        <div onMouseMove={handleMouseMove} onWheel={handleWheel}>
            <SpotLightView props={{left: mousePosition.left, top: mousePosition.top, size: circleSize}}>
            </SpotLightView>
        </div>
    );
}

export default SpotLight;