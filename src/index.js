import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@200;400;600;700&display=swap');
            </style>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);

// to log results (for example: reportWebVitals(console.log))
reportWebVitals();
