import React from "react";
import { useState } from 'react';
import questionsJson from "./questions.json"

const Card = (props) => {
    const getQuestion = () => {
        // return questions[Math.floor(Math.random() * questions.length)];
        let randomQuestionInfo = questionsJson.questions[Math.floor(Math.random() * questionsJson.questions.length)];
        return [randomQuestionInfo.type, randomQuestionInfo.question, randomQuestionInfo.answer]

    };

    const [questionIndex, setQuestionIndex] = useState(0);

    const [streak, setStreak] = useState(0);
    const [longestStreak, setLongestStreak] = useState(0);

    // alternates between "question" and "answer"
    const [currentSide, setCurrentSide] = useState("question");

    // alternates between "none" and "correct" and "incorrect"
    const [currentGuessType, setCurrentGuessType] = useState("none");

    const [raw_type, raw_question, raw_answer] = getQuestion();
    const [type, setType] = useState(raw_type);
    const [question, setQuestion] = useState(raw_question);
    const [answer, setAnswer] = useState(raw_answer);
    const [guess, setGuess] = useState("");

    const previousQuestion = () => {

    };

    const newQuestion = () => {
        const [raw_type, raw_question, raw_answer] = getQuestion();
        setType(raw_type);
        setQuestion(raw_question);
        setAnswer(raw_answer);
        setCurrentSide("question")
        setCurrentGuessType("none")
        setGuess('')
    };

    const switchSide = () => {setCurrentSide(currentSide === "question" ? "answer" : "question")};

    const handleGuess = (e) => {setGuess(e.target.value)};
    const checkGuess = (answer) => {
        if (guess.toLowerCase() === answer.toLowerCase()) {
            setCurrentGuessType("correct")
            setStreak(streak + 1)
        }
        else {
            setCurrentGuessType("incorrect")
            if (streak > longestStreak) {
                setLongestStreak(streak)
            }
            setStreak(0)
        }
    };

    return (
        <div>
            <div className="streaks">
                <h4 className="streak">Current Streak: {streak}</h4>
                <h4 className="streak">Longest Streak: {longestStreak}</h4>
            </div>

            <div className="card-mechanism">
                <div className={`content ${type}`} onClick={switchSide}>
                    <h2>{currentSide === "question" ? question : answer}</h2>
                </div>

                <div className="card-guess">
                    <form>
                        <input
                            type="text"
                            placeholder="Place your answer here..."
                            onChange={handleGuess}
                            className ={`textbox ${currentGuessType}`}
                            value={guess}
                        />

                        <button type="button" className="button submit" onClick={() => checkGuess(answer)}>
                            Submit Guess
                        </button>
                    </form>

                </div>

                <div className="arrow">
                    <button onClick={previousQuestion}>←</button>
                    <button onClick={newQuestion}>→</button>
                </div>
            </div>
        </div>
    )
}

export default Card;