import React from 'react';
import './HighScore.css';

class HighScore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Highscores: [],
            Usernames: []
        };
    }

    fetchHighscores() {
        let scores = [];
        let names = [];
        const thisRef = this;
        fetch('http://localhost:4000/score', {
            method: 'get'
        }).then(function (response) {
            response.json().then(json => {
                json.scores.forEach(e => {

                    names.push(e.username);
                    scores.push(e.score);
                     thisRef.setState({Highscores: scores})
                    thisRef.setState({Usernames: names})
                })
            })
        });
    }

    render() {
        if (this.state.Highscores.length === 0) {
            this.fetchHighscores();
        }
        return (
            <div>
                <p>Highscores:</p>
                <ol>
                    <li>{this.state.Usernames[0]} {this.state.Highscores[0]}</li>
                    <li>{this.state.Usernames[1]} {this.state.Highscores[1]}</li>
                    <li>{this.state.Usernames[2]} {this.state.Highscores[2]}</li>
                    <li>{this.state.Usernames[3]} {this.state.Highscores[3]}</li>
                    <li>{this.state.Usernames[4]} {this.state.Highscores[4]}</li>
                    <li>{this.state.Usernames[5]} {this.state.Highscores[5]}</li>
                    <li>{this.state.Usernames[6]} {this.state.Highscores[6]}</li>
                    <li>{this.state.Usernames[7]} {this.state.Highscores[7]}</li>
                    <li>{this.state.Usernames[8]} {this.state.Highscores[8]}</li>
                    <li>{this.state.Usernames[9]} {this.state.Highscores[9]}</li>
                </ol>
            </div>
        );
    }
}

export default HighScore;
