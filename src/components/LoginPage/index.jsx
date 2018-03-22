import React from 'react';
import './LoginPage.css';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
    };
  }

  checkInput() {
    return this.state.userName !== undefined;
  }

  updateUserName(newUserName) {
    this.setState({
      userName: newUserName,
    }, () => { console.log('username: ', this.state.userName); });
  }

  render() {
    return (
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
              <div className="LoginCard-right-inp">
                <input
                  type="text"
                  className="userName-input"
                  value={this.userName}
                  onChange={(event) => { this.updateUserName(event.target.value); }}
                />
              </div>
            </div>
            <input
              type="button"
              className="LoginCard-right-btn"
              value="Login"
              onClick={() => {
                if (this.checkInput()) {
                  this.props.changePage();
                } else {
                  alert('Empty Username not accepted!');
                }
                }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;

