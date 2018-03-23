import React from 'react';
import './dashboard.css';
// options: Array[4]
// question: "What is the capital of India"
// questionid: 12

const Questions = (input) => {
  const { data, responses } = input;
  const questionBox = data.map((questions, index) => {
    const questionTitle = <div className="Question-index">Questions {index + 1}</div>;
    const questionText = <div className="Question-text"> {questions.question} </div>;
    const optionArray = questions.options;
    const optionDiv = optionArray.map(e => (
      <label className="Question-options-container">
        <input
          type="radio"
          value={e}
          key={questions.questionid}
          className="Question-options-elem"
          checked={responses[questions.questionid] === e}
        />
        &nbsp;{e}<br />
      </label>
    ));
    return (
      <div className="questionBox" key={questions.questionid}>
        {questionTitle}
        {questionText}
        <div className="Question-options">
          {optionDiv}
        </div>
      </div>
    );
  });

  return questionBox;
};

class DashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      responses: {},
    };
  }

  componentDidMount() {
    fetch('/fetch').then(res => res.json())
      .then((questions) => {
        this.updateQuestions(questions);
        fetch(`/responses/${this.props.userName}`).then(res => res.json())
          .then((responses) => {
            this.updateResponses(responses);
          });
      });
  }

  updateQuestions(questions) {
    this.setState({ questions });
  }

  updateResponses(responses) {
    this.setState({ responses });
  }

  render() {
    return (
      <div className="dashboard-main">
        <Questions
          data={this.state.questions}
          responses={this.state.responses}
        />
        <button className="dashboard-btn">Calculate</button>
      </div>
    );
  }
}

export default DashBoard;
