import { useMediaQuery } from 'react-responsive';

const MOBILE_REF_SIZE = 768;
const TABLET_REF_SIZE = 1024;

/**
 * 모바일 뷰 (default: ~ 767px)
 */
export const Mobile = ({children, size = MOBILE_REF_SIZE}) => {
    const isMobile = useMediaQuery({
        query: `(max-width:${size - 1}px)`
    });
    return <>{isMobile && children}</>;
};

/**
 * 테블릿 뷰 (default: 768px ~ 1023px)
 */
export const Tablet = ({children, size = [MOBILE_REF_SIZE, TABLET_REF_SIZE]}) => {
    const isTablet = useMediaQuery({
        query: `(min-width:${size[0]}px) and (max-width:${size[1] - 1}px)`
    });
    return <>{isTablet && children}</>;
};

/**
 * PC 뷰 (default: 1024px ~)
 */
export const PC = ({children, size = TABLET_REF_SIZE}) => {
    const isPC = useMediaQuery({
        query: `(min-width:${size}px)`
    });
    return <>{isPC && children}</>;
};
