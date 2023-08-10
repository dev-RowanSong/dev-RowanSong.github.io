import { Route, Routes } from 'react-router-dom'
import routers from '../data/pageRouteData';

/**
 * header에 따른 내용 연결을 위한 레이아웃
 */
function Content() {
    return (
        <div className={`content-view`}>
            <Routes>
                {routers && routers.map(({default: def = false, path, element}, idx) => (
                    <Route key={idx} 
                        exact={def} 
                        path={path}
                        element={element}
                    ></Route>
                ))}
            </Routes>
        </div>
    );
}

export default Content;