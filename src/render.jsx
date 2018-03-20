import React from 'react';
import ReactDOM from 'react-dom';
import './render.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const render = ()=>{
    ReactDOM.render(<App />, document.getElementById('root'));
    registerServiceWorker();    
}

export default render;
