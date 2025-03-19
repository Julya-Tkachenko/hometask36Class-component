import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.scss';
import AppHeader from './components/app-header';
import Smiles from './components/smiles';


const App = () => {

    const smilesData = JSON.parse(localStorage.getItem("emojis")) || [
        {label: '😀', count: 0, id: 1},
        {label: '😁', count: 0, id: 2},
        {label: '😂', count: 0, id: 3}
    ];

    return (
        <div>
            <AppHeader/>
            <Smiles smiles = {smilesData}/> 
        </div>
    );
};

const rootNodeElement = document.querySelector('#main');
const root = ReactDOM.createRoot(rootNodeElement);
root.render(<App/>);