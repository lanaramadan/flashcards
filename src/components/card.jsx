import React from "react";
const Card = (props) => {
    const charactersQuestions = {
        "Who is the famous Wookiee co-pilot of the Millennium Falcon?": "Chewbacca",
        "What character is a protocol droid fluent in over six million forms of communication?": "C-3PO",
        "Who is the Sith Lord who was once a Jedi Knight named Anakin Skywalker?": "Darth Vader",
        "Who is the wise and powerful Jedi Master who trained Anakin Skywalker?": "Obi-Wan Kenobi",
        "Who was the Jedi Master that discovered the secret to eternal life through the Force?": "Qui-Gon Jinn"
    };

    const planetQuestions = {
        "What desert planet is the home of Anakin Skywalker and Luke Skywalker?": "Tatooine",
        "What is the name of Princess Leia's home planet, which was destroyed by the Death Star in \"A New Hope\"?": "Alderaan",
        "What lush, green planet is the home planet of Padmé Amidala?": "Naboo"
    };

    const quoteQuestions = {
        'Who said, "I have brought peace, freedom, justice, and security to my new empire"?': "Anakin SKywaker / Darth Vader",
        'Finish this iconic line from Princess Leia: "Aren\'t you a little short for a..."': '"...Stormtrooper?"'
    };

    
    return (
        <div>
        <h2>Character Questions</h2>
        {Object.keys(charactersQuestions).map((question) => (
            <div>{question}</div>
        ))}

        <h2>Planet Questions</h2>
        {Object.keys(planetQuestions).map((question) => (
            <div>{question}</div>
        ))}

        <h2>Quote Questions</h2>
        {Object.keys(quoteQuestions).map((question) => (
            <div>{question}</div>
        ))}
        </div>
    )
}

export default Card;