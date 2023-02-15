import { route } from "preact-router";
import style from "./style.css";

const Home = () => {
    const startGame = () => {
        route("/game");
    };
    return (<div class={style.home}>
        <div class={style.head}>
            <h2>Match Game</h2>
        </div>
        <button class={style.button} onClick={startGame}>
            New Game
        </button>
    </div>
    )
};

export default Home;