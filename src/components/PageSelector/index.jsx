import React from 'react';
import LoginPage from '../LoginPage';
import DashBoard from '../Dashboard';
import LeaderBoard from '../LeaderBoard';

class PageSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'dashboard',
      score: 0,
      maxScore: 0,
    };
  }

  render() {
    switch (this.state.currentPage) {
      case 'login': {
        return (
          <LoginPage
            updateUserName={this.props.updateUserName}
            changePage={() => {
            this.setState({ currentPage: 'dashboard' });
          }}
          />
        );
      }

      case 'dashboard': {
        return (
          <DashBoard
            userName={this.props.user}
            changePage={() => { this.setState({ currentPage: 'leaderBoard' }); }}
          />
        );
      }

      case 'leaderBoard': {
        return (<LeaderBoard />);
      }

      default: {
        return (<div> Invalid Page</div>);
      }
    }
  }
}


export default PageSelector;
