import './App.css';
import { Mobile, Tablet, PC } from './layout/ResponsiveView';

function App() {
    return (
        <div className="App">
            <Mobile></Mobile>
            <PC size="768"></PC>
        </div>
    );
}

export default App;
