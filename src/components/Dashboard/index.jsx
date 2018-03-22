import React from 'react';


// options: Array[4]
// question: "What is the capital of India"
// questionid: 12
const Questions = (data) => {
  console.log(data);
  const questionBox = data.data.map((questions, index) => {
    const questionTitle = <div className="Question-index">Questions {index + 1}</div>;
    const questionText = <div> {questions.question} </div>;
    const optionArray = questions.options;
    const optionDiv = optionArray.map(e => (
      <div>
        {e}
      </div>
    ));
    // console.log('printing: ', questions, index);
    // console.log('****');
    return (
      <div className="questionBox">
        {questionTitle}
        {questionText}
        {optionDiv}
      </div>
    );
    // return questionTitle;
  });
  //   console.log(questionBox);
  return questionBox;
//   return questionBox;
};

class DashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
    };
  }

  componentDidMount() {
    fetch('/fetch').then(res => res.json())
      .then((res) => {
        this.updateQuestions(res);
      });
  }

  updateQuestions(questions) {
    this.setState({ questions });
  }

  render() {
    return (
      <div className="dashboard-main">
        <Questions data={this.state.questions} />
        <button className="dashboard-btn">Calculate</button>
      </div>
    );
  }
}

export default DashBoard;
