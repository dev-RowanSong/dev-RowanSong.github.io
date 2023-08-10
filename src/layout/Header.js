import './css/Header.css';

/**
 * 페이지 헤더
 */
function Header(props) {
    const { 
        device = "PC" 
    } = props;

    return (
        <div className={`header-view ${device.toLowerCase()}-header`}></div>
    );
}

export default Header;