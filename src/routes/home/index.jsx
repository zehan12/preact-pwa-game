import { route } from "preact-router";
import "./style.css"

const Home = () => {
    const startGame = () => {
        route("/game");
    };
    return (<div className="home">
        <div className="head">
            <h2>Match Game</h2>
        </div>
        <button className="button" onClick={startGame}>
            New Game
        </button>
    </div>
    )
};

export default Home;