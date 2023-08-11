// Library
import styled from 'styled-components';

function Logo(props) {
    const {
        size = '100%'
    } = props;

    return (
        <Circle size={size}>Rowan Song.</Circle>
    );
}

export default Logo;

const Circle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: ${(props) => props.size};
    height: ${(props) => props.size};
    border-radius: 50%;
    background-color: var(--primary-color);
    padding: 16px;
    
    font-size: 20px;
    font-weight: 500;
    color: #FFFFFF;
`