import { route } from "preact-router";
import "./style.css";
const Win = () => {

    const startGame = () => {
        route("/game");
    };

    return (
        <div className="win">
            <div className="head">
                <div className="emoji">🎉</div>
                <div>You won!</div>
            </div>
            <button className="button" onClick={startGame}>
                New Game
            </button>
        </div>
    );
}
export default Win;