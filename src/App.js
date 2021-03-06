
import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Board from './components/board.js'
import "./App.css"
import { Button } from 'react-bootstrap';

class App extends Component {
    handleClick() {
        window.location.reload()
    }

    render(){
    return (
        <Router>
            <div>
                <Route exact path ="/" render={ props => (
                    <div>
                        <h1 id="title"> Battleship </h1>

                        <Board />
                        <Button id="resetButton" onClick={this.handleClick}>New game</Button>
                    </div>
                )} />
            </div>
        </Router>
    );
    }
}

export default App;
