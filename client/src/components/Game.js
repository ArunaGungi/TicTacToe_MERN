import { React } from "react";
import "../stylesheets/game.css";
import Board from "./Board";

const Game = () => {
    return (
        <div className="game">
            <h1>Tic Tac Toe</h1>
            <Board/>
        </div>
    )
}

export default Game;