import React, { Component } from 'react'
import './assets/style.css'
import api from './api/QuestionBank'
import QuestionBox from './components/QuestionBox'

class App extends Component {
  state = {
    questionBank: [], // Local state to store questions once pulled from api
    score: 0,
    response: 0
  };
  getQuestions = () => {
    api().then(question => {
      // update state variable
      this.setState({
        questionBank: question
      });
    });
  };
  computeAnswer = (answer, correctAnswer) => {
    if (answer === correctAnswer) {
      this.setState({
        score: this.state.score + 1
      });
    }
  };
  componentDidMount () {
    this.getQuestions()
  }
  render () {
    return (
      <div className='container'>
        <header className='title'>
          <h2>U.S. Civics Test Prep</h2>
        </header>
        {this.state.questionBank.map(
          ({ question, answers, correct, questionId }) => (
            <QuestionBox
              question={question}
              options={answers}
              key={questionId}
              selected={answer => this.computeAnswer(answer,correct)}
            />
          )
        )}
      </div>
    )
  }
}

export default App;
