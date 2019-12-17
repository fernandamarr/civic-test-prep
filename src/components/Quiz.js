import React, { Component } from 'react';
import qBank from './quizData'

class Quiz extends Component {
	constructor() {
		super()
		this.state = {
			answer: '',
			currentQuestion: 0,
			options: []
		}
		this.handleClick = this.handleClick.bind(this);
		this.checkAnswer = this.checkAnswer.bind(this);

	}

	loadQuiz = () => {
		this.setState(() => {
			return {
				questions: qBank[this.state.currentQuestion].question,
				options: qBank[this.state.currentQuestion].options,
				answers: qBank[this.state.currentQuestion].answer
			}
		})
	};

	componentDidMount() {
		this.loadQuiz()
	}

	handleClick = () => {
		this.setState({
			currentQuestion: this.state.currentQuestion + 1
		})

		console.log(this.state.currentQuestion)
	}

	// updates component
	componentDidUpdate(prevProps, prevState) {
		if (this.state.currentQuestion !== prevState.currentQuestion) {
			this.setState(() => {
				return {
					questions: qBank[this.state.currentQuestion].question,
					options: qBank[this.state.currentQuestion].options,
					answers: qBank[this.state.currentQuestion].answer
				}
			})
		}
	}

	checkAnswer = userAnswer => {
		this.setState({
			answer: userAnswer
		})
	}

	render() {
		const { questions, options, answer, currentQuestion } = this.state;
		return (
			<div className="App">
				<h2>{questions}</h2>
				<span>{`Questions ${currentQuestion} out of ${qBank.length - 1}`}</span>
				{options.map(option => (
					<p key={option.id} onClick={() => this.checkAnswer(option)} className={`ui floating message options ${answer === option ? "selected" : null}`}>
						{option}
					</p>
				))}
				<button onClick={this.handleClick}>Next</button>
			</div>
		);
	}
}

export default Quiz;
