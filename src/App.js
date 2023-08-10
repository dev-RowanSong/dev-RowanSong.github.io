import './App.css';
import { Mobile, PC } from './layout/ResponsiveView';
import Header from './layout/Header';
import Content from './layout/Content';

function App() {
    return (
        <div className="App">
            <Mobile>
                <Header device="mobile"></Header>
                <Content></Content>
            </Mobile>

            <PC size="768">
                <Header></Header>
                <Content></Content>
            </PC>
        </div>
    );
}

export default App;
