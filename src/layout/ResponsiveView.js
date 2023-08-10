import { useMediaQuery } from 'react-responsive';

const MOBILE_REF_SIZE = 768;
const TABLET_REF_SIZE = 1024;

/**
 * 화면 사이즈에 따른 레이아웃 반환
 */
export const Mobile = ({children, size = MOBILE_REF_SIZE}) => {
    const isMobile = useMediaQuery({
        query: `(max-width:${size - 1}px)`
    });
    return <>{isMobile && children}</>;
};
export const Tablet = ({children, size = [MOBILE_REF_SIZE, TABLET_REF_SIZE]}) => {
    const isTablet = useMediaQuery({
        query: `(min-width:${size[0]}px) and (max-width:${size[1] - 1}px)`
    });
    return <>{isTablet && children}</>;
};
export const PC = ({children, size = TABLET_REF_SIZE}) => {
    const isPC = useMediaQuery({
        query: `(min-width:${size}px)`
    });
    return <>{isPC && children}</>;
};
