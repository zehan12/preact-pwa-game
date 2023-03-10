import { Component } from "preact";
import { Router } from "preact-router";

import Home from "./routes/home";
import Game from "./routes/game";
import Win from "./routes/win";

class App extends Component {

  generateGridCards = () => {
    const emojis = ["🚀", "😺", "🐶", "🏈", "📦", "🙊"];

    return [...emojis, ...emojis]
      .sort(() => Math.random() - Math.random())
      .map((emoji, idx) => ({ key: idx, emoji }));
  }


  render() {
    return (
      <div id="app">
        <Router onChange={this.handleRoute}>
          <Home path="/" />
          <Game path="/game" cards={this.generateGridCards()} />
          <Win path="/win" />
        </Router>
      </div>
    );
  }
}

export default App