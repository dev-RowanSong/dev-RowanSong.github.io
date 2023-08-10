import Home from '../page/Home';

/**
 * 페이지의 라우팅 정보를 기록하기 위한 파일
 * - 각 페이지에 맞는 컴포넌트를 연결하기 위해, json이 아닌 js로 사용
 * 
 * @param {string} path - 라우팅 url
 * @param {*} element - 연결할 컴포넌트
 * @param {boolean} [default] - 디폴트 매칭 여부(생략 가능) 
 */
const routers = [
    {
        path: "/",
        element: <Home/>,
        default: true
    }
];

export default routers;