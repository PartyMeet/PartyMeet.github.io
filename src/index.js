require('file-loader?name=[name].[ext]!./index.html');
import React from 'react';
import {createRoot} from 'react-dom/client';
import {StrictMode} from 'react';
import {App} from './App';

import "./assets/styles/App.scss";

// scripts

import './assets/scripts/mouse.js' // custom mouse
// parallax img move and switch page animation
import './assets/scripts/menu-anim.js' 


const rootElement = document.getElementById('app');
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <App />
    </StrictMode>
);