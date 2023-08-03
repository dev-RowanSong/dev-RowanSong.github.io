import './css/SpotLightView.css';
import React from "react";

function SpotLightView({ props }) {
    const { left, top, size } = props;
    const background = `radial-gradient(
        circle ${size}px at ${left}px ${top}px, rgba(0, 0, 0, 0.01) 0%,
        rgba(0, 0, 0, 0.5) 70%,
        rgba(0, 0, 0, 0.96) 100%
    )`;
    return (
        <div className="spotlight" style={{background}}></div>
    );
}

export default SpotLightView;