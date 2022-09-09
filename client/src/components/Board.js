import "../stylesheets/board.css";
import Square from "./Square";
import{useState} from "react";
import calcWinner from "./calcWinner";

const Board = () => {
    
    const initialSquares = Array(9).fill(null);
    const [squares,setSquares] = useState(initialSquares);
    const [xIsNext,setXIsNext] = useState(true);

    const handleClickEvent = (i) => {
        const newSquares = [...squares];

        const winnerDeclared = Boolean(calcWinner(newSquares));
        const squareFilled = Boolean(newSquares[i]);
        if(winnerDeclared || squareFilled) {
            return;
        }
        newSquares[i] = xIsNext ? "X" : "O";
        setSquares(newSquares);
        setXIsNext(!xIsNext);
    }
    
    const square = (i) => {
        return(
            <Square value={squares[i]} onClickEvent = {() => handleClickEvent(i)}/>
        )
    }
    const winner = calcWinner(squares);
    const status = winner ? `Winner: ${winner}` : `Next Player: ${xIsNext ? 'X' : 'O'}` 
    return (
        <div className="board">
        <h1>{status}</h1>
        <div className="board-row">
            {square(0)}{square(1)}{square(2)}
        </div>
        <div className="board-row">
            {square(3)}{square(4)}{square(5)}
        </div>
        <div className="board-row">
            {square(6)}{square(7)}{square(8)}
        </div>
        </div>
    )
}

export default Board;