import React from "react";
const Card = (props) => {
    const questions = [
        ["characters", "Who is the famous Wookiee co-pilot of the Millennium Falcon?", "Chewbacca"],
        ["characters", "What character is a protocol droid fluent in over six million forms of communication?", "C-3PO"],
        ["characters", "Who is the Sith Lord who was once a Jedi Knight named Anakin Skywalker?", "Darth Vader"],
        ["characters", "Who is the Jedi Master who trained Anakin Skywalker?", "Obi-Wan Kenobi"],
        ["characters", "Who was the Jedi Master that discovered the secret to eternal life through the Force?", "Qui-Gon Jinn"],
        ["planets", "What desert planet is the home of Anakin Skywalker and Luke Skywalker?", "Tatooine"],
        ["planets", "What is the name of Princess Leia's home planet, which was destroyed by the Death Star in \"A New Hope\"?", "Alderaan"],
        ["planets", "What lush, green planet is the home planet of Padmé Amidala?", "Naboo"],
        ["quotes", 'Who said, "I have brought peace, freedom, justice, and security to my new empire"?', "Anakin SKywaker / Darth Vader"],
        ["quotes", 'Finish this iconic line from Princess Leia: "Aren\'t you a little short for a..."', '"...Stormtrooper?"']
    ]

    const getQuestion = () => {
        return questions[Math.floor(Math.random() * questions.length)];
    }

    let [type, question, answer] = getQuestion()
    
    return (
        <div className={`card-inner ${type}`}>
            <div className="question">
                <h2>{question}</h2>
            </div>
                
            <div className="answer">
                <h2>{answer}</h2>
            </div>
            
        </div>
    )
}

export default Card;