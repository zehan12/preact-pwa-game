import { Component } from "preact";
import { route } from "preact-router";

import Card from "../../components/card";
import "./style.css"
// console.log(style)

class Game extends Component {
    state = {
        flippedCards: { first: {}, second: {} },
        isMatched: {},
        score: 0,
    };

    getCardFlipStatus = ({ key, emoji }) => {
        const { flippedCards, isMatched } = this.state;

        if (isMatched[emoji]) {
            return "MATCHED";
        }

        if ([flippedCards.first.key, flippedCards.second.key].includes(key)) {
            return "FLIPPED";
        }

        return "DEFAULT";
    };

    createCardClickListener = (card) => () => {
        this.flipCard(card);
    };

    flipCard = (card) => {
        const { flippedCards } = this.state;

        // if it's the first card to be flipped, we don't need
        // to worry about anything else
        const isFirstFlippedCard = Object.keys(flippedCards.first).length === 0;
        if (isFirstFlippedCard) {
            return this.setState({ flippedCards: { ...flippedCards, first: card } });
        }

        this.flipSecondCard(card);
    };

    flipSecondCard = (card) => {
        const { flippedCards, isMatched, score } = this.state;

        // Flip the second and then check after 500 ms whether it's a match
        // or mismatch and handle it
        this.setState({ flippedCards: { ...flippedCards, second: card } });
        setTimeout(() => {
            if (flippedCards.first.emoji === card.emoji) {
                // it's a match
                this.setState({
                    score: score + 1,
                    isMatched: { ...isMatched, [card.emoji]: true },
                });
                if (score === 5) {
                    this.handleWin();
                }
            }

            // it's a mismatch, so flip the cards back
            this.setState({ flippedCards: { first: {}, second: {} } });
        }, 500);
    };

    handleWin = () => {
        setTimeout(() => {
            route("/win");
        }, 500);
    };

    render(props, state) {
        return (
            <div className="game">
                <header className="score">Score: {state.score}</header>
                <div className="grid">
                    {props.cards.map((card) => (
                        <Card
                            hiddenValue={card.emoji}
                            flipStatus={this.getCardFlipStatus(card)}
                            disabled={false}
                            onClick={this.createCardClickListener(card)}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default Game;