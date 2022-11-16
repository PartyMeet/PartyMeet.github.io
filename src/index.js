require('file-loader?name=[name].[ext]!./index.html');
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

import "./assets/styles/App.scss";

const appDiv = document.getElementById('app');

ReactDOM.render(<App />, appDiv);