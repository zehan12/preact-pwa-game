import { route } from "preact-router";
import style from "./style.css";
const Win = () => {

    const startGame = () => {
        route("/game");
    };

    return (
        <div class={style.win}>
            <div class={style.head}>
                <div class={style.emoji}>🎉</div>
                <div>You won!</div>
            </div>
            <button class={style.button} onClick={startGame}>
                New Game
            </button>
        </div>
    );
}
export default Win;