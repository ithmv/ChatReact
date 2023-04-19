import React from 'react';
import ReactDOM from 'react-dom';
import { firebaseConfig } from './components/firebase';
import Registration from './components/Registration';

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

import './styles/style.css';
import Header from './components/Header';
import Main from './components/Main';

const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <Header />
    <Registration />
    <Main />

    </>
);