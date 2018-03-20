import React from 'react';
import LoginPage from '../LoginPage';

class PageSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'login',
    };
  }

  render() {
    switch (this.state.currentPage) {
      case 'login': {
        return (
          <LoginPage />
        );
      }

      case 'dashboard': {
        return (<div>DashBoard Page </div>);
      }

      case 'leaderBoard': {
        return (<div>leaderBoard Page </div>);
      }

      default: {
        return (<div> Invalid Page</div>);
      }
    }
  }
}


export default PageSelector;
