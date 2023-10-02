import React from "react";
import { useState } from 'react';
import questionsJson from "./questions.json"

const Card = (props) => {
    const getQuestion = () => {
        // return questions[Math.floor(Math.random() * questions.length)];
        let randomQuestionInfo = questionsJson.questions[Math.floor(Math.random() * questionsJson.questions.length)];
        return [randomQuestionInfo.type, randomQuestionInfo.question, randomQuestionInfo.answer]

    };

    const [currentSide, setCurrentSide] = useState("question");
    const [raw_type, raw_question, raw_answer] = getQuestion();
    const [type, setType] = useState(raw_type);
    const [question, setQuestion] = useState(raw_question);
    const [answer, setAnswer] = useState(raw_answer);

    const newQuestion = () => {
        const [raw_type, raw_question, raw_answer] = getQuestion();
        setType(raw_type);
        setQuestion(raw_question);
        setAnswer(raw_answer);
        setCurrentSide("question")
    };

    const switchSide = () => {setCurrentSide(currentSide === "question" ? "answer" : "question")};

    
    return (
        <div className="card-mechanism">
            <div className={`content ${type}`} onClick={switchSide}>
                <h2>{currentSide === "question" ? question : answer}</h2>
            </div>

            <div className="arrow">
                <button onClick={newQuestion}>⭢</button>
            </div>
        </div>
    )
}

export default Card;