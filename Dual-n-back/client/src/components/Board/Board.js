import React from 'react';
import Square from '../Square/Square';
import './Board.css';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            randomPosition: null,
            randomSound: null,
            score: 0,
            history: [],
            gameInProgress: false,
            timerId: null,
            n: 2
        };
    }

    getSoundMessage() {
        switch (this.state.randomSound) {
            case 0:
                return "One";
            case 1:
                return "Two";
            case 2:
                return "Supersoaker";
            case 3:
                return "Red";
            case 4:
                return "Scooter";
            case 5:
                return "Black";
            case 6:
                return "White";
            case 7:
                return "Mogadishu";
            case 8:
                return "Nine";
        }
    }

    renderSquare(i) {
        if (this.state.randomPosition == i) {
            return <Square value={this.state.squares[i]} className="picked-square" />
        }
        return <Square value={this.state.squares[i]} className="square" />;
    }

    textToSpeech() {
        var message = this.getSoundMessage();
        var msg = new SpeechSynthesisUtterance(message)
        var voices = window.speechSynthesis.getVoices()
        msg.voice = voices[0]
        window.speechSynthesis.speak(msg)
    }

    startGame() {
        this.setState({ gameInProgress: true });
        this.setState({ timerId: window.setInterval(() => this.gameIterations(), 4000) })
    }

    gameIterations() {
        this.setState({ randomPosition: Math.floor(Math.random() * 9), randomSound: Math.floor(Math.random() * 9) });
        this.state.history.push(this.state);
        console.log("Game history: ", this.state.history);
        this.textToSpeech();
        if (this.state.history.length == 24) {
            // STOP GAME
            console.log("Game is over! Final score: ", this.state.score)
            this.setState({ gameInProgress: false })
            window.clearInterval(this.state.timerId);
        }
    }

    stopGame() {
        clearInterval(this.state.timerId);
        this.setState({ gameInProgress: false });
        console.log("You stopped the game! Final score: ", this.state.score)
    }

    soundRightClicked() {
        if (this.state.gameInProgress) {
            if (this.state.randomSound == this.state.history[this.state.history.length - this.state.n].randomSound) {
                this.setState({ score: this.state.score + 1 });
            }
            else {
                this.setState({ score: this.state.score - 1 });
            }
        }
    }

    positionRightClicked() {
        if (this.state.gameInProgress) {
            if (this.state.randomPosition == this.state.history[this.state.history.length - 2].randomPosition) {
                this.setState({ score: this.state.score + 1 });
            }
            else
                this.setState({ score: this.state.score - 1 });
        }
    }

    render() {
        return (
            <div>
                <p>Select n</p>
                <select onChange={(e) => this.setState({ n: parseInt(e.currentTarget.value) })}>
                    <option value="1">
                        1
                        </option>
                    <option value="2">
                        2
                        </option>
                    <option value="3">
                        3
                        </option>
                    <option value="4">
                        4
                        </option>
                    <option value="5">
                        5
                        </option>
                    <option value="6">
                        6
                        </option>
                    <option value="7">
                        7
                        </option>
                </select>

                <p>
                    score: {this.state.score}
                </p>

                <button className={this.state.gameInProgress ? 'hidden' : 'button'} onClick={() => this.startGame()}>Start</button>
                <button className={!this.state.gameInProgress ? 'hidden' : 'button'} onClick={() => this.stopGame()}>Stop</button>


                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
                <div className="buttonContainer">
                    <button className="button" onClick={() => this.positionRightClicked()}>Position</button>
                    <button className="button" onClick={() => this.soundRightClicked()}>Sound</button>
                </div>
            </div>
        );
    }
}

export default Board;