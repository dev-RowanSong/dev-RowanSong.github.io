// Library
import { useState } from 'react';
import styled from 'styled-components';

function Sticker(props) {
    const { children } = props;
    const [hover, setHover] = useState(false);
    
    const hoverToggle = () => {
        setHover(!hover);
    };

    return (
        <Wrapper onMouseOver={hoverToggle} onMouseOut={hoverToggle} $hover={hover}>
            <div className='back'>{ children }</div>
            <div className='front'>{ children }</div>
        </Wrapper>
    );
}

export default Sticker;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    width: 100%;
    height: 100%;

    & > div {
        transition: all .3s;
        pointer-events: none;
    }

    & .front {
        width: 100%;
        height: 100%;
        position: absolute;
        backface-visibility: hidden;
        transform: ${(props) => props.$hover && "rotateY(180deg)"};
    }

    & .back {
        width: 100%;
        height: 100%;
        position: absolute;
        backface-visibility: hidden;
        transform: ${(props) => props.$hover ? 'scaleX(-1)' : ' scaleX(-1) rotateY(180deg)'};
        opacity: 0.6;
    }
`;