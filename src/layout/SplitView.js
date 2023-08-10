import styled from "styled-components";

// flex container
const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: ${(props) => props.$justifyContent};
    align-items: ${(props) => props.$alignItems};
`;
// container items
const Box = styled.div`
    height: 100%;
    flex: ${(props) => props.$weight};
`;

/**
 * row를 기준으로 화면을 분리하는 용도로 사용하는 컴포넌트
 * 
 * @param {*} children - 내부에 사용되는 DOM 객체 모음
 * @param {array} weights - children의 flex 값 모음
 * @param {string} alignItems - css 속성
 * @param {string} justifyContent - css 속성
 */
function SplitView(props) {
    const { 
        children, 
        weights = [], 
        alignItems = "center", 
        justifyContent = "center" 
    } = props;

    const child = children && (children.map ? children : [children]);
    return (
        <Container $justifyContent={justifyContent} $alignItems={alignItems}>
            {child && child.map((ch, idx) => (
                <Box key={idx} $weight={weights[idx] || "auto"}>{ch}</Box>
            ))}
        </Container>
    );
}

export default SplitView;