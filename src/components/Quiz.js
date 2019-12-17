import React, { Component } from 'react';
import { qBank } from './quizData'

class Quiz extends Component {
  constructor() {
    super()
    this.state = {
      userAnswer: null,
      currentQuestion: 0,
      options: [],
      end: false,
      score: 0,
      disabled: true
    }
    this.handleClick = this.handleClick.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
    this.finishQuiz = this.finishQuiz.bind(this);

  }

  loadQuiz = () => {
    this.setState(() => {
      return {
        questions: qBank[this.state.currentQuestion].question,
        options: qBank[this.state.currentQuestion].options,
        answer: qBank[this.state.currentQuestion].answer
      }
    })
  };

  componentDidMount() {
    this.loadQuiz()
  }

  handleClick = () => {
    const { userAnswer, answer, score } = this.state;

    // increases score if answer is correct
    if (userAnswer === answer) {
      this.setState({
        score: score + 1
      })
    }
    // moves on to next question
    this.setState({
      currentQuestion: this.state.currentQuestion + 1
    })
  }

  // updates component
  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentQuestion !== prevState.currentQuestion) {
      this.setState(() => {
        return {
          disabled: true,
          questions: qBank[this.state.currentQuestion].question,
          options: qBank[this.state.currentQuestion].options,
          answer: qBank[this.state.currentQuestion].answer
        }
      })
    }
  }

  checkAnswer = answer => {
    this.setState({
      userAnswer: answer,
      disabled: false
    })
  }

  finishQuiz = () => {
    if (this.state.currentQuestion === qBank.length - 1) {
      this.setState({
        end: true
      })
    }
  }

  playAgain = () => {
    this.setState({
      userAnswer: null,
      currentQuestion: 0,
      options: [],
      end: false,
      score: 0,
      disabled: true
    })
  }

  render() {
    const { questions, options, userAnswer, currentQuestion, end } = this.state;
    if (end) {
      return (
      <div>
        <h2>
          Game Over! <br/> Your final score is {this.state.score}
        </h2>
        <button 
            className='ui inverted button'
            onClick={this.playAgain}>Play Again</button>
        {/* <div>Below are all the correct answers for you to review: 
        <ul>
          {qBank.map((item, index) => (
            <li className="ui floating message options" key={index}>{item.question}: {item.answer}</li>
          ))}
        </ul>

        </div> */}
      </div>
      );
    } else {
      return (
        <div className="App">
          <h1>{questions}</h1>
        
          <span>{`Question ${currentQuestion + 1} out of ${qBank.length}`}</span>
          {options.map(option => (
            <p
              key={option.id}
              className={`ui floating message options 
            ${userAnswer === option ? "selected" : null}`}
              onClick={() => this.checkAnswer(option)}>
              {option}
            </p>
          ))}
          {currentQuestion < qBank.length - 1 && (
            <button
              className='ui inverted button'
              disabled={this.state.disabled}
              onClick={this.handleClick}>
              Next
            </button>
          )}
          {currentQuestion === qBank.length - 1 && (
            <button 
            className='ui inverted button'
            onClick={this.finishQuiz}>Finish</button>
          )}
        </div>
      );
    }  
  }
}

export default Quiz;
