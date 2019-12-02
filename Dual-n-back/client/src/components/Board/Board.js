import React from 'react';
import Square from '../Square/Square';
import './Board.css';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            randomPosition: null,
            randomSound: null
        };
    }

    renderSound() {
        switch (this.randomSound) {
            case 0:
                return "One";
            case 1:
                return "Two";
            case 2:
                return "Three";
            case 3:
                return "Four";
            case 4:
                return "Five";
            case 5:
                return "Six";
            case 6:
                return "Seven";
            case 7:
                return "Eight";
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
        var message = this.renderSound();
        var msg = new SpeechSynthesisUtterance(message)
        var voices = window.speechSynthesis.getVoices()
        msg.voice = voices[0]
        window.speechSynthesis.speak(msg)
    }

    startGame() {
        window.setInterval(() => {
            this.setState({ randomPosition: Math.floor(Math.random() * 9), randomSound: Math.floor(Math.random() * 9) });
            this.textToSpeech();
        }, 2000)
    }

    render() {
        return (
            <div>
                <button className="button" onClick={() => this.startGame()}>Start</button>

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
                    <button className="button">Position</button>
                    <button className="button">Sound</button>
                </div>
            </div>
        );
    }
}

export default Board;