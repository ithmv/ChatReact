import React from 'react';
import ReactDOM from 'react-dom';

import './styles/style.css';
import Header from './components/Header';
import Main from './components/Main';
import Reg from './components/Reg';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <Header />
    <Reg />
    <Main />
    </>
);