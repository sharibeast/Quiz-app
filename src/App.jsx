import React, { useState } from "react";

const App = () => {
  const questions = [
    {
      questionText: "What is the capital of france?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false },
      ],
    },
    {
      questionText: "What is the CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const[showScore,setShowScore]=useState(false);
  const [score,setScore] =useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if(isCorrect===true){
      setScore(score+1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className="app">
      {showScore ? (
        <div>You scored 1 out of {questions.lengt}</div>
      ) : (
        <div>
          <section className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion+1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </section>
          <section className="answer-section">
            {questions[currentQuestion].answerOptions.map((item) => (
              <button onClick={()=>handleAnswerButtonClick(item.isCorrect)}>
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
