import React from 'react';
import './header.css';

const Headers = props => (
  <div className="Header-main">
    <span className="Header-title">Quizzy</span>
    <span className="Header-userWelcome" style={{ display: props.user ? 'inline' : 'none' }}>Hello {props.user}!</span>
  </div>
);

export default Headers;
