// CSS
import './App.css';
// Library
import React from 'react';
import styled from 'styled-components';
// Component
import { Mobile, PC } from './layout/ResponsiveView';
import Header from './layout/Header';
import Content from './layout/Content';
// Util
import { ThemeProvider } from './util/ThemeProvider';
// Data

function App() {
    return (
        <ThemeProvider>
            <Box className="App">
                <Mobile>
                    <Header device="mobile"></Header>
                    <Content></Content>
                </Mobile>

                <PC size="768">
                    <Header></Header>
                    <Content></Content>
                </PC>
            </Box>
        </ThemeProvider>
    );
}

export default App;

/**
 *  variable css 적용 
 *  - 하위 모든 내용에서는 var(--colorName)으로 사용
 *  - 특수한 경우를 제외하고는 static하게 적용 X
 *  - '--[key]-color: [value];' 형태로 정의됨
 */ 
const Box = styled.div`
    ${(props) => {
        const { theme } = props;
        return Object.entries(theme).map(([k, v]) => `--${k}-color: ${v};`).join("")
    }}
`;
