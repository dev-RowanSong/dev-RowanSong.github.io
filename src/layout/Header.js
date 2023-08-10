import './css/Header.css';
import { Link } from 'react-router-dom'
import routers from '../data/pageRouteData';

/**
 * 페이지 헤더
 */
function Header(props) {
    const { 
        device = "PC" 
    } = props;

    return (
        <div className={`header-view ${device.toLowerCase()}-header`}>
            {routers && routers.map((rt, idx) => (
                <Link key={idx} to={rt.path}></Link>
            ))}
        </div>
    );
}

export default Header;