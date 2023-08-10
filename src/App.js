import './App.css';
import { Mobile, PC } from './layout/ResponsiveView';
import Header from './layout/Header';

function App() {
    return (
        <div className="App">
            <Mobile>
                <Header device="mobile"></Header>
            </Mobile>

            <PC size="768">
                <Header></Header>
            </PC>
        </div>
    );
}

export default App;
