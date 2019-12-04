import React from 'react';
import './HighScore.css';

class HighScore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Highscores: []
        };
    }

    fetchHighscores() {
        //TODO: FETCH HIGHSCORES INTO STATE
        this.setState({ Highscores: [30, 27, 25, 24, 24, 21, 19, 12, 11, 10] })
    }

    render() {
        if (this.state.Highscores.length == 0) {
            this.fetchHighscores();
        }
        return (
            <div>
                <p>Highscores:</p>
                <ol>
                    <li>{this.state.Highscores[0]}</li>
                    <li>{this.state.Highscores[1]}</li>
                    <li>{this.state.Highscores[2]}</li>
                    <li>{this.state.Highscores[3]}</li>
                    <li>{this.state.Highscores[4]}</li>
                    <li>{this.state.Highscores[5]}</li>
                    <li>{this.state.Highscores[6]}</li>
                    <li>{this.state.Highscores[7]}</li>
                    <li>{this.state.Highscores[8]}</li>
                    <li>{this.state.Highscores[9]}</li>
                </ol>
            </div>
        );
    }
}

export default HighScore;