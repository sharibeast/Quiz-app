import React, { useState } from "react";
import questions from './data'

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
const handleNewGameClick = (params) => {
  setCurrentQuestion(0)
  setShowScore(false)
  setScore(0)
}
  return (
    <div className="app">
      {showScore ? (
        <div>
          <div>
          You scored {score} out of {questions.length}
        </div>
        <button className='new-game' onClick={handleNewGameClick}>New game</button>
        </div>
      ) : (
        <div>
          <section className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </section>
          <section className="answer-section">
            {questions[currentQuestion].answerOptions.map((item) => (
              <button onClick={() => handleAnswerButtonClick(item.isCorrect)}>
                {item.answerText}
              </button>
            ))}
          </section>
        </div>
      )}
    </div>
  );
};

export default App;
