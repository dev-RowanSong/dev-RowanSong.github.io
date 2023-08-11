// CSS
// Library
// Component
import ToggleSwitch from "./ToggleSwitch";
// Util
import { useTheme } from '../../util/ThemeProvider';
// Data


function ThemeToggleSwitch() {
    const [theme, toggleTheme] = useTheme();
    const toggleHandle = (state) => {
        toggleTheme(state ? 'dark' : 'light');
    }
    const isDark = theme === 'dark';
    return (
        <ToggleSwitch onClick={toggleHandle} value={isDark}></ToggleSwitch>
    )
}

export default ThemeToggleSwitch;