// CSS
import './css/Header.css';
// Library
import { Link } from 'react-router-dom'
// Component
import ThemeToggleSwitch from '../component/ToggleSwitch/ThemeToggleSwitch';
import Sticker from '../component/Sticker/Sticker';
import Logo from '../component/Sticker/Logo';
// Util
// Data
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
            <div className='logo'>
                <Sticker>
                    <Logo size='calc(var(--height) - calc(var(--padding) * 2))'></Logo>
                </Sticker>
            </div>
            <div className='nav'>
                {routers && routers.map((rt, idx) => (
                    <Link key={idx} to={rt.path}></Link>
                ))}
            </div>
            <div className='page-prefer'>
                <ThemeToggleSwitch></ThemeToggleSwitch>
            </div>
        </div>
    );
}

export default Header;