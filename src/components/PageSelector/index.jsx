import React from 'react';
import HomePage from '../HomePage';

class PageSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'home',
    };
  }

  render() {
    switch (this.state.currentPage) {
      case 'home': {
        return (
          <HomePage />
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
