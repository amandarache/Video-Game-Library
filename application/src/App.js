import React, {useState} from "react";
import Nav from "./components/Nav";
import Landing from "./components/Landing";
import GameTile from "./components/GameTile";
import Feedback from "./components/Feedback";
import mockData from "./mockData";

export default function App() {
    const [feedback, setFeedback] = useState("");

    function handleFeedbackChange(event) {
        let value = event.target && event.target.value;
        setFeedback(value);
    }

    // using Mock API response to simulate what the object could potentially look like
    const games = mockData.map(game => {
        return (
            <GameTile
                key={game.id}
                game={game}
            />
        )
    });      
    
    return (
        <div>
            <Nav/>
            <Landing/>
            <section>
                <h2>Games</h2>
                <span className="gameTilesContainer">{games}</span>
            </section>
            <Feedback
                feedback={feedback}
                handleChange={handleFeedbackChange}
            />
        </div>
    )
}