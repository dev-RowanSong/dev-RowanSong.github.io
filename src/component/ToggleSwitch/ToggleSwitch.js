// CSS
import './ToggleSwitch.css';
// Library
import React, { useState } from 'react';
import styled from 'styled-components';

/**
 * On/Off 토글 동작을 위한 스위치 컴포넌트
 * 
 * @param {object} colors - 색상 설정값
 *      - track: [on, off] - track의 on/off 색상
 *      - thumb: [on, off] - thumb의 on/off 색상
 *      - trackBorder: [on, off] - track의 border on/off 색상, 생략시 track 색상을 따라감
 *      - thumbBorder: [on, off] - thumb의 border on/off 색상, 생략시 thumb 색상을 따라감
 * @param {function} onClick - 클릭이벤트 콜백
 * @param {boolean} value - 초기 설정값
 */
function ToggleSwitch({ colors = { track: ['#FFFFFF', '#1E1E1E'], thumb: ['#1E1E1E', '#FFFFFF']}, onClick, value }) {
    const [toggle, setToggle] = useState(value);

    // border color default set
    if (!colors.trackBorder) {
        colors.trackBorder = colors.track;
    }
    if (!colors.thumbBorder) {
        colors.thumbBorder = colors.thumb;
    }
    
    // click event callback
    const callback = () => {
        setToggle(!toggle);
        onClick(!toggle);
    }
    return (
        <Btn onClick={callback} value={toggle} $colors={colors}>
            <Thumb value={toggle}></Thumb>
        </Btn>
    );
}

export default ToggleSwitch;

const Btn = styled.button`
    --thumb-size: 24px;
    --border-size: 4px;
    --track-width: calc(calc(var(--border-size) * 2) + calc(var(--thumb-size) * 2));
    --track-height: calc(calc(var(--border-size) * 2) + var(--thumb-size));
    
    ${(props) => {
        const { $colors, value } = props;
        const idx = value ? 0 : 1;
        return Object.entries($colors).map(([k, v]) => `--${k}-color: ${v[idx]};`).join("");
    }}

    display: flex;
    align-items: center;
    
    width: var(--track-width);
    height: var(--track-height);
    border: var(--border-size) solid var(--trackBorder-color);
    border-radius: var(--track-height);
    background-color: var(--track-color);
`;

const Thumb = styled.div`
    width: var(--thumb-size);
    height: var(--thumb-size);
    border: var(--border-size) solid var(--thumbBorder-color);
    border-radius: var(--thumb-size);
    background-color: var(--thumb-color);

    transition: transform .3s;
    transform: translateX(${(props) => props.value ? 'var(--thumb-size)' : '0px'})
`

