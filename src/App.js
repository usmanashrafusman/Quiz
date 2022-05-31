import React, { useState } from "react";
import Star from "./Components/Star";
import questions from "./questions";
const App = () => {
  const [nextQuestion, setNextQuestion] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [question, setQuestion] = useState(questions[currentQuestion]);
  const [givenAns, setGivenAns] = useState(false);
  const [maximum, setMaximum] = useState(100);
  const [minimumScore, setMinimumScore] = useState(0);
  const [noOfCorrectAns, setNoOfCorrectAns] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);

  const calculateMaximun = () => {
    const maximun = questions.length - currentQuestion;
    const allCorrect = maximun * 5;
    const maximumToscore = allCorrect + minimumScore;
    setMaximum(maximumToscore);
  };
  const submit = (ans) => {
    if (ans === question.correct_answer) {
      setMinimumScore(minimumScore + 5);
      setGivenAns(true);
      setNoOfCorrectAns(noOfCorrectAns + 1);
    } else {
      setGivenAns(false);
    }
    const current = questions.length / noOfCorrectAns - minimumScore;
    setCurrentScore(current);
    setNextQuestion(true);
    setQuestion(questions[currentQuestion]);
    calculateMaximun();
  };
  const next = () => {
    setCurrentQuestion(currentQuestion + 1);
    setNextQuestion(false);
    setQuestion(questions[currentQuestion]);
  };
  return (
    <div className="question-containe">
      <div className="topBar" style={{ width: `${currentQuestion * 5}%` }}></div>
      <div className="question">
        <h1>{`Question ${currentQuestion + 1} of ${questions.length}`}</h1>
        <p>{question.category}</p>
        <Star difficulty={question.difficulty} />
        <p className="questionText">{question.question}</p>
        <div className="options">
          {question.incorrect_answers.map((option, index) => (
            <div className="option-wrapper">
              <div className="option" key={index} onClick={() => submit(option)}>
                <p>{option}</p>
              </div>
            </div>
          ))}
          <div className="option-wrapper">
            <div className="option" onClick={() => submit(question.correct_answer)}>
              <p>{question.correct_answer}</p>
            </div>
          </div>
        </div>
        {nextQuestion && (
          <div className="nextQuestion">
            {givenAns ? <h1>Correct!</h1> : <h1>Sorry!</h1>}
            <div className="option nextBtn" onClick={() => next()}>
              <p>Next Question</p>
            </div>
          </div>
        )}
        <div className="score-wrapper">
          <div className="score">
            <p>{`Score ${minimumScore}`}</p>
            <p>{`Max Score ${maximum}%`}</p>
          </div>
          <div className="scoreBar">
            <div className="lowestScore" style={{ width: `${minimumScore}%` }}></div>
            <div className="currentScore" style={{ width: `${currentScore}%` }}></div>
            <div className="maximumScore" style={{ width: `${maximum - minimumScore}%` }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
