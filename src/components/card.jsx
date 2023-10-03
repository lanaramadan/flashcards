import React from "react";
import { useState, useEffect } from 'react';
import questionsJson from "./questions.json"

const Card = () => {
    // constants to keep track of the dictionary
    const [questionDictionary, setQuestionDictionary] = useState(questionsJson.questions);
    const [questionIndex, setQuestionIndex] = useState(0);

    // constants to keep track of the streaks
    const [streak, setStreak] = useState(0);
    const [longestStreak, setLongestStreak] = useState(0);

    // constant to keep track of the current side - alternates between "question" and "answer"
    const [currentSide, setCurrentSide] = useState("question");

    // constant to keep track of whether the guess was correct - alternates between "none" and "correct" and "incorrect"
    const [currentGuessType, setCurrentGuessType] = useState("none");

    // constants to keep track of the current question
    const [type, setType] = useState('planets');
    const [question, setQuestion] = useState('Click the arrow to begin!');
    const [answer, setAnswer] = useState('Click the arrow to begin!');
    const [guess, setGuess] = useState("");

    // switches the current side when card is clicked
    const switchSide = () => {setCurrentSide(currentSide === "question" ? "answer" : "question")};

    // updates guess with what's in the text box
    const handleGuess = (e) => {setGuess(e.target.value)};
    const checkGuess = (answer) => {
        // checks whther the entered guess is correct
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

    const subCount = () => setQuestionIndex(questionIndex - 1);
    const addCount = () => setQuestionIndex(questionIndex + 1);

    const getQuestion = (currentIndex) => {
        // returns question info based on the current index
        let randomQuestionInfo = questionDictionary[Math.abs(currentIndex % Object.keys(questionDictionary).length)];
        return [randomQuestionInfo.type, randomQuestionInfo.question, randomQuestionInfo.answer]
    };

    const shuffleQuestions = () => {
        let newQuestionDictionary = questionsJson.questions

        // shuffling the dictionary
        for (let i = newQuestionDictionary.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newQuestionDictionary[i], newQuestionDictionary[j]] = [newQuestionDictionary[j], newQuestionDictionary[i]];
        }

        // updating the dictionary and resetting the index
        setQuestionDictionary(newQuestionDictionary)
        setQuestionIndex(0)
        updateQuestion()

        return newQuestionDictionary
    }

    const updateQuestion = () => {
        // updating the constants that track the current question
        const [raw_type, raw_question, raw_answer] = getQuestion(questionIndex);
        setType(raw_type);
        setQuestion(raw_question);
        setAnswer(raw_answer);

        // resetting variables
        setCurrentSide("question")
        setCurrentGuessType("none")
        setGuess('')
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
                    <button onClick={() => {
                        subCount();
                        updateQuestion();
                    }}>←</button>

                    <button onClick={() => {
                        addCount();
                        updateQuestion();
                    }}>→</button>


                    {/*<button onClick={nextQuestion}>→</button>*/}
                    <button onClick={shuffleQuestions}>🔀</button>
                </div>
            </div>
        </div>
    )
}

export default Card;