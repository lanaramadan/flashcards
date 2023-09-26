import React from "react";
import { useState } from 'react';

const Card = (props) => {
    const questions = [
        ["characters", "Who is the famous Wookiee co-pilot of the Millennium Falcon?", "Chewbacca"],
        ["characters", "What character is a protocol droid fluent in over six million forms of communication?", "C-3PO"],
        ["characters", "Who is the Sith Lord who was once a Jedi Knight named Anakin Skywalker?", "Darth Vader"],
        ["characters", "Who is the Jedi Master who trained Anakin Skywalker?", "Obi-Wan Kenobi"],
        ["characters", "Who was the Jedi Master that discovered the secret to eternal life through the Force?", "Qui-Gon Jinn"],
        ["planets", "What desert planet is the home of Anakin Skywalker and Luke Skywalker?", "Tatooine"],
        ["planets", "What is the name of Princess Leia's home planet, which was destroyed by the Death Star?", "Alderaan"],
        ["planets", "What lush, green planet is the home planet of Padmé Amidala?", "Naboo"],
        ["quotes", 'Who said, "I have brought peace, freedom, justice, and security to my new empire"?', "Anakin Skywaker / Darth Vader"],
        ["quotes", 'Finish this iconic line from Princess Leia: "Aren\'t you a little short for a..."', '"...Stormtrooper?"']
    ];

    const getQuestion = () => {
        return questions[Math.floor(Math.random() * questions.length)];
    };

    const [raw_type, raw_question, raw_answer] = getQuestion();
    const [type, setType] = useState(raw_type);
    const [question, setQuestion] = useState(raw_question);
    const [answer, setAnswer] = useState(raw_answer);

    const newQuestion = () => {
        const [raw_type, raw_question, raw_answer] = getQuestion();
        setType(raw_type);
        setQuestion(raw_question);
        setAnswer(raw_answer);
    };
    
    return (
        <div className="card-mechanism">
            <div className={`card-inner ${type}`}>
                <div className="question">
                    <h2>{question}</h2>
                </div>
                    
                <div className="answer">
                    <h2>{answer}</h2>
                </div>

            </div>

            <div className="arrow">
                <button onClick={newQuestion}>⭢</button>
            </div>
        </div>
    )
}

export default Card;