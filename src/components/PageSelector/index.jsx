import React from 'react';
import LoginPage from '../LoginPage';
import DashBoard from '../Dashboard';
import LeaderBoard from '../LeaderBoard';

class PageSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'login',
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
            updateScore={(maxScore) => {
              this.setState({ maxScore });
            }}
            changePage={(score) => {
              this.setState({
                currentPage: 'leaderBoard',
                score,
              });
          }}
          />
        );
      }

      case 'leaderBoard': {
        return (
          <LeaderBoard
            score={this.state.score}
            maxScore={this.state.maxScore}
          />
        );
      }

      default: {
        return (<div> Invalid Page</div>);
      }
    }
  }
}


export default PageSelector;
