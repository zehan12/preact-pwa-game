import style from "./style.css";

const Card = ({ hiddenValue, flipStatus, onClick }) => {
    return (
        <div class={style.card} data-flipStatus={flipStatus}>
            <button class={style.front} onClick={onClick}>
                ?
            </button>
            <div class={style.back}>{hiddenValue}</div>
        </div>
    );
}

export default Card;