import React, {Component} from 'react';
import Question from './Question/Question';
import Answer from './answer/Answer';
import './Quiz.css';
import {Animated} from 'react-animated-css';


class Quiz extends Component {

    state = {
        questions: {
            1: "Which is the smallest planet within our solar system?",
            2: "Uranus has only been visited by what spacecraft?",
            3: "There have been more missions to this planet versus any other planet?",
            4: "Which planet has the most moons?",
            5: "Which is the brightest planet in the night’s sky?",
            6: "Which is the only planet not named after Greek gods or goddesses?",
            7: "Which planets have no moons?",
            8: "The moon called Titan orbits which planet?",
            9: "Which is the second smallest planet within our solar system?",
            10: "Which planet is named after the Roman god of the sea?"
        },
        answers: {
            1: {
                1: "Mercury",
                2: "Venus",
                3: "Earth"
              },

            2: {
                1: "Space Ship Two",
                2: "The Voyager 2",
                3: "Viking 1"
            },
            3: {
                1: "Jupiter",
                2: "Mercury",
                3: "Mars"
            },
           4: {
                1: "Jupiter",
                2: "Uranus",
                3: "Saturn"
   
            },
            5: {
                1: "Pluto",
                2: "Uranus",
                3: "Venus"
   
            },
            6: {
                1: "Earth",
                2: "Mercury",
                3: "Uranus"
   
            },
            7: {
                1: "Uranus and Neptune",
                2: "Mercury and Venus",
                3: "Jupiter and Saturn"
   
            },
            8: {
                1: "Neptune",
                2: "Venus",
                3: "Saturn"
   
            },
            9: {
                1: "Neptune",
                2: "Mars",
                3: "Earth"
   
            },
            10: {
                1: "Neptune",
                2: "Jupiter",
                3: "Saturn"
   
            },
            
        
        
        }, 
        correctAnswers: {
            1: "1",
            2: "2",
            3: "3",
            4: "3",
            5: "3",
            6: "1",
            7: "2",
            8: "3",
            9: "2",
            10: "1"
        },
        correctAnswer: 0,
        clickedAnswer: 0,
        step: 1,
        score: 0,
    
    

        }

    checkAnswer = answer => {
        const{ correctAnswers, step, score } =this.state;
        if(answer === correctAnswers[step]) {
            this.setState({
                score: score + 1,
                correctAnswer: correctAnswers[step],
                clickedAnswer: answer
        
            });
        }else {
            this.setState({
                correctAnswer: 0,
                clickedAnswer: answer,

            });
        }

    }

    nextStep = step => {
        this.setState({
            step: step+1, 
            correctAnswer: 0,
            clickedAnswer: 0

        });
    }

    render () {
        let { questions, answers, step, correctAnswer, clickedAnswer, score} = this.state;

    return (
    <>
    
    <Animated animationIn="lightSpeedIn" animationOut="lightSpeedOut" isVisible={true}>
    <h1 className="quiz"> <span>Welcome to Space Quiz</span> </h1>
    </Animated>
        <div className="content">
            {step <= Object.keys(questions).length ?
            ( <>
            <Question  
            question={questions[step]}
            />
            <Answer  
            answer={answers[step]} 
            step={step}
            checkAnswer={this.checkAnswer}
            correctAnswer={correctAnswer}
            clickedAnswer={clickedAnswer}
            />
            <button
            className="NextStep"
            disabled={
                clickedAnswer && Object.keys(questions).length >= step
                ? false : true 
            }
            onClick={() => this.nextStep(step)}
            >
                Next
            </button>
            </>) :(
                <div ClassName="finalPage">
                    <h2> <span>You have completed the Quiz!</span></h2>
                    <h3> <span>Your score is: {score} of {Object.keys(questions).length}</span></h3>
                    <h3><span>Thank you for taking the quiz! These are the answers:</span></h3>
                    <h3><span>1: Mercury</span></h3>
                    <h3><span>2: The Voyager 2</span> </h3>
                    <h3><span>3: Mars</span> </h3>
                    <h3><span>4: Saturn</span> </h3>
                    <h3><span>5: Venus</span> </h3>
                    <h3><span>6: Earth</span> </h3>
                    <h3><span>7: Mercury and Venus</span> </h3>
                    <h3><span>8: Saturn</span> </h3>
                    <h3><span>9: Mars</span> </h3>
                    <h3><span>10: Neptune</span> </h3>
                    <h3><span>Hope you had fun!</span> </h3>
                </div>
            )
         }
        </div>
       </>
    
   );
}
}
export default Quiz;