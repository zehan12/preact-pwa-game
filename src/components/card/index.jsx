import "./style.css";

const Card = ({ hiddenValue, flipStatus, onClick }) => {
    return (
        <div className="card" data-flipStatus={flipStatus}>
            <button className="front" onClick={onClick}>
                ?
            </button>
            <div className="back" >{hiddenValue}</div>
        </div>
    );
}

export default Card;