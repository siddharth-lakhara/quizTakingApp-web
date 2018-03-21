import React from 'react';
import './LoginPage.css';

const LoginPage = () => (
  <div className="LoginPage-main">
    <div className="LoginCard-left">
      <div className="LoginCard-left-text1"> Welcome <br /> to </div>
      <div className="LoginCard-left-text2"> Quizzy! </div>
    </div>
    <div className="LoginCard-right">
      <div className="loginContents-aligner" />
      <div className="loginContents-items">
        <div className="LoginCard-right-text">Login</div>
        <div>
          <div className="LoginCard-right-label">Username</div>
          <div className="LoginCard-right-inp"><input type="text" className="userName-input" /></div>
        </div>
        <input type="button" className="LoginCard-right-btn" value="Login" />
      </div>
    </div>
  </div>
);

export default LoginPage;

